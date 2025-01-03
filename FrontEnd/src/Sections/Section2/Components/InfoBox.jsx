import React from "react";
import Styles from "./InfoBox.module.css";
import { NavLink } from "react-router-dom";
const s = Styles;
export const InfoBox = () => {
  return (
    <>
      <div className={s["Info-Box"]}>
        <div className={s["content"]}>
          <h1>Who We Are?</h1>
          <p>
            At Black Limo, we offer luxurious transportation solutions tailored
            to meet your needs. Whether you're looking for a stylish ride for
            your wedding, a sophisticated vehicle for a corporate event, or a
            fun and extravagant party limousine, we have a fleet that fits every
            occasion. Our vehicles are carefully selected to provide you with
            comfort, elegance, and reliability. Our team of professional
            chauffeurs is dedicated to ensuring that you have a seamless and
            enjoyable experience. From the moment you step into one of our
            high-end vehicles, you'll feel like royalty. With a commitment to
            punctuality and customer satisfaction, we aim to exceed your
            expectations every time. With years of experience in the luxury
            transportation industry, we understand what it takes to make your
            event unforgettable. Trust Black Limo to provide you with an
            exceptional travel experience that blends style, comfort, and
            luxury.
          </p>
          <div className={s["buttons"]}>
            <NavLink to={"/fleets"} style={{ textDecoration: "none" }}>
              <a className={s["btn1"]}>See Vehicles</a>
            </NavLink>
            <NavLink
              to={"/contact#contactForm"}
              style={{ textDecoration: "none" }}
            >
              <a className={s["btn2"]}>Reservation Now</a>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
