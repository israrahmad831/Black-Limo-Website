import React from "react";
import styles from "./AboutUS.module.css";
import { NavLink } from "react-router-dom";
export const AboutUS = () => {
  return (
    <div className={styles.aboutContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>About Black Limo</h1>
        <p className={styles.subtitle}>Luxury Transportation, Redefined.</p>
      </header>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Mission</h2>
        <p className={styles.text}>
          At Black Limo, we aim to provide unparalleled luxury transportation
          services tailored to your needs. With professionalism and style, we
          ensure every journey becomes a memorable experience.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What We Offer</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Corporate transportation for business professionals
          </li>
          <li className={styles.listItem}>
            Wedding and special event limo services
          </li>
          <li className={styles.listItem}>Airport pickups and drop-offs</li>
          <li className={styles.listItem}>City tours in ultimate comfort</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
        <p className={styles.text}>
          Our fleet of luxurious vehicles, combined with our experienced and
          courteous chauffeurs, ensures a seamless and sophisticated travel
          experience. Whether it's a business meeting or a special event, trust
          Black Limo to get you there in style.
        </p>
      </section>
      <NavLink to={"/contact"} style={{ textDecoration: "none" }}>
        <footer className={styles.footer}>
          <h2 className={styles.footerTitle}>Contact Us</h2>
          <p className={styles.footerText}>Email: support@blacklimo.com</p>
          <p className={styles.footerText}>Phone: (123) 456-7890</p>
        </footer>
      </NavLink>
    </div>
  );
};
