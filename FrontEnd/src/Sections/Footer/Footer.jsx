import React from "react";
import Styles from "./Footer.module.css";
const s = Styles;
export const Footer = () => {
  return (
    <>
      <footer>
        <div className={s["social-buttons"]}>
          <a
            href="https://www.facebook.com/profile.php?id=100093698173635"
            className={s["facebook"]}
          >
            <i className={s["fab fa-facebook-f"]}></i>FACEBOOK
          </a>
          <a href="https://twitter.com/limoblack" className={s["twitter"]}>
            <i className={s["fab fa-twitter"]}></i>TWITTER
          </a>
          <a
            href="https://www.linkedin.com/company/limos-com/"
            className={s["pinterest"]}
          >
            <i className={s["fab fa-pinterest"]}></i>LINKEDIN
          </a>
        </div>
        <p className={s["copyright"]}>
          © 2016. Blacklimo.ca. All rights reserved.
        </p>
      </footer>
    </>
  );
};
