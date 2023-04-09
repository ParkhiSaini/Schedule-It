import React  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import { useNavigate } from 'react-router-dom';


function LandingPage(){
    const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate('/BookRoom');
  }
    return(

    <div class = "LandingPage">
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Home</a>
                <a class="LogIn" href ="/Login">Login</a>
                <a class="SignIn" href ="/Signup">SignUp</a>
            </div>
        </nav>
        <p class="Scheduleit">SCHEDULE IT</p> 
        <div class="text1">
        <p class="line1">Need to <span class="brown">Organise</span> an event? </p>
        <p class="line2">Need a<span class="brown"> Discussion </span>room for your team?</p>
        <p class="line3">Want the whole college to know about your <span class="brown">Event</span> </p>
        <p class="line4">Want to know the latest<span class="brown"> happenings </span>in the college</p>
        <p class="line5">Want to acess your<span class="brown"> time-table </span>in just a click</p> 
        </div>
      </div>
    );
      
}
export default LandingPage;