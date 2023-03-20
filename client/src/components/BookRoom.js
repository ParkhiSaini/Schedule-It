import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

import { useNavigate } from "react-router-dom";

function BookRoom() {

  const navigate = useNavigate();

  const handleRaisingClick = () => {
    navigate('/Requests');
  }
  return (
    <div class="BookRoom">
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/LandingPage">Home</a>
            <a class="Request" href ="/Requests">Requests</a>
            <a class="Time-table" href ="#">Time-Table</a>
            <a class="User" href ="#">User</a>
          </div>
        </nav>
      <p class="text3">Book Your Room</p>
      <form class="form3">
        <div class="form_col1">
          <div class="inputBox3">
            <input type="name" class="form-control3" placeholder="Name:"></input>
          </div>
          
          <div class="inputBox3">
            <input
              type="name"
              class="form-control3"
              placeholder="No. of People:"
            ></input>
          </div>
          <div class="inputBox3">
            <select class="form-control3_1" id="FormControlSelect2">
              <option value="">Clubs/Chapter</option>
              <option id="option">CSI</option>
              <option id="option">ACM </option>
              <option id="option">GDSC</option>
              <option id="option">IEEE</option>
              <option id="option">BURS</option>
            </select>
           </div>

           <div class="inputBox3">
              <select class="form-control3_2" id="FormControlSelect3">
                <option value="">Room type</option>
                <option id="option">Group discussion room</option>
                <option id="option">labs</option>
                <option id="option">Confrence Room </option>
                <option id="option">Lecture Room </option>
                <option id="option">Meeting Rooms</option>
              </select>
             
            </div>
          
          <div class="form_col2">
            <div class="inputBox3">
            <input
              type="name"
              class="form-control3"
              placeholder="Date:"
            ></input>
            </div>
            <div class="inputBox3">
            <input
              type="name"
              class="form-control3"
              placeholder="Priority:"
            ></input>
            </div>
            <div class="inputBox3">
            <select class="form-control3_3" id="FormControlSelect3">
                <option value="">Duration</option>
                <option id="option">1-2hr</option>
                <option id="option">3-4hrs</option>
                <option id="option">5-6hrs </option>
                <option id="option">7-8hrs </option>
                <option id="option">more than 8 hrs</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      <button class ="Book" onClick={handleRaisingClick}>Raise Ticket</button> 
    </div>
  );
}
export default BookRoom;
