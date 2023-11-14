import React, { Fragment, useState } from "react";
import DatePicker from 'react-datepicker';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {NavLink} from "react-router-dom";
import "./BookRoom.css";
import { message } from "antd";
function Book() {
    const {hotelid,roomid} = useParams();
    const user=localStorage.getItem('user');
    const [userId, setUserId] = useState('');
    const [roomId, setRoomId] = useState('');
    const [hotelId, setHotelId] = useState('');
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [pass, setPass] = useState('');
    const id = JSON.parse(user).userId;

    const handleUserIdChange = (value => {
        setUserId(parseInt(value));
    })
    
    const handleRoomIdChange = (value => {
        setRoomId(parseInt(value));
    })
    
    const handleHotelIdChange = (value => {
        setHotelId(parseInt(value));
    })
    
    const handleCheckInDateChange = (value => {
        setCheckInDate(value);
    })
    const handleCheckOutDateChange = (value => {
        setCheckOutDate(value);
    })
    const handlepassChange = (value => {
        setPass(parseInt(value));
    })
    const Navigate = useNavigate();
    const handleBack=()=>{
        Navigate('/mainpage', { replace: false });
    }
    const handleAdd = async () => {
        const data = {
            UserId: id,
            RoomId:parseInt(roomid),
            HotelId:parseInt(hotelid),
            
            CheckInDate:checkInDate,
            CheckOutDate:checkOutDate,
            NoOfPeople: pass,
          
        }
        console.log(data);


        axios.post('https://localhost:44397/api/Booking', data)
        .then(() => {
            message.success("Room Booked");
        }).catch((error) => {
            message.error(error)
        })
    }
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
        <section className="form_room ">
            <div className="bgimg">
            <div className="brdr" >
            <div><h1 className="hd">Book your stay</h1></div>
           

            <div className="form-group">
                <label ><h6 className="checkin">CheckInDate</h6></label>
                <input type="date" className="form-control" onChange={(e) => handleCheckInDateChange(e.target.value)} /> <br></br>
            </div>
            <div className="form-group">
                <label ><h6 className="checkin">CheckOutDate</h6></label>
                <input type="date" className="form-control" onChange={(e) => handleCheckOutDateChange(e.target.value)} /> <br></br>
            </div>

            <div className="form-group">
                <label ><h6 className="checkin">Number of People</h6></label>
                <input type="text"name="pass" className="form-control" onChange={(e) => handlepassChange(e.target.value)} /> <br></br>
            </div>

    

            <button className='btn btn-primary' onClick={() => handleAdd()}>Book</button>
            <br/>
            <button className="btn btn-primary" onClick={handleBack}> Back</button>
            </div>
           
            </div>
        </section>
        </div>
    )
}

export default Book;