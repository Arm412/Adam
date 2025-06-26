import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDay, setIsDay] = useState(true);

  return (
    <div className="App">
      <div className='fade-out'></div>
      <div className="container">
        <div className="desk">
          <h1 className="welcome">Welcome!</h1>
          <div className="game-screen">
            <img
              src={isDay ? 'PittsburghDayAnimation.gif' : 'pittsburghNight.png'}
              alt="Game screen"
            />
            <button className="toggle" onClick={() => setIsDay(!isDay)}>
              Toggle Background
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
