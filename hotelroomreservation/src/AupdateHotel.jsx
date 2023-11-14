import React, { Fragment, useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
//import { toast, ToastContainer } from "react-toast";
//import 'react-toastify/dist/ReactToastify.css';
import { json, useParams } from "react-router-dom";

function AUpdateHotel() {
    const {hotelId} = useParams();

    const [hotelName, setHotelName] = useState('');
    const[location,setLocation] = useState('');
    const[availableRooms,SetAvailableRooms]=useState('');

    const Navigate = useNavigate();

    const handleNameChange = (value => {
        setHotelName(value);
    })
    const handleLocationChange = (value => {
        setLocation(value);
    })
    const handleRoomChange = (value => {
        SetAvailableRooms(parseInt(value));
    })
   
    const handleSave = () => {
        const data = {
            HotelId:hotelId,
            HotelName: hotelName,
            Location:location,
            AvailableRooms:availableRooms
        }
        console.log(data)
        axios.put('https://localhost:44397/api/Hotel', data)
            .then((result) => {
                alert("hotel updated");
            

            }).catch((error) => {
                alert(error)
            })

    }


    return (
        <>
            <div>Registration</div>
            <div className="form-group">
            <label>HotelName</label>
            <input type="text" name="HotelName"  className="form-control" id="HotelName" placeholder="Enter the hotel Name" onChange={(e) => handleNameChange(e.target.value)} /> <br></br>
            </div>
            <div className="form-group">
            <label>location</label>
            <input type="text" name="Location" className="form-control" id="Location" placeholder="Enter the location" onChange={(e) => handleLocationChange(e.target.value)} /> <br></br>
            </div>
            <div className="form-group">
            <label>Avaliable rooms</label>
            <input type="text" name="AvailableRooms" className="form-control" id="AvailableRooms" placeholder="Enter the avilable rooms" onChange={(e) => handleRoomChange(e.target.value)} /> <br></br>
            </div>
    
            <button class="btn btn-primary" onClick={() => handleSave()}>Save</button>
        </>
        

    )
}

export default AUpdateHotel;
