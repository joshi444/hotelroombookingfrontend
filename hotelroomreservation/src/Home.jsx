import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic and set isLoggedIn to true on success
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic and set isLoggedIn to false
    setIsLoggedIn(false);
  };
   const hotelImages = [
    "h1.jpg",
    "h2.jpg",
    "h3.jpg",
    "h4.jpg",
    "h5.jpg",
    "h6.jpg",
    "h7.jpg",
    "h8.jpg",
    // Add more image URLs as needed
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 1500); // Change image every 5 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, []);
  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? hotelImages.length - 1 : prevIndex - 1
    );
  };
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === hotelImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  const auth = localStorage.getItem("user");

  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark align-center">
        <ul className="navbar-nav mr-auto">
          {isLoggedIn ? (
            <>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profile">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item align text-light">
                <a className="nav-link flt" href="/login">
                  Sign In
                </a>
              </li>
              <li className="nav-item align">
                <span>
                  <a className="nav-link floating" href="/register">
                    Register
                  </a>
                </span>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div>
        <section className="hero-section">
          <h2 className="h2-gradient">Book your hotel stay today!</h2>
          
          <a href="/register" className="book-now-button">
            Book Now
          </a>
          <section className="hotel-images-section">
  {/* <h4 className="text-dark bg-info">Hotel Images</h4> */}
  <div className="hotel-image-container">
    <button onClick={previousImage} className="arrow-button left">
      &lt;  {/* Left Arrow */}
    </button>
    <img
      src={hotelImages[currentImageIndex]}  // Use the current image URL
      alt={`Hotel ${currentImageIndex + 1}`}
      className="hotel-imagee"
    />
    <button onClick={nextImage} className="arrow-button right">
      &gt;  {/* Right Arrow */}
    </button>
  </div>
</section>
          </section>
          <div className="content-container">
            <div className="text-container">
              <strong>
                <p className="text font">
                  We offer a variety of rooms and amenities to meet your needs,
                  and our staff is always happy to help you make your stay as
                  enjoyable as possible.
                </p>
              </strong>
            </div>
          </div>
        <section>
          <b>
            <h4 className="text-dark bg-info">Features</h4>
          </b>
          <ul className="features-section">
            <li>
              <h5 id="pad">Free Wi-Fi</h5>
              <img src="wf copy.png" alt="Free Wi-Fi" className="feature-image"/>
            </li>
            <li>
              <h5 id="pad">On-site restaurant and bar</h5>
              <img src="wt1.png" alt="Free Wi-Fi" className="feature-image" />
            </li> 
            <li>
              <h5>Fitness center</h5>
              <img src="fitness1.png" alt="Free Wi-Fi" className="feature-image" />
            </li>
            <li>
              <h5>Swimming pool</h5>
              <img src="swim1.png" alt="Free Wi-Fi" className="feature-image" />
            </li>
            <li>
              <h5>Laundry service</h5>
              <img src="laundry1.png" alt="Free Wi-Fi" className="feature-image" />
            </li>
          </ul>
        </section>
        {/* <section className="testimonials-section">
          <h3>Testimonials</h3>
          <blockquote>
            "We had a wonderful stay at this hotel. The staff was friendly and
            helpful, the room was clean and comfortable, and the food was
            delicious. We would definitely recommend this hotel to others." -
            John Smith
          </blockquote>
        </section> */}
        <footer className="foot">
          <p>&copy; 2023 Hotel Reservation System</p>
          <a href="#" bg-dark>Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </footer>
      </div>
    </div>

  );
}
