import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";

function SignupPage() {

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/Login');
  }
  return (
    <div class="SignupPage">
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="/LandingPage">
          Home
        </a>
      </nav>
      <p class="heading">SignUp</p>
      <div class="card2">
        
        <p class="schedule_it3">SCHEDULE IT</p>
        <p class="text3_line">An easy to way to book a meeting room</p>
        <button type="button" class="sign_in2" onClick={handleSignUpClick}>
          Create Account
        </button>
        
      </div>

      <form class="form2">
        <div class="inputBox2">
          <input type="name" class="form-control2" placeholder="NAME"></input>
        </div>
        <div class="inputBox2">
          <input
            type="email"
            class="form-control2"
            id="exampleFormControlInput1"
            placeholder="EMAIL"
          ></input>
        </div>
        <div class="inputBox2">
          <input
            type="password"
            class="form-control2"
            id="exampleInputPassword1"
            placeholder="PASSWORD"
          ></input>

     

          <div class="inputBox2">
          
            <select class="form-control2_1" id="FormControlSelect1">
              <option value="">ROLE</option>
              <option id="option">Dean/Admin</option>
              <option id="option">Heads/Captains</option>
              <option id="option">Student</option>
            
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
