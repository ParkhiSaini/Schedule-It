import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../App.css';

function DeanRequests(){
  const [filter, setFilter] = useState('all');
  const [requests, setRequests] = useState([]);
  const jwtToken = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://localhost:5000/DeanRequests',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`,
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
          request.id === id ? { ...request, expanded: !request.expanded } : request
      )
      );
  }

  function handleAccept(id) {
    
    fetch(`http://localhost:5000/Requests/${id}/accept`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${jwtToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        status: 'Approved'
      })
    })
      .then(response => response.json())
      .then(data => {
        setRequests(
          requests.map(request => {
            if (request._id === id) {
              return { ...request, status: 'Approved' };
            } else {
              return request;
            }
          })
        );
      })
      .catch(error => {
        console.error({'Error': error});
      });
  }

  function handleReject(id) {
    
    fetch(`http://localhost:5000/Requests/${id}/reject`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${jwtToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        status: 'Rejected'
      })
    })
      .then(response => response.json())
      .then(data => {
        setRequests(
          requests.map(request => {
            if (request._id === id) {
              return { ...request, status: 'Rejected' };
            } else {
              return request;
            }
          })
        );
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  function handleFilterClick(e) {
    const newFilter = e.target.dataset.filter;
    setFilter(newFilter);
}

  let filteredRequests = requests;

  if (filter !== 'all') {
      filteredRequests = requests.filter((request) => request.status === filter);
  }
  return(
      <div class="Requests">
             <nav class="navbar navbar-light bg-light">
                  <div class="container-fluid">
                    <a class="navbar-brand" href="#">Home</a>
                    <a class="Request" href ="#">Requests</a>
                    <a class="Time-table" href ="/TimeTable">Time-Table</a>
                    <a class="User" href ="\Login">Logout</a>
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
        className={filter === 'approved' ? 'filter-button active' : 'filter-button'}
        onClick={handleFilterClick}
        data-filter="Approved"
      >
        Approved
      </button>
      <button
        className={filter === 'pending' ? 'filter-button active' : 'filter-button'}
        onClick={handleFilterClick}
        data-filter="Pending"
      >
        Pending
      </button>
    </div>
    <div className="requests-list">
      {filteredRequests.map((request) => (
        <div className="request-item" key={request.userId}>
          <div className="request-summary">
            <div className="request-name">{request.name}</div>
            <div className="request-date-time">
              <span className="request-date">{request.date}</span>
              <span className="request-time">{request.time}</span>
            </div>
            <button
              className="request-more-button"
              onClick={() => handleMoreClick(request.id)}
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
              <button className="request-accept-btn" onClick={() => handleAccept(request._id)}>Accept</button> 
              <button className="request-reject-btn" onClick={() => handleReject(request._id)}>Reject</button>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>

      </div>
      
  );
}

export default DeanRequests;