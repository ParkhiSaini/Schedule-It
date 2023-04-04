import React from "react";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../App.css";

function SignupPage() {
  const navigate = useNavigate()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/SignUp', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()
    if (data.status=='ValidID'){
      alert("Kindly enter you bennett email id")
    }
		if (data.status === 'ok') {
			navigate('/Login');
		}
	}

  return (
    <div class="SignupPage">
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Home
        </a>
      </nav>
      <div class="card">
        <p class="text3">Sign-Up</p>
        <p class="schedule_it2">SCHEDULE IT</p>
        <p class="text2_line">An easy to way to book a meeting room</p>
      </div>

      <form class="form2" onSubmit={registerUser}>
        <div class="inputBox2">
          <input
          value={name}
					onChange={(e) => setName(e.target.value)}
          type="name" class="form-control2" placeholder="NAME"></input>
        </div>
        <div class="inputBox2">
          <input
          value={email}
					onChange={(e) => setEmail(e.target.value)}
          type="email"
          class="form-control2"
          id="exampleFormControlInput1"
          placeholder="EMAIL"
          ></input>
        </div>
        <div class="inputBox2">
          <input
            type="password"
            value={password}
					  onChange={(e) => setPassword(e.target.value)}
            class="form-control2"
            id="exampleInputPassword1"
            placeholder="PASSWORD"
          ></input>

     

          <div class="inputBox2">
          
            <select class="form-control2_1" id="FormControlSelect1">
              <option value="">ROLE</option>
              <option id="option">1</option>
              <option id="option">2</option>
              <option id="option">3</option>
              <option id="option">4</option>
              <option id="option">5</option>
            </select>
          </div>
        </div>
        <input type="submit" class="sign_in2" value = "Create Account"/>
      </form>
    </div>
  );
}

export default SignupPage;
