import React from "react";
import CarBanner from "../assets/car-banner.png";
import Styles from "./Image.module.css";
const s = Styles;
export const Image = () => {
  return (
    <>
      <div className={s["banner-div"]}>
        <img src={CarBanner} alt="banner" className={s["banner"]} />
      </div>
    </>
  );
};
