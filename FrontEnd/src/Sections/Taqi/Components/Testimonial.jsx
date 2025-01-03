import React from "react";
import Styles from "./Testimonial.module.css";
const s = Styles;
export const Testimonial = () => {
  return (
    <>
      <div className={s["testimonial-container"]}>
        <div className={s["testimonial"]}>
          <div className={s["image-container"]}>
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="John Anthony Gibson"
            />
          </div>
          <div className={s["text-container"]}>
            <p className={s["quote-start"]}>“</p>
            <p className={s["testimonial-text"]}>
              <br />
              We are all faced with a series of great opportunities brilliantly
              disguised as impossible situations.
            </p>
            <p className={s["quote-end"]}>”</p>
            <p className={s["author-name"]}>
              <br />
              <br />
              John Anthony Gibson
            </p>
          </div>
        </div>
        <div className={s["dots"]}>
          <span className={s["dot"]}></span>
          <span className={s["dot active"]}></span>
          <span className={s["dot"]}></span>
        </div>
      </div>
    </>
  );
};
