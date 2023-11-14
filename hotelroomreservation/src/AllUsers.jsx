import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Alluser.css"
export default function AUsers()
{
    const [data,setData] = useState([]);
    const Navigate = useNavigate();
    useEffect(() =>
    {
        fetch("https://localhost:44397/api/User")
        .then(response => {return response.json()})
        .then(data => setData(data))
    },[]);

    const handleBack = () => {
        Navigate('/admin', { replace: false });
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure") == true) {
            axios.delete(`https://localhost:44397/api/User/${id}`)
                .then((result) => {
                    if (result.status == 200) {
                        alert(`user with ${id} is deleted`);
                    }
                }).catch((error) => {
                    alert(error)
                })
        }
    }
    return(
        <div>
            <h1>USERS</h1>

            <table border={1} >
                  <tr className="textc">
                    
                    <th >UserName</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>ContactNo</th>
                    
                    
                    
                </tr>
                
                {data.map(item =>
                    (
                        <tr className="textc">
                       
                        <td key={item.userId}>{item.userName} </td>
                        <td key={item.userId}>{item.email}</td>
                        <td key={item.userId}>{item.password}</td>
                        <td key={item.userId}>{item.contactNo}</td>
                        <td>
                                        <button class="btn btn-primary" onClick={() => handleDelete(item.userId)} >Delete</button>
                        </td>
            
                        </tr>
                    ))}

                   
            </table>


            <button class="btn btn-primary" onClick={() => handleBack()}> BACK </button>
        </div>
    );
}