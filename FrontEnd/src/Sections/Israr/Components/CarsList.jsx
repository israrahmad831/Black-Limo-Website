import React from "react";
import Styles from "./CarList.module.css";
import { NavLink } from "react-router-dom";
import Ellipse from "../assets/ellipse.png";
import Car from "../assets/limo-car.png";
const s = Styles;
export const CarsList = () => {
  return (
    <>
      <div className={s["Carlists"]}>
        <h2>Our Awesome Fleet Cars</h2>
      </div>

      <div className={s["container"]}>
        <div className={s["menu"]}>
          <NavLink to={"/fleets"} style={{ textDecoration: "none" }}>
            <div
              className={s["menu-item"]}
              style={{ textDecoration: "none", color: "white" }}
            >
              Vauxhall Insignia
            </div>
            <div
              className={s["menu-item"]}
              style={{ textDecoration: "none", color: "white" }}
            >
              Executive Sedan
            </div>
            <div
              className={s["menu-item"]}
              style={{ textDecoration: "none", color: "white" }}
            >
              Class Mercedes
            </div>
            <div
              className={s["menu-item"]}
              style={{ textDecoration: "none", color: "white" }}
            >
              Executive SUV
            </div>
            <div
              className={s["menu-item"]}
              style={{ textDecoration: "none", color: "white" }}
            >
              Stretch Limousine
            </div>
          </NavLink>
        </div>

        <div className={s["car-selection"]}>
          <img
            src={Ellipse}
            alt="Ellipse Background"
            className={s["ellipse"]}
            width="600"
          />
          <img src={Car} alt="Car Image" className={s["car"]} width="800" />
          <div className={s["car-info"]}>
            <h2>E Class Mercedes</h2>
            <p>Choose Your Car</p>
          </div>
        </div>
      </div>
    </>
  );
};
