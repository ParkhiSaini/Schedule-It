import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function BookRoom() {

  const navigate = useNavigate(); 

	const [name, setName] = useState('')
	const [numofpeople, setNumOfPeople] = useState('')
	const [date, setDate] = useState('')
  const [priority, setPriority] = useState('')
  const [chapterName, setChapterName] = useState('')
  const [roomType, setRoomType] = useState('')
  const [duration, setDuration] = useState('')
  const [reason, setReason] = useState('')
  const [userId, setUserId] = useState('')

	async function createRequest(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/BookRoom', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
        numofpeople,
        date,
        priority,
        chapterName,
        roomType,
        duration
			}),
		})

    const data = await response.json()

    if (data.user != null) {
      alert('Request successfully created')
      navigate('/Requests');
    }
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
            <input type="name" class="form-control3" placeholder="Name:" value={name} onChange={(e) => setName(e.target.value)}></input>
          </div>
          
          <div class="inputBox3">
            <input
              class="form-control3"
              placeholder="No. of People:"
              value={numofpeople}
              onChange={(e) => setNumOfPeople(e.target.value)}
            ></input>
          </div>
          <div class="inputBox3">
            <select class="form-control3_1" id="FormControlSelect2" value={chapterName} onChange={(e) => setChapterName(e.target.value)}>
              <option value="">Clubs/Chapter</option>
              <option id="option">CSI</option>
              <option id="option">ACM </option>
              <option id="option">GDSC</option>
              <option id="option">IEEE</option>
              <option id="option">BURS</option>
            </select>
           </div>

           <div class="inputBox3">
              <select class="form-control3_2" id="FormControlSelect3" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                <option value="">Room type</option>
                <option id="option">Group discussion room</option>
                <option id="option">Labs</option>
                <option id="option">Confrence Room </option>
                <option id="option">Lecture Room </option>
                <option id="option">Meeting Rooms</option>
              </select>
             
            </div>
          
          <div class="form_col2">
            <div class="inputBox3">
            <input
              type="date"
              class="form-control3"
              placeholder="Date:"
              dateFormat="date/month/year"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></input>
            </div>
            <div class="inputBox3">
            <input
              class="form-control3"
              placeholder="Priority (1-5):"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            ></input>
            </div>
            <div class="inputBox3">
            <select class="form-control3_3" id="FormControlSelect3" value={duration} onChange={(e) => setDuration(e.target.value)}>
                <option value="">Duration</option>
                <option id="option">1 Hr</option>
                <option id="option">3 Hrs</option>
                <option id="option">5 Hrs </option>
                <option id="option">7 Hrs </option>
                <option id="option"> More than 7 Hrs</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      <button class ="Book" onClick={createRequest}>Raise Ticket</button> 
    </div>
  );
}
export default BookRoom;
