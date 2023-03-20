import React  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import BookRoom from './BookRoom';

function LoginPage(){
    const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/BookRoom');
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
            <button type="button" class="sign_in2" onClick={handleLoginClick}>Sign In</button> 
            
            <a class="forgot" href="#" >
            Forgot Password ? 
            </a>
          
        
            </div>
            <form class= "form">
    <div class="inputBox">
      <input type="email"  class="form-control" id="exampleFormControlInput1" placeholder="EMAIL"></input>
    </div>
    <div class="inputBox">
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="PASSWORD"></input>
    
      
    </div>
    
    </form>

    </div>
        );

}

export default LoginPage;