import React from "react";
import styles from "./ContactUs.module.css";
import { toast, ToastContainer } from "react-toastify";

const ContactUs = () => {
  //Sending Form Data To Backend Code

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Form submitted successfully!");
        e.target.reset();
      } else {
        toast.error("Error: " + result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          We're here to assist you. Feel free to get in touch!
        </p>
      </header>

      <section className={styles.infoSection}>
        <h2 className={styles.infoTitle}>Our Contact Information</h2>
        <ul className={styles.contactDetails}>
          <li>Email: contact@blacklimo.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>Address: Black Limo Services Dubai</li>
        </ul>
      </section>

      <section className={styles.formSection} id="contactForm">
        <h2 className={styles.formTitle}>Get in Touch</h2>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              placeholder="Write your message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </section>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
