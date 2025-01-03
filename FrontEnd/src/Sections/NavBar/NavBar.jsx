import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";
import { useState } from "react";
import phoneicon from "../../assets/phone-icon.png";
import mailicon from "../../assets/mail-icon.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import g from "../../assets/g.png";
import limo from "../../assets/limo.png";
import Styles from "./NavBar.module.css";
import Sidebar from "../../Components/SideBar/Sidebar";
import { NavLink } from "react-router-dom";

const s = Styles;

export const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    if (window.innerWidth > 768) setIsSidebarOpen(false);
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <>
      <header className={s["navBar"]}>
        <div className={s["upper-contact-div"]}>
          <div className={s["upper-contact-inner-container"]}>
            <div className={s["upper-contact-left-div"]}>
              <div className={s["upper-phone"]}>
                <div className={s["flex-vertically-center"]}>
                  <img src={phoneicon} alt="contact" />
                  <span className={s["upper-contact-no"]}>416-260-0050</span>
                </div>
              </div>
              <div className={s["upper-email"]}>
                <div className={s["flex-vertically-center"]}>
                  <img src={mailicon} alt="contact" />
                  <span className={s["upper-contact-email"]}>
                    info@blacklimo.ca
                  </span>
                </div>
              </div>
            </div>
            <div className={s["upper-contact-button-div"]}>
              <div className={s["upper-contact-button-rectangle"]}>
                <a href="https://www.facebook.com/profile.php?id=100093698173635">
                  <img src={facebook} alt="facebook" />
                </a>
              </div>
              <div className={s["upper-contact-button-rectangle"]}>
                <a href="https://twitter.com/limoblack">
                  <img src={twitter} alt="twitter" />
                </a>
              </div>
              <div className={s["upper-contact-button-rectangle"]}>
                <a href="https://www.linkedin.com/company/limos-com/">
                  <img src={linkedin} alt="linkedin" />
                </a>
              </div>
            </div>
            <span className={s["header-button-menu"]} onClick={toggleSidebar}>
              <RxHamburgerMenu />
            </span>
          </div>
        </div>
        <header className={s["header"]}>
          <div className={s["header-inner-container"]}>
            <img src={limo} alt="Black Limo" />
            <div className={s["header-button-div"]}>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? `${s["nav-link"]} ${s["active-link"]}`
                    : s["nav-link"]
                }
                style={{ textDecoration: "none" }}
              >
                <span>Home</span>
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? `${s["nav-link"]} ${s["active-link"]}`
                    : s["nav-link"]
                }
                style={{ textDecoration: "none" }}
              >
                <span>About</span>
              </NavLink>
              <NavLink
                to={"/fleets"}
                className={({ isActive }) =>
                  isActive
                    ? `${s["nav-link"]} ${s["active-link"]}`
                    : s["nav-link"]
                }
                style={{ textDecoration: "none" }}
              >
                <span>Fleets</span>
              </NavLink>
              <NavLink
                to={"/blogs"}
                className={({ isActive }) =>
                  isActive
                    ? `${s["nav-link"]} ${s["active-link"]}`
                    : s["nav-link"]
                }
                style={{ textDecoration: "none" }}
              >
                <span>Blogs</span>
              </NavLink>
              <NavLink
                to={"/weather"}
                className={({ isActive }) =>
                  isActive
                    ? `${s["nav-link"]} ${s["active-link"]}`
                    : s["nav-link"]
                }
                style={{ textDecoration: "none" }}
              >
                <span>Weather</span>
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? `${s["nav-link"]} ${s["active-link"]}`
                    : s["nav-link"]
                }
                style={{ textDecoration: "none" }}
              >
                <span className={s["header-button-last"]}>Contact</span>
              </NavLink>
            </div>
          </div>
        </header>
        <Sidebar open={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </header>
    </>
  );
};
