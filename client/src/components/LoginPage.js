import React  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function LoginPage(){
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
            <button type="button" class="sign_in2">Sign In</button> 
            <a class="forgot" href="#" >
            Forgot Password ? 
            </a>
          
        
            </div>
            <form class= "form">
    <div class="inputBox">
      <input type="email" name="email" required onkeyup="this.setAttribute('value', this.value);" value=""/>
      <label>Email</label>
    </div>
    <div class="inputBox">
      <input type="password" name="password" required value=""
             onkeyup="this.setAttribute('value', this.value);"
             pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
             title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/>
      <label>Password</label>
    </div>
    
    </form>

    </div>
        );

}

export default LoginPage;