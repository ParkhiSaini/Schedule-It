import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';

import Requests from './components/Requests';


function App() {
  return (
    <Router>
      {/* <div className="App"> */}

        <Routes>
          
          <Route path='/LandingPage' element={<LandingPage />} />
         
          <Route path='/Requests' element={<Requests />} />
          
        </Routes>
      {/* </div> */}
    </Router>
    
    
    
  
  );
}

export default App;
