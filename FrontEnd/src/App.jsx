import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./Sections/NavBar/NavBar";
import { Footer } from "./Sections/Footer/Footer";
import { AboutUS } from "./Pages/AboutPage/AboutUS";
import { Blogs } from "./Pages/Blogs/Blogs";
import Home from "./Home";
import ContactUs from "./Pages/ContactPage/ContactUs";
import Fleets from "./Pages/Fleets/Fleets";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Weather from "./Pages/Weather/Weather";
import ScrollToSection from "./Components/ScrollToSection/ScrollToSection";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
        <Route
          path="/contact"
          element={
            <>
              <ContactUs />
              <ScrollToSection targetId="contactForm" />
            </>
          }
        />
        <Route
          path="/fleets"
          element={
            <>
              <Fleets />
            </>
          }
        />
        <Route
          path="/blogs"
          element={
            <>
              <ScrollToSection targetId="blog1" />
              <ScrollToSection targetId="blog2" />
              <ScrollToSection targetId="blog3" />
              <Blogs />
            </>
          }
        />
        <Route path="/weather" element={<Weather />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
