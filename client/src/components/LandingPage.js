import React  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';


import { useNavigate } from 'react-router-dom';
function LandingPage(){
    return(<div class = "LandingPage">
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#" >
                Home 
            </a>
            <a class="navbar-brand2" href="#" >
                About Us
            </a>
        </nav>
        
        <p class="scheduleit">SCHEDULE IT</p> 
        
        <div class="text1">
        
       
        <p class="line1"><span class="brown">Scheduleit</span> a place where you can book meeting </p>
        <p class="line2"><span class="brown"> room</span> and rooms for upcoming</p>
        <p class="line3"><span class="brown">events</span>, avoiding the many hours of </p>
        <p class="line4"><span class="brown">waiting</span> for approvals.</p>
        <p class="line5"><span class="brown">Your quickest</span> access to ongoing </p> 
        <p class= "line6"><span class="brown">events</span> and timetable </p>
        
        </div>
       
        
        {/*button  type="button " class ="SignIn">Sign In</button>*/}
        <button type="button" class="btn btn-outline-secondary">Sign In</button>  
        <button class ="Login">Login </button>
        


        </div>
        );
      
}
export default LandingPage;