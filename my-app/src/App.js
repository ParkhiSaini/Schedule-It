import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';import '../src/App.css';
import Landing from './components/Landing';
// import ShowBookList from './components/ShowBookList';
// import ShowBookDetails from './components/ShowBookDetails';
// import UpdateBookInfo from './components/UpdateBookInfo';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/landing' element={<Landing/>} />
          {/* <Route path='/create-book' element={<CreateBook />} />
          <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
          <Route path='/show-book/:id' element={<ShowBookDetails />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;