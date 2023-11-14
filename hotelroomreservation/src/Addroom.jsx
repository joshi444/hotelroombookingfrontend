import React, { Fragment, useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
//import { toast, ToastContainer } from "react-toast";
//import 'react-toastify/dist/ReactToastify.css';
import { json, useParams } from "react-router-dom";
import { message } from "antd";
function AddRoom() {
    //const [hotelId, setHotelId] = useState('');
    const[roomType,setRoomType] = useState('');
    const[price,setPrice]=useState('');
   const[avalaibleRooms,setAvalaibleRooms]=useState('');

    const Navigate = useNavigate();
    const {hotelId} = useParams();
   
    const handleTypeChange = (value => {
        setRoomType(value);
    })
    const handlePriceChange = (value => {
        setPrice(parseFloat(value));
    })

    const handleAvilChange = (value =>{
        setAvalaibleRooms(parseInt(value));

    })
   
    const handleSave = () => {
        const data = {
            HotelId:hotelId,
            RoomType:roomType,
            Price:price,
            AvalaibleRooms:avalaibleRooms


        }
        console.log(data)
        axios.post('https://localhost:44397/api/Room', data)
            .then((result) => {
                message.success("room  added");
            

            }).catch((error) => {
                message.error(error)
            })

    }


    return (
        <>
            <div>Add Room</div>
           
           
            <div className="form-group">
            <label>RoomType</label>
            <input type="text" name="RoomType" className="form-control" id="RoomType" placeholder="Enter the room type" onChange={(e) => handleTypeChange(e.target.value)} /> <br></br>
            </div>
            <div className="form-group">
            <label>Price</label>
            <input type="text" name="Price" className="form-control" id="Price" placeholder="Enter the price" onChange={(e) => handlePriceChange(e.target.value)} /> <br></br>
            </div>
            <div className="form-group">
            <label>Available Rooms</label>
            <input type="text" name="AvalaibleRooms" className="form-control" id="AvalaibleRooms" placeholder="Enter the avilabile rooms" onChange={(e) => handleAvilChange(e.target.value)} /> <br></br>
            </div>
    
            <button class="btn btn-primary" onClick={() => handleSave()}>Save</button>
        </>
        

    )
}

export default AddRoom;
