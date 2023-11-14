import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import {NavLink} from "react-router-dom";
import "./hotels.css"
export default function Main(){
    const auth=localStorage.getItem('user');
      const [data, setData] = useState([]);
      const localHotelData = [
        {
          hotelId: 1,
          imageUrl: "h1.jpg", // Add the image URL for Hotel A (assuming it's in the public/images directory)
        },
        {
          hotelId: 2,
          imageUrl: "h2.jpg", // Add the image URL for Hotel B (assuming it's in the public/images directory)
        },
        {
          hotelId: 3,
          imageUrl: "h3.jpg", // Add the image URL for Hotel A (assuming it's in the public/images directory)
        },
        {
          hotelId: 4,
          imageUrl: "h4.jpg", // Add the image URL for Hotel B (assuming it's in the public/images directory)
        },
        // Add more hotels with image URLs as needed
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
    
    return(
        <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="Container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
            </Link>
          </div>
          <div>
            <table>
              <tbody>
                <tr>
                <td>
                    <Link to="/mainpage">Hotels</Link>
                  </td> 
                  <td>
                    <Link to="/profile">My Profile</Link>
                  </td>
                  <td>
                    <Link to="/myticket">My Booking</Link>
                  </td>
                  <td>
                    <Link to="/home">Logout</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </nav>
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
                <strong>Available Rooms:</strong> {item.availableRooms}
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
    </div>
    )
}