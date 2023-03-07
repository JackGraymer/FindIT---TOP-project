import './App.css';
import {Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from "./components/home.js"
import Leaderboard from './components/leaderboard';
import Game from './components/game';


function App() {
  return (
    <div className="App">
      
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="leaderboard" element={<Leaderboard/>} />
        <Route path="contact"  />
        <Route path="game/:image" element={<Game/>} />
      </Routes>
    </div>
  );
}

export default App;
