const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(
  "/assets",
  express.static(path.join(__dirname, "../frontend/src/assets"))
);
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// MongoDB Connection for Fleet Booking
mongoose
  .connect("mongodb://127.0.0.1:27017/fleetBookingDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected to fleetBooking"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Fleet Booking Schema and Model
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
  time: String,
  vehicleName: String,
});
const Booking = mongoose.model("Booking", bookingSchema);

// Fleet Booking Endpoints
app.post("/api/book", async (req, res) => {
  const { name, email, date, time, vehicleName } = req.body;

  try {
    const newBooking = new Booking({ name, email, date, time, vehicleName });
    await newBooking.save();
    res.status(201).json({ message: "Booking successful!" });
  } catch (err) {
    console.error("Error saving booking:", err);
    res.status(500).json({ error: "Failed to save booking" });
  }
});

app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

app.put("/api/book/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, date, time, vehicleName } = req.body;

  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { name, email, date, time, vehicleName },
      { new: true }
    );
    if (updatedBooking) {
      res
        .status(200)
        .json({ message: "Booking updated successfully!", updatedBooking });
    } else {
      res.status(404).json({ error: "Booking not found" });
    }
  } catch (err) {
    console.error("Error updating booking:", err);
    res.status(500).json({ error: "Failed to update booking" });
  }
});

app.delete("/api/book/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBooking = await Booking.findByIdAndDelete(id);
    if (deletedBooking) {
      res.status(200).json({ message: "Booking deleted successfully!" });
    } else {
      res.status(404).json({ error: "Booking not found" });
    }
  } catch (err) {
    console.error("Error deleting booking:", err);
    res.status(500).json({ error: "Failed to delete booking" });
  }
});

// MongoDB Connection for Contact Form
const contactDb = mongoose.createConnection(
  "mongodb://127.0.0.1:27017/contactDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
contactDb.once("open", () => {
  console.log("MongoDB connected to contactDB");
});

// Contact Schema and Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const Contact = contactDb.model("Contact", contactSchema);

// Contact Form Endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: "Contact form submitted successfully!" });
  } catch (err) {
    console.error("Error saving contact message:", err);
    res.status(500).json({ error: "Failed to save contact message" });
  }
});

// Vehicle Schema and Model
const vehicleSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  price: String,
});
const Vehicle = mongoose.model("Vehicle", vehicleSchema);

// Vehicles Data
const vehicles = [
  {
    id: 1,
    name: "Vauxhall Insignia",
    image: "assets/insignia.png",
    description: "A sophisticated executive sedan for a premium experience.",
    price: "$12000",
  },
  {
    id: 2,
    name: "Executive Sedan",
    image: "assets/esedan.webp",
    description: "Comfort and luxury in a classic executive sedan.",
    price: "$13000",
  },
  {
    id: 3,
    name: "Class Mercedes",
    image: "assets/cmer.png",
    description: "A luxury sedan offering unmatched comfort and performance.",
    price: "$15000",
  },
  {
    id: 4,
    name: "Executive SUV",
    image: "assets/esuv.png",
    description: "Luxury and performance combined in a spacious SUV.",
    price: "$18000",
  },
  {
    id: 5,
    name: "Stretch Limousine",
    image: "assets/strech.png",
    description: "Perfect for special occasions and luxury transport.",
    price: "$35000",
  },
  {
    id: 6,
    name: "Super Stretch Limousine",
    image: "assets/sstrech.png",
    description: "A luxurious and spacious limo, ideal for large groups.",
    price: "$45000",
  },
  {
    id: 7,
    name: "Hummer Limousine",
    image: "assets/hummer.png",
    description: "An extravagant limo with high-end features and bold styling.",
    price: "$55000",
  },
  {
    id: 8,
    name: "Party Bus Limousine",
    image: "assets/pbus.png",
    description: "The ultimate limo for a fun and luxurious party experience.",
    price: "$60000",
  },
  {
    id: 9,
    name: "Chrysler 300C Limousine",
    image: "assets/C300.png",
    description:
      "A stylish and modern limo with sleek design and premium features.",
    price: "$40000",
  },
];

// Insert Vehicles into Database
async function insertVehicles() {
  try {
    const vehicleCount = await Vehicle.countDocuments();
    if (vehicleCount === 0) {
      await Vehicle.insertMany(vehicles);
      console.log("Vehicles inserted successfully!");
    } else {
      console.log("Vehicles already exist in the database.");
    }
  } catch (err) {
    console.error("Error inserting vehicles:", err);
  }
}
insertVehicles();

// Vehicle Endpoints
app.get("/api/vehicles", async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (err) {
    console.error("Error fetching vehicles:", err);
    res.status(500).json({ error: "Failed to fetch vehicles" });
  }
});

// MongoDB Connection for Subscriptions
const subscriptionDb = mongoose.createConnection(
  "mongodb://127.0.0.1:27017/subscriptionsDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
subscriptionDb.once("open", () => {
  console.log("MongoDB connected to subscriptionsDB");
});

// Subscription Schema and Model
const subscriptionSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now },
});
const Subscription = subscriptionDb.model("Subscription", subscriptionSchema);

// Subscription Endpoint
app.post("/api/subscribe", async (req, res) => {
  const { email } = req.body;

  try {
    const newSubscription = new Subscription({ email });
    await newSubscription.save();
    res.status(201).json({ message: "Subscribed successfully!" });
  } catch (err) {
    console.error("Error subscribing:", err);
    if (err.code === 11000) {
      res.status(400).json({ error: "Email is already subscribed" });
    } else {
      res.status(500).json({ error: "Failed to subscribe" });
    }
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
