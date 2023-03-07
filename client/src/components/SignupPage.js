import React  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function SignupPage(){
    return(
        <div class ="SignupPage">
            <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#" >
                Home 
            </a>
            
        </nav>
        <div class="card">
            <p class="text3">Sign-Up</p>
            <p class = "schedule_it2">SCHEDULE IT</p>
            <p class= "text2_line">An easy to way to book a meeting room</p>
            <button type="button" class="sign_in2">Create Account</button> 
            
          
        
            </div>
            <form class= "form2">
                <div class="inputBox2">
                    <input type="name" name="name" value="" />
                    <label>Name</label>
                </div>
    <div class="inputBox2">
      <input type="email" name="email" required onkeyup="this.setAttribute('value', this.value);" value=""/>
      <label>Email</label>
    </div>
    <div class="inputBox2">
      <input type="password" name="password" required value=""
             onkeyup="this.setAttribute('value', this.value);"
             pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
             title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/>
      <label>Password</label>
      <div class="inputBox2">
                    <input type="name" name="name" value="" />
                    <label>Role</label>
                </div>                  
    </div>
    
    </form> 

    </div>
        );

}

export default SignupPage;