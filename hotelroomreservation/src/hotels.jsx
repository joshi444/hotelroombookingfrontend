import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./hotels.css"; // You can create a Hotels.css file for styling

export default function Hotels() {
  const [data, setData] = useState([]);
  const localHotelData = [
    {
      RoomId: 1,
      imageUrl: "h1.jpg", // Add the image URL for Hotel A (assuming it's in the public/images directory)
    },
    {
      RoomId: 2,
      imageUrl: "h2.jpg", // Add the image URL for Hotel B (assuming it's in the public/images directory)
    },
    {
      hotelId: 3,
      imageUrl: "h3.jpg", // Add the image URL for Hotel A (assuming it's in the public/images directory)
    },
    {
      hotelId: 6,
      imageUrl: "h4.jpg", // Add the image URL for Hotel B (assuming it's in the public/images directory)
    },
    // Add more hotels with image URLs as needed
    {
      hotelId:7,
      imageUrl:"h9.jpg",
    },
  ];

  useEffect(() => {
    fetch("https://localhost:44397/api/Hotel")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const mergedHotelData = data.map((item, index) => ({
    ...item,
    ...localHotelData[index],
  }));

  return (
    <div className="myhotels"> 
    <div className="hotels-container">
      <h1 className="hotels-heading">HOTELS</h1>

      <div className="card-container">
        {mergedHotelData.map((item) => (
          <div key={item.hotelId} className="Card">
          <div className="card-header"> <h2 className="hotel-name">{item.hotelName}</h2></div>
            <div className="card-body">
              <img
                src={item.imageUrl} // Display the hotel image
                alt={`Hotel ${item.hotelId}`} // Set alt text for accessibility
                className="hotel-image"
              />
              <p className="hotel-info">
                <strong>Location:</strong> {item.location}
              </p>
              <p className="hotel-info">
                <strong>Total Rooms:</strong> {item.availableRooms}
              </p>
              <NavLink to={`/rooms/${item.hotelId}`} className="rooms-link">
                Go to Rooms
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
