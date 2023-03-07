import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Landing = (props) => {
    
//   // Define the state with useState hook
//   const navigate = useNavigate();
//   const [book, setBook] = useState({
//     title: '',
//     isbn: '',
//     author: '',
//     description: '',
//     published_date: '',
//     publisher: '',
//   });

//   const onChange = (e) => {
//     setBook({ ...book, [e.target.name]: e.target.value });
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();

//     axios
//       .post('http://localhost:8082/api/books', book)
//       .then((res) => {
//         setBook({
//           title: '',
//           isbn: '',
//           author: '',
//           description: '',
//           published_date: '',
//           publisher: '',
//         });

//         // Push to /
//         navigate('/');
//       })
//       .catch((err) => {
//         console.log('Error in CreateBook!');
//       });
//   };

    

  return (
    <div className='CreateBook'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/landing' className='btn btn-outline-warning float-left'>
              Show BooK List
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );




};


export default Landing;