import React from "react";
import Styles from "./Blogs.module.css";
import BottomCard1 from "../assets/bottom card 1.png";
import BottomCard2 from "../assets/bottom card 2.png";
import BottomCard3 from "../assets/bottom card 3.png";
import { NavLink } from "react-router-dom";
const s = Styles;
export const Blogs = () => {
  return (
    <>
      <div className={s["bottom-card-container"]}>
        <h2 className={s.heading}>Recent Blog Posts</h2>
        <div className={s["posts"]}>
          <div className={s["post"]}>
            <img src={BottomCard1} alt="Wedding Luxury Hire" />
            <div className={s["post-info"]}>
              <div className={s["meta"]}>
                <span className={s["date"]}>
                  <i className={s["fas fa-calendar-alt"]}></i> June 28, 2016
                </span>
                <div className={s["author"]}>
                  <span className={s["author"]}>
                    <i className={s["fas fa-pen"]}></i> admin
                  </span>
                  <span className={s["comments"]}>
                    <i className={s["fas fa-comments"]}></i> 4
                  </span>
                </div>
              </div>
              <h3>Wedding Luxury Hire</h3>
              <p>
                Weddings are a once-in-a-lifetime event, and every detail
                matters.
              </p>
              <NavLink to={"/blogs#blog1"} className={s["read-more"]}>
                Read More
              </NavLink>
            </div>
          </div>
          <div className={s["post"]}>
            <img src={BottomCard2} alt="Hire for Party" />
            <div className={s["post-info"]}>
              <div className={s["meta"]}>
                <span className={s["date"]}>
                  <i className={s["fas fa-calendar-alt"]}></i> June 28, 2016
                </span>
                <span className={s["author"]}>
                  <i className={s["fas fa-pen"]}></i> admin
                </span>
                <span className={s["comments"]}>
                  <i className={s["fas fa-comments"]}></i> 4
                </span>
              </div>
              <h3>Hire for Party</h3>
              <p>
                Every party deserves a grand entrance, and our party hire
                services are here to make that happen.
              </p>
              <NavLink to={"/blogs#blog2"} className={s["read-more"]}>
                Read More
              </NavLink>
            </div>
          </div>
          <div className={s["post"]}>
            <img src={BottomCard3} alt="Corporate Executive Hire" />
            <div className={s["post-info"]}>
              <div className={s["meta"]}>
                <span className={s["date"]}>
                  <i className={s["fas fa-calendar-alt"]}></i> June 28, 2016
                </span>
                <span className={s["author"]}>
                  <i className={s["fas fa-pen"]}></i> admin
                </span>
                <span className={s["comments"]}>
                  <i className={s["fas fa-comments"]}></i> 4
                </span>
              </div>
              <h3>Corporate Executive Hire</h3>
              <p>
                Business professionals understand the importance of making a
                strong impression.
              </p>
              <NavLink to={"/blogs#blog3"} className={s["read-more"]}>
                Read More
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
