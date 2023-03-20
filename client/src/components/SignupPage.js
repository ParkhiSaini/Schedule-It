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
                <div  class="inputBox2" >
                    <input type="name" class="form-control2"  placeholder ="NAME"></input>

                </div>
    <div class="inputBox2">
      <input type="email"  class="form-control2" id="exampleFormControlInput1" placeholder="EMAIL"></input>

    </div>
    <div class="inputBox2">
    <input type="password" class="form-control2" id="exampleInputPassword1" placeholder="PASSWORD"></input>
    
{/*     
    <div class="half dropdown">
      <div class="underline right-control">
      <input type="Role" class="form-control2" placeholder='ROLE' />
    
       
        <div class="dropdown-arrow"><div></div></div>
      </div>
      <select>
          <option value="Africa">Africa</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Australia">Australia</option>
            <option value="Antarctica">Antarctica</option>
         </select>
    </div> */}






      <div class="inputBox2">
                    {/* <input type="Role" class="form-control2" placeholder='ROLE' /> */}
                    <select class="form-control2" id="FormControlSelect1" >
                        <option value="" >ROLE</option>
                        <option id ="option">1</option>
                        <option id ="option" >2</option>
                        <option id ="option">3</option>
                        <option id ="option">4</option>
                        <option id="option">5</option>
                    </select>
                    
                </div>                  
    </div>
    
    </form> 

    </div>
        );

}

export default SignupPage;