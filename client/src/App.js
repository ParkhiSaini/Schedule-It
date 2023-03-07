import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import BookRoom from './components/BookRoom';

function App() {
  return (
    <Router>
      {/* <div className="App"> */}

        <Routes>
          
          <Route path='/LandingPage' element={<LandingPage />} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/Signup' element={<SignupPage />} />
          <Route path='/BookRoom' element={<BookRoom />} />
          
        </Routes>
      {/* </div> */}
    </Router>
    
    
    
  
  );
}

export default App;
