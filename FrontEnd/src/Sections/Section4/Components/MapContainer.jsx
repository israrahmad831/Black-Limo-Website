import React from "react";
import Styles from "./MapContainer.module.css";
import { NavLink } from "react-router-dom";
import CarImage from "../assets/Blacklimo.jpg";
const s = Styles;
export const MapContainer = () => {
  return (
    <>
      <div className={s["map-container"]}>
        <iframe
          className={s.Map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.6436339438574!2d55.30348017408285!3d25.24892522960605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4394dc0cf175%3A0xd5c601b7f33c44a7!2sBlack%20Limo%20Service%20Dubai!5e0!3m2!1sen!2s!4v1735501599784!5m2!1sen!2s"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <div className={s["car-booking-card"]}>
          <img
            src={CarImage}
            alt="Mercedes E Class"
            className={s["car-image"]}
          />
          <h3>Hire Mercedes E Class</h3>
          <NavLink to={"/fleets"}>
            <button className={s["book-now-btn"]}>Book Now</button>
          </NavLink>
          <div className={s["car-details"]}>
            <span>
              <i className={s["fas fa-gas-pump"]}></i>Diesel
            </span>
            <span>
              <i className={s["fas fa-cogs"]}></i>Auto
            </span>
            <span>
              <i className={s["fas fa-road"]}></i>25000
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
