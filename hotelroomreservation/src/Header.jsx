import React from "react";
import {NavLink} from "react-router-dom";
import "./header.css";

 export default function Header()
 {
     return(
        
            <div>
                 <nav className="navbar navbar-default-expand-lg bg-dark  navbar-dark ls">
                <div className="Container">
                    <div className="navbar-header">
                    <a className="navbar-brand" class="home" href="/home" ><h4>BookMyRoom.com</h4></a>
                     </div>
                    <u1 className="nav navbar-nav bg-light">
                 {/* <li><NavLink to="/home" >Go to Home</NavLink></li> */}
                     {/* <li><a class ="home" href="/home">Get started</a></li> */}
                   </u1>
                </div>
             </nav>
            </div>
     )
 }