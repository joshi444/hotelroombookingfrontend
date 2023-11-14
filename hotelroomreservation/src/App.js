import logo from './logo.svg';
import './App.css';
import {Route,Routes,Link }from 'react-router-dom';
import Home from './Home';
import DatePicker from 'react-date-picker';
import Login from './Login';
import Profile from './UserProfile';
import Header from './Header';
import Register from './Register';
import Main from './Mainpage';
import Hotels from './hotels';
import Room from './rooms';
import Book from './BookRoom';
import UserBooking from './UserBooking';
import AdminHotels from './AdminHotels';
import AddHotel from './Addhotels';
import Admin from './AdminPage';
import AdminRoom from './AdminRooms';
import AddRoom from './Addroom';
import ABooking from './AdminBookings';
import AUsers from './AllUsers';
import Aupdate from './AdminUpdateBooking'
import AUpdateHotel from './AupdateHotel';
import AUroom from './AdminUpdateRooms';
function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Main></Main> */}
      <Routes>
      <Route  path="/home" element={<Home/>}></Route>
      <Route  path="/login" element={<Login/>}></Route>
      <Route  path="/register" element={<Register/>}></Route>
     
      <Route  path="/hotels" element={<Hotels/>}></Route>
      <Route  path="/rooms/:hotelId" element={<Room/>}></Route>
      <Route  path="/adminhotels" element={<AdminHotels/>}></Route>
      <Route  path="/admin" element={<Admin/>}></Route>
      <Route  path="/addhotels" element={<AddHotel/>}></Route>
      <Route  path="/adminrooms/:hotelId" element={<AdminRoom/>}></Route>
      <Route  path="/addrooms/:hotelId" element={<AddRoom/>}></Route>
      <Route  path="/bookings" element={<ABooking/>}></Route>
      <Route  path="/users" element={<AUsers/>}></Route>
      <Route  path="/adminupdatebooking/:id/:uid/:rid/:hid/:cid" element={<Aupdate/>}></Route>
      <Route  path="/book/:hotelid/:roomid" element={<Book/>}></Route>
      <Route  path="/aupdatehotel/:hotelId" element={<AUpdateHotel/>}></Route>
      <Route  path="/auroom/:hotelId/:roomId" element={<AUroom/>}></Route>
     {/* <Route  path="/tickets" element={<Tickets/>}></Route>  */}
      <Route  path="/mainpage" element={<Main/>}></Route>
      
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/myticket" element={<UserBooking/>}></Route>
      

      </Routes>
    </div>
  );
}

export default App;
