import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Styles from "./Fleets.module.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"; // Import toast notifications

const Fleets = ({ handleBookingSubmit, selectedVehicle, loading }) => {
  //Use States to Handle Booking Form Data To save new Booking and Handle Booking after Modifying

  const [vehicles, setVehicles] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    vehicleName: "",
  });
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [selectedVehicleForBooking, setSelectedVehicleForBooking] =
    useState(null);

  //UseEffect Function to Retrieve Vehicles From Backend

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/vehicles");
        if (Array.isArray(response.data)) {
          setVehicles(response.data);
        } else {
          setError("Expected an array of vehicles.");
        }
      } catch (err) {
        setError("Error fetching vehicles.");
        console.error(err);
      } finally {
        setLoadingData(false);
      }
    };

    //FetchBookings Code to Retrieve Bookings we Made

    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/bookings");
        setBookings(response.data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      }
    };

    fetchVehicles();
    fetchBookings();
  }, []);

  //Handle Input Data and Send it to Backend

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      vehicleName:
        selectedVehicleForBooking?.name || selectedBooking?.vehicleName,
    };

    try {
      if (isModifyMode && selectedBooking) {
        // Modify existing booking
        const response = await axios.put(
          `http://localhost:5000/api/book/${selectedBooking._id}`,
          updatedFormData
        );
        toast.success("Booking updated successfully!"); // Notify the user

        // Re-fetch bookings after modification
        const updatedBookings = await axios.get(
          "http://localhost:5000/api/bookings"
        );
        setBookings(updatedBookings.data);

        resetForm();
      } else {
        // Create new booking
        const response = await axios.post(
          "http://localhost:5000/api/book",
          updatedFormData
        );
        toast.success("Booking request submitted successfully!"); // Notify the user

        // Re-fetch bookings after new booking
        const updatedBookings = await axios.get(
          "http://localhost:5000/api/bookings"
        );
        setBookings(updatedBookings.data);

        resetForm();
      }
    } catch (err) {
      console.error("Error handling form submission:", err);
      toast.error("An error occurred while submitting the booking.");
    }
  };

  //Handle Data Changed After Modifying

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Handle New Booking Of Vehicle

  const handleBooking = (vehicle) => {
    setIsModifyMode(false);
    setSelectedVehicleForBooking(vehicle);
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      vehicleName: vehicle.name,
    });
  };

  //Reset Form after Submitting

  const resetForm = () => {
    setIsModifyMode(false);
    setSelectedBooking(null);
    setFormData({ name: "", email: "", date: "", time: "", vehicleName: "" });
    setSelectedVehicleForBooking(null); // Reset selected vehicle
  };

  //Handle Booking Form to Make it Modifiable

  const handleModify = (booking) => {
    setIsModifyMode(true);
    setSelectedBooking(booking);
    setFormData({
      name: booking.name,
      email: booking.email,
      date: booking.date,
      time: booking.time,
      vehicleName: booking.vehicleName,
    });
  };

  //Handle Deletion of Booking

  const handleDelete = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:5000/api/book/${bookingId}`);
      toast.success("Booking deleted successfully!"); // Notify the user

      // Re-fetch bookings after deletion
      const updatedBookings = await axios.get(
        "http://localhost:5000/api/bookings"
      );
      setBookings(updatedBookings.data);
    } catch (err) {
      console.error("Error deleting booking:", err);
      toast.error("An error occurred while deleting the booking.");
    }
  };

  //what to show when Form is being Submitted

  if (loadingData) return <p>Loading vehicles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={Styles.fleetsContainer}>
      <header className={Styles.header}>
        <h1>Our Fleets</h1>
        <p>Explore our luxurious fleet of vehicles</p>
      </header>

      <section className={Styles.fleetList}>
        {Array.isArray(vehicles) && vehicles.length > 0 ? (
          vehicles.map((vehicle) => (
            <div key={vehicle.id} className={Styles.fleetItem}>
              <img
                src={`http://localhost:5000/${vehicle.image}`}
                alt={vehicle.name}
                className={Styles.fleetImage}
              />
              <h2>{vehicle.name}</h2>
              <p>{vehicle.description}</p>
              <p>
                <strong>Price: {vehicle.price}</strong>
              </p>
              <button
                className={Styles.bookButton}
                onClick={() => handleBooking(vehicle)}
                disabled={loading}
              >
                {loading ? "Booking..." : "Book Now"}
              </button>
            </div>
          ))
        ) : (
          <p>No vehicles available at the moment.</p>
        )}
      </section>

      {/* Display the booking form */}

      {(isModifyMode || selectedVehicleForBooking) && (
        <div className={Styles.bookingFormModal}>
          <h2>
            {isModifyMode
              ? `Modify Booking for ${selectedBooking?.vehicleName}`
              : `Book ${selectedVehicleForBooking?.name}`}
          </h2>

          <form className={Styles.bookingForm} onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="date">Booking Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="time">Booking Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
            />

            <button type="submit" className={Styles.submitButton}>
              {loading
                ? "Submitting..."
                : isModifyMode
                ? "Modify Booking"
                : "Submit Booking"}
            </button>
          </form>

          <button className={Styles.closeModelButton} onClick={resetForm}>
            Close
          </button>
        </div>
      )}

      {/*Display Booked Vehicles*/}

      <section className={Styles.bookingList} id="bookingList">
        <h2>Submitted Bookings</h2>
        {bookings.map((booking) => (
          <div key={booking._id} className={Styles.bookingItem}>
            <h3>{booking.vehicleName}</h3>
            <p>{booking.name}</p>
            <p>{booking.email}</p>
            <p>{booking.date}</p>
            <p>{booking.time}</p>
            <button
              onClick={() => handleModify(booking)}
              className={Styles.modifyButton}
            >
              Modify
            </button>
            <button
              onClick={() => handleDelete(booking._id)}
              className={Styles.deleteButton}
            >
              Delete
            </button>
          </div>
        ))}
      </section>

      <ToastContainer />
    </div>
  );
};

//React Proptypes to handle exact Vehicle Name that is booked

Fleets.propTypes = {
  handleBookingSubmit: PropTypes.func.isRequired,
  selectedVehicle: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  loading: PropTypes.bool.isRequired,
};

export default Fleets;
