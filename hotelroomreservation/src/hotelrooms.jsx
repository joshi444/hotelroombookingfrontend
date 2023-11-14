
import React, { useState, useEffect } from "react";
import "./hotels.css";

export default function Hotels() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://localhost:44397/api/Hotel")
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>HOTELS</h1>

      <div className="card-container">
        {data.map((item) => (
          <div key={item.hotelId} className="card">
            <div className="card-header">
              <h2>{item.hotelName}</h2>
            </div>
            <div className="card-body">
              <p>
                <strong>Location: </strong> {item.location}
              </p>
              <p>
                <strong> Rooms: </strong> {item.availableRooms}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
