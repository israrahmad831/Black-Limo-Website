import React from "react";
import Styles from "./Cards.module.css";
import CustomerSupport from "../assets/customer-support.png";
import Calender from "../assets/calendar.png";
import { NavLink } from "react-router-dom";
import LocationImg from "../assets/location.png";
const s = Styles;
export const Cards = () => {
  return (
    <>
      <div className={s["top-card-div"]}>
        <div className={s["top-card-inner-div"]}>
          <div className={s["top-card-1"]}>
            <img src={CustomerSupport} alt="customer-support" />
            <span>7/24 Car Support</span>
          </div>
          <div className={s["top-card-2"]}>
            <img src={Calender} alt="calendar" />
            <div className={s["card-2-text-div"]}>
              <p className={s["card-2-heading"]}>Reservation Anytime</p>
              <p className={s["card-2-para"]}>
                We offer flexible reservation options, ensuring you can book
                your luxury transportation at any time. Whether it's a
                last-minute need or a well-planned event, we’re here to cater to
                all your transportation requirements. Enjoy a seamless booking
                experience with us!
              </p>
            </div>
            {/* <NavLink to={"/fleets"} style={{ textDecoration: "none" }}>
              <span className={s["card-2-button"]}>Read More</span>
            </NavLink> */}
          </div>
          <div className={s["top-card-3"]}>
            <img src={LocationImg} alt="location" />
            <span>Lot of Locations</span>
          </div>
        </div>
      </div>
    </>
  );
};
