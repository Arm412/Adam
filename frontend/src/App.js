import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDay, setIsDay] = useState(true);

  return (
    <div className="App">
      <div className="television">
        <div className='game-screen'>
            <img
              src={isDay ? 'PittsburghDayAnimation.gif' : 'pittsburghNight.png'} />
          <button className='toggle' onClick={() => setIsDay(!isDay)}>
            Toggle Background
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
