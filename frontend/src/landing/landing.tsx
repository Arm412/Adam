import React, { useState } from 'react';
import './landing.scss';

const Landing: React.FC = () => {
  const [isDay, setIsDay] = useState(true);

  return (
    <div className="landing-container">
      <div className='fade-out'></div>
      <div className="scene">
        <div className="desk">
          <div className="monitor-screen">
            <img
              src={isDay ? 'PittsburghDayAnimation.gif' : 'pittsburghNight.png'}
              alt="Game screen"
            />
            <button className="toggle" onClick={() => setIsDay(!isDay)}>
              Toggle Background
            </button>
          </div>
          <div className='white-board'>
            <h2 className='header'>Welcome to my page!</h2>
            <div>
              <button className='option'>About me</button>
              <button className='option'>Portfolio</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
