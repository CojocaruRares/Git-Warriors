import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SearchUser from './components/Search/SearchUser';
import Battle from './components/Battle/Battle';
import Leaderboard from './components/Leaderboard/Leaderboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/SearchUser' element={<SearchUser/>} />
          <Route path='/Battle' element={<Battle/>} />
          <Route path='/Leaderboard' element={<Leaderboard/>} />
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
