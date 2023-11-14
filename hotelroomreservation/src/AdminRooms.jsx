import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function AdminRoom() {
  const [data, setData] = useState([]);
  const Navigate = useNavigate();
  const { hotelId } = useParams();

  useEffect(() => {
    fetch(`https://localhost:44397/api/Room/${hotelId}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleBack = () => {
    Navigate('/admin', { replace: false });
  }

  const handleAdd = (hotelId) => {
    Navigate(`/addrooms/${hotelId}`, { replace: false });
  }
  const handleUpdate = (hotelId,roomId) => {
    Navigate(`/auroom/${hotelId}/${roomId}`, { replace: false });
  }



  const handleDelete = (id) => {
    if (window.confirm("Are you sure")) {
      axios.delete(`https://localhost:44397/api/Room/${id}`)
        .then((result) => {
          if (result.status === 200) {
            alert(`Room ${id} is deleted`);
            // After successful deletion, you might want to refresh the room list.
            // You can do this by fetching the data again or using a state management library.
          }
        })
        .catch((error) => {
          alert(error);
        });
    }
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h1>Rooms</h1><br/>
        <div>
          <table>
          <tr>
            <td><br/><br/>
          <button className="btn btn-primary mr-2" onClick={() => handleAdd(hotelId)}>Add Room</button>
          </td>
          <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
          <td></td><td></td><td></td><td></td><td></td><td></td>
           <td><br/>
           <br/>
          <button className="btn btn-primary" onClick={handleBack}>BACK</button>
          </td>
          </tr>
          </table>
        </div>
        
      </div>
     

      <div className="row">
        {data.map((item) => (
          <div className="col-md-4 mb-3" key={item.roomId}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.roomType}</h5>
                <p className="card-text">Price: {item.price}</p>
                <p className="card-text">Available rooms: {item.avalaibleRooms}</p>
                <button className="btn btn-danger" onClick={() => handleDelete(item.roomId)}>Delete</button>
                <div>
                <button
                    className="btn btn-primary"
                    onClick={() =>
                      handleUpdate(
                        hotelId,
                        item.roomId
                      )
                    }
                  >
                    Update
                  </button>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
