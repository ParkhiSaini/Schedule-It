import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../App.css';

function Requests(){
    const [filter, setFilter] = useState('all');
    const [requests, setRequests] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/Requests')
         .then((res) => res.json())
         .then((data) => {
            setRequests(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
    }, []);
        {
        id: 1,
        title: 'Request 1',
        status: 'approved',
        date: '2022-03-19',
        time: '10:00 AM',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        expanded: false,
        },
        {
        id: 2,
        title: 'Request 2',
        status: 'pending',
        date: '2022-03-18',
        time: '2:30 PM',
        description: 'Nulla sed lectus ac velit mollis efficitur.',
        expanded: false,
        },
        // Add more request objects here...
    ]);

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
          className={filter === 'approved' ? 'filter-button active' : 'filter-button'}
          onClick={handleFilterClick}
          data-filter="approved"
        >
          Approved
        </button>
        <button
          className={filter === 'pending' ? 'filter-button active' : 'filter-button'}
          onClick={handleFilterClick}
          data-filter="pending"
        >
          Pending
        </button>
      </div>
      <div className="requests-list">
        {filteredRequests.map((request) => (
          <div className="request-item" key={request.id}>
            <div className="request-summary">
              <div className="request-title">{request.title}</div>
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
                <p>{request.description}</p>
                {/* Add more description fields here... */}
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