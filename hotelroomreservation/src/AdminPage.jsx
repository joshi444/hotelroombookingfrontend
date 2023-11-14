import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import {NavLink} from "react-router-dom";
import "./hotels.css"
export default function Admin(){
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
          hotelId: 6,
          imageUrl: "h4.jpg", // Add the image URL for Hotel B (assuming it's in the public/images directory)
        },
        // Add more hotels with image URLs as needed
      ];
    
      useEffect(() => {
        fetch("https://localhost:44397/api/Hotel")
          .then((response) => response.json())
          .then((data) => setData(data));
      }, []);
      const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this hotel?")) {
            axios.delete(`https://localhost:44397/api/Hotel/${id}`)
                .then((result) => {
                    if (result.status === 200) {
                        alert(`Hotel ${id} is deleted successfully`);
                        // Optionally, you can remove the deleted item from the state.
                        // This will re-render the component without the deleted item.
                        setData((prevData) => prevData.filter((item) => item.hotelId !== id));
                    }
                })
                .catch((error) => {
                    alert(`Error deleting hotel ${id}: ${error.message}`);
                });
        }
    };
    const handleUpdate =(id) =>{
        navigate(`/aupdatehotel/${id}`,{ replace: false });
    }
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
                <NavLink to="/adminhotels">  Hotels  </NavLink>
                  </td> 
                  <td>
                  <NavLink to="/bookings" > Bookings </NavLink>
                  </td>
                  <td>
                  <NavLink to="/users"> All Users</NavLink>
                  </td>
                  <td>
                  <NavLink to="/home">logout</NavLink>
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
              <NavLink to={`/adminrooms/${item.hotelId}`} className="rooms-link">
                Go to Rooms
              </NavLink>
              <div>
                            <button className="btn btn-danger" onClick={() => handleDelete(item.hotelId)}>
                                Delete
                            </button>
                            </div>
                            <button
                    className="btn btn-primary"
                    onClick={() =>
                      handleUpdate(
                        item.hotelId
                      )
                    }
                  >
                    Update
                  </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
    )
}