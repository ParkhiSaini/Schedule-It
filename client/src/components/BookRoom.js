import React  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';


import { useNavigate } from 'react-router-dom';

function BookRoom(){
    return(<div class = "BookRoom">
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#" >
                Home 
            </a>
            <a class="navbar-brand3" href="#" >
                Username
            </a>
            <a class="navbar-brand4" href="#" >
                Time-Table
            </a>
            <a class="navbar-brand5" href="#" >
                Your Requests
            </a>
        </nav>
        <p class="text3">Book Your Room</p>
        <form class= "form3">
        <div class="form_col1">
        <div  class="inputBox3" >
                    <input type="name" class="form-control3"  placeholder ="NAME"></input>

                </div>
                {/* <div class="inputBox3">
                    <input type="name" name="name" value="" ></input>
                    <label>Purpose</label>
                </div> */}
    <div class="inputBox3">
        <input type="name" name="name" value=""></input>
        <label>No.Of People</label>
    </div>
    <div class="inputBox3">
        <input type="name" name="name" value="" ></input>
        
            <label>Club/Chapter</label>
            
      <div class="inputBox3">
                    <input type="name" name="name" value="" ></input>
                    <label>Room Type</label>
                </div>                  
    </div>
    </div>
    <div class="form_col2">
                <div class="inputBox3">
                    <input type="name" name="name" value="" ></input>
                    <label>Date-</label>
                </div>
    <div class="inputBox3">
        <input type="name" name="name" value="" ></input>
        <label>Priority</label>
    </div>
    <div class="inputBox3">
        <input type="name" name="name" value="" ></input>
            <label>Duration-</label>
                        
    </div>
    </div>
    
    </form> 
    <button class ="Book">Raise Ticket</button>
        </div>

            );
        
        }
export default BookRoom;