import React from "react";
import weddingImage from "../../Sections/Taqi/assets/bottom card 1.png";
import partyImage from "../../Sections/Taqi/assets/bottom card 2.png";
import corporateImage from "../../Sections/Taqi/assets/bottom card 3.png";
import Styles from "./Blogs.module.css";

const s = Styles;

export const Blogs = () => {
  return (
    <div className={s.blogPageContainer}>
      <header className={s.blogPageHeader}>
        <h1>Our Blogs</h1>
        <p>Stay updated with our latest insights, services, and offerings</p>
      </header>

      <section className={s.blogPostList}>
        <div className={s.blogPost} id="blog1">
          <div className={s.blogHeader}>
            <div className={s.blogImageContainer}>
              <img
                src={weddingImage}
                alt="Wedding Luxury Hire"
                className={s.blogImage}
              />
            </div>
            <div className={s.blogDetails}>
              <h2>Wedding Luxury Hire</h2>
              <div className={s.blogInfo}>
                <span>June 28, 2016</span> | <span>By admin</span>
              </div>
            </div>
          </div>
          <div className={s.blogText}>
            <p>
              Weddings are a once-in-a-lifetime event, and every detail matters.
              From the dress to the venue, the journey itself should be equally
              memorable. With our Wedding Luxury Hire services, we ensure that
              your special day begins and ends in style.
            </p>
            <p>
              Imagine arriving at your wedding venue in a luxurious limousine or
              an elegant executive sedan. The vehicle’s pristine condition,
              paired with a professional chauffeur, ensures a smooth,
              comfortable, and glamorous experience. Your arrival will leave a
              lasting impression on guests and create a magical moment for you
              to cherish forever.
            </p>
            <p>
              Our wedding luxury hire service offers a wide selection of
              vehicles that cater to all your needs. Whether you're looking for
              something classic, modern, or unique, we have the perfect vehicle
              for you. From the moment you step into our vehicle, you'll feel
              like royalty.
            </p>
            <p>
              We also provide a range of extras to ensure your day is even more
              special, including champagne service, red carpet arrivals, and
              custom decorations. Whatever you envision for your wedding day, we
              are here to make it a reality.
            </p>
            <p>
              Our professional chauffeurs are trained to provide an exceptional
              level of service, ensuring that every detail is taken care of. Let
              us make your wedding day unforgettable with our luxurious
              transportation services.
            </p>
          </div>
        </div>

        <div className={s.blogPost} id="blog2">
          <div className={s.blogHeader}>
            <div className={s.blogImageContainer}>
              <img
                src={partyImage}
                alt="Hire for Party"
                className={s.blogImage}
              />
            </div>
            <div className={s.blogDetails}>
              <h2>Hire for Party</h2>
              <div className={s.blogInfo}>
                <span>June 28, 2016</span> | <span>By admin</span>
              </div>
            </div>
          </div>
          <div className={s.blogText}>
            <p>
              Every party deserves a grand entrance, and our party hire services
              are here to make that happen. Whether it’s a birthday,
              bachelor/bachelorette, anniversary, or any special occasion, we
              offer luxury vehicles designed to make your event unforgettable.
            </p>
            <p>
              Our fleet includes stretch limousines, Hummer limos, and party
              buses equipped with state-of-the-art amenities. You can enjoy
              surround-sound music systems, LED lighting, and spacious interiors
              designed for socializing. It's not just about getting to the
              venue; the journey itself becomes a part of the party.
            </p>
            <p>
              We offer customizable packages to suit every type of event,
              whether you're planning an intimate gathering or a large-scale
              celebration. Our vehicles can be tailored to fit your party theme,
              ensuring the perfect atmosphere for your event.
            </p>
            <p>
              With our party hire services, you don't just hire a vehicle – you
              hire an experience. Let us take care of the transportation, so you
              can focus on enjoying the celebration.
            </p>
            <p>
              Our experienced chauffeurs ensure that you and your guests have a
              smooth and enjoyable ride, so your party begins the moment you
              step into one of our luxurious vehicles.
            </p>
          </div>
        </div>

        <div className={s.blogPost} id="blog3">
          <div className={s.blogHeader}>
            <div className={s.blogImageContainer}>
              <img
                src={corporateImage}
                alt="Corporate Executive Hire"
                className={s.blogImage}
              />
            </div>
            <div className={s.blogDetails}>
              <h2>Corporate Executive Hire</h2>
              <div className={s.blogInfo}>
                <span>June 28, 2016</span> | <span>By admin</span>
              </div>
            </div>
          </div>
          <div className={s.blogText}>
            <p>
              Business professionals understand the importance of making a
              strong impression. Our Corporate Executive Hire services are
              designed to meet the needs of busy executives and organizations
              looking for reliable, comfortable, and luxurious transportation.
            </p>
            <p>
              We provide a fleet of high-end vehicles equipped with modern
              amenities like Wi-Fi, charging ports, and plush interiors. Whether
              you need to prepare for a meeting during the journey or simply
              relax, our vehicles offer the perfect environment.
            </p>
            <p>
              With our corporate executive hire services, we aim to provide
              seamless travel for business professionals, ensuring you arrive at
              your destination on time and in comfort. Our fleet is designed for
              efficiency, with vehicles offering ample space to work or unwind
              during your journey.
            </p>
            <p>
              We also provide additional services such as airport transfers,
              conference transportation, and bespoke travel arrangements. Let us
              take care of your corporate travel needs while you focus on what
              matters most.
            </p>
            <p>
              Our professional drivers are discreet, punctual, and highly
              experienced, ensuring you receive the highest level of service
              throughout your journey. Trust us to be your partner in executive
              transportation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
