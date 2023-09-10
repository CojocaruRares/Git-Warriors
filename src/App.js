import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SearchUser from './components/Search/SearchUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/SearchUser' element={<SearchUser/>} />
        </Routes>
      </div>
    </Router>
  );
}

function Home(){
  return (
      <div>
          <h1>
              GitWarriors - React App where users can battle 
              with their GitHub profile
          </h1>
      </div>
  );
};


export default App;
