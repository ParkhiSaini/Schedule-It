import React  from 'react';
import { useState } from 'react';
import '../App.css';

function LoginPage(){
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/api/Login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
            console.log("hehehe")
			window.location.href = '/BookRoom'
		} else {
			alert('Please check your username and password')
		}
	}


    return(
        <div class ="LoginPage">
            <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#" >
                Home 
            </a>
        </nav>
        <div class="card">
            <p class="text2">Log-In</p>
            <p class = "schedule_it2">SCHEDULE IT</p>
            <p class= "text2_line">An easy to way to book a meeting room</p>
            <a class="forgot" href="#" >
            Forgot Password ? 
            </a>
            </div>
            <form class= "form" onSubmit={loginUser}>
                <div class="inputBox">
                    <input 
                    value={email}
					onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    class="form-control"
                    id="exampleFormControlInput1" 
                    placeholder="EMAIL"></input>
                </div>
                <div class="inputBox">
                    <input
                    value={password}
					onChange={(e) => setPassword(e.target.value)}
                    type="password" class="form-control" id="exampleInputPassword1" placeholder="PASSWORD"></input>
                </div>
                <input type="submit" value = "Login" class="sign_in2"/>
            </form>
        </div>
    );
}

export default LoginPage;