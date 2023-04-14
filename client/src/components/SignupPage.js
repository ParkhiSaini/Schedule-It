import React from "react";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../App.css";

function SignupPage() {
  const navigate = useNavigate()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  const[role,setRole]=useState()

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
        role,
			}),
		})

		const data = await response.json()
    if (data.status=='invalidID'){
      alert("Kindly enter you bennett email id")
    }
		if (data.status === 'ok') {
			navigate('/Login');
		}
	}

  return (
    <div class="SignupPage">
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="/">
          Home
        </a>
      </nav>
      <div class="card2">
        <p class="signup">Sign-Up</p>
        <p class="schedule_it2">SCHEDULE IT</p>
        <p class="text2_line">An easy to way to book a meeting room</p>
      </div>

      <form class="form2" onSubmit={registerUser}>
        <div class="inputBox2">
          <input
          value={name}
					onChange={(e) => setName(e.target.value)}
          type="name" class="form-control2" placeholder="Name"></input>
        </div>
        <div class="inputBox2">
          <input
          value={email}
					onChange={(e) => setEmail(e.target.value)}
          type="email"
          class="form-control2"
          id="exampleFormControlInput1"
          placeholder="Email"
          ></input>
        </div>
        <div class="inputBox2">
          <input
            type="password"
            value={password}
					  onChange={(e) => setPassword(e.target.value)}
            class="form-control2"
            id="exampleInputPassword1"
            placeholder="Password"
          ></input>

     

          <div class="inputBox2">
          
            <select class="form-control2_1" id="FormControlSelect1" value={role} onChange={(e) => setRole(e.target.value)}>
              <option >Role</option>
              <option id="option" value="Dean/Admin">Dean/Admin</option>
              <option id="option" value="Heads">Heads/Captains</option>
              <option id="option" value="Teachers">Teachers</option>
              <option id="option" value="Student">Student</option>
            
            </select>
          </div>
        </div>
        <input type="submit" class="submit" value = "Create Account"/>
      </form>
    </div>
  );
}

export default SignupPage;
