import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Styles from "./ListContainer.module.css";

const s = Styles;

export const LastContainer = () => {
  const [email, setEmail] = useState("");

  //Handle Submission of Email to Subscribe

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/subscribe", {
        email,
      });
      toast.success(response.data.message);
      setEmail("");
    } catch (err) {
      toast.error(
        err.response?.data?.error || "An error occurred. Please try again."
      );
    }
  };

  return (
    <>
      <h2 className={s["lastheader"]}>You can follow us by email</h2>
      <p className={s["para"]}>
        Stay connected with us by subscribing to our email updates. We will keep
        you informed with the latest news, exclusive offers, and more. Don't
        miss out on any of the exciting updates we have to offer!
      </p>

      <form className={s["subscribe-box"]} onSubmit={handleSubmit}>
        <div className={s["subscribe-inner"]}>
          <input
            type="email"
            placeholder="Enter your email"
            className={s["email-input"]}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className={s["subscribe-button"]}>
            Subscribe
          </button>
        </div>
      </form>

      <ToastContainer />
    </>
  );
};
