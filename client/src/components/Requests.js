import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../App.css';

function Requests(){
    const [filter, setFilter] = useState('all');
    const [requests, setRequests] = useState([]);

    useEffect(() => {
      const jwtToken = localStorage.getItem('token');
      fetch('http://localhost:5000/Requests', {
          method: 'GET',
          headers: {
        'Authorization': `Bearer ${jwtToken}`,
				'Content-Type': 'application/json',
      }
    })
         .then((res) => res.json())
         .then((data) => {
            setRequests(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
    }, []);

    function handleFilterClick(e) {
        const newFilter = e.target.dataset.filter;
        setFilter(newFilter);
    }

    function handleMoreClick(id) {
        setRequests(
        requests.map((request) =>
            request._id === id ? { ...request, expanded: !request.expanded } : request
        )
        );
    }

    let filteredRequests = requests;

    if (filter !== 'all') {
        filteredRequests = requests.filter((request) => request.status === filter);
    }
    return(
        <div class="Requests">
               <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                      <a class="navbar-brand" href="/">Home</a>
                      <a class="Request" href ="#">Requests</a>
                      <a class="Time-table" href ="#">Time-Table</a>
                      <a class="User" href ="#">User</a>
                      </div>
                </nav>

                <div className="requests-container">
                    <h2 className="requests-heading">Requests</h2>
                    <div className="filter-container">
                        <button
                        className={filter === 'all' ? 'filter-button active' : 'filter-button'}
                        onClick={handleFilterClick}
                        data-filter="all"
                        >
                          All
        </button>
        <button
          className={filter === 'Approved' ? 'filter-button active' : 'filter-button'}
          onClick={handleFilterClick}
          data-filter="Approved"
        >
          Approved
        </button>
        <button
          className={filter === 'Pending' ? 'filter-button active' : 'filter-button'}
          onClick={handleFilterClick}
          data-filter="Pending"
        >
          Pending
        </button>
      </div>
      <div className="requests-list">
        {filteredRequests.map((request) => (
          <div className="request-item" key={request._id}>
            <div className="request-summary">
              <div className="request-name">{request.name}</div>
              <div className="request-date-time">
                <span className="request-date">{request.date}</span>
                <span className="request-time">{request.time}</span>
              </div>
              <button
                className="request-more-button"
                onClick={() => handleMoreClick(request._id)}
              >
                More
              </button>
            </div>
            {request.expanded && (
              <div className="request-description">
                <p>{request.reason}</p>
                <p>Number of people: {request.numofpeople}</p>
                <p>Chapter Name: {request.chapterName}</p>
                <p>Room Type: {request.roomType}</p>
                <p>Duration: {request.duration}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

        </div>
        
    );
}

export default Requests;