import React  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Requests(){
    return(
        <div class="Requests">
               <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                      <a class="navbar-brand" href="#">Home</a>
                      <a class="Request" href ="#">Requests</a>
                      <a class="Time-table" href ="#">Time-Table</a>
                      <a class="User" href ="#">User</a>
                      </div>
                </nav>

                <h1 class="head">Requests</h1>
               
                
                <div class="dropdown">
                    <button>Requests</button>
                        <div class="dropdown-options">
                            <a href="#">Approved</a>
                            <a href="#">Rejected</a>
                            <a href="#">Pending</a>
                        </div>
                </div>
        </div>
        
    );
}

export default Requests;