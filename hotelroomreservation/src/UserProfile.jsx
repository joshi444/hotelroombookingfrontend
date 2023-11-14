import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Profile.css"; // Create a Profile.css file for styling

export default function Profile() {
  const user = localStorage.getItem("user");
  const Navigate = useNavigate();

  const handleBack = () => {
    Navigate("/mainpage", { replace: false });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="Container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/"></Link>
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
      <div className="tab text-center">
        
      <div className="user-profile">
        <table className="user-details">
          <tbody>
            <tr>
              {/* <td>
                <p className="user-label">USERID:</p>
              </td>
              <td>
                <p className="user-value">{JSON.parse(user).userId}</p>
              </td> */}
            </tr>
            <tr>
              <td>
                <p className="user-label">NAME:</p>
              </td>
              <td>
                <p className="user-value">{JSON.parse(user).userName}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="user-label">EMAIL:</p>
              </td>
              <td>
                <p className="user-value">{JSON.parse(user).email}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="user-label">PHONE:</p>
              </td>
              <td>
                <p className="user-value">{JSON.parse(user).contactNo}</p>
              </td>
            </tr>
          </tbody>
         <div className="bt"> <button className="btn btn-primary" onClick={handleBack}>
          Back
        </button></div>
        </table>
        
      </div>
      </div>
    </div>
  );
}
