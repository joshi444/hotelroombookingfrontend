import React,{useState,useEffect} from "react";
import { json, useParams } from "react-router-dom";
import "./rooms.css";
import {NavLink} from "react-router-dom";
import { Link } from "react-router-dom";
export default function Room()
{
    const {hotelId} = useParams();
  
    const [data,setData] = useState([]);
    useEffect(() =>
    {
        fetch(`https://localhost:44397/api/Room/${hotelId}`)
        .then(response => {return response.json()})
        .then(data => setData(data))
    },[hotelId]);
localStorage.setItem("rooms",JSON.stringify(data));
console.log(localStorage.getItem('rooms'));
    
    return (
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
      <div className="">
          <h1>ROOMS</h1>
          <div className="Card-Container">
            {data.map((item) => (
              <div key={item.roomId} className="Card crd">
                <div >
                </div>
                <div className="Card-body">
                  <div className="cd">
                  <p>
                    <strong>Room Type: </strong> {item.roomType}
                  </p>
                  <p>
                 <strong> Room Price : </strong> {item.price}
                  </p>
                  <p>
                 <strong> Availabile rooms : </strong> {item.avalaibleRooms}
                  </p>
                  <p>
                  <NavLink className="bkrm" to={`/book/${hotelId}/${item.roomId}`}> Book Room </NavLink>
                  </p>
                 </div>
                </div>
                
              </div>
              
            ))}
          </div>
          </div>
        </div>
      );
}  