import React, { useEffect, useState } from 'react';
import './landing.scss';

const Landing: React.FC = () => {
  const [isDay, setIsDay] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const sideMenu = document.getElementById('sideMenu')
    console.log("Toggle")
    if (sideMenu) {
      if (showMenu) {
        sideMenu.classList.add('active');
      } else {
        sideMenu.classList.remove('active');
      }
    }
  }, [showMenu]);

  return (
    <div className="landing-container">
      <div className="fade-out"></div>
      <div className="scene">
        <div className="desk">
          <div className='side-menu' id="sideMenu">
            <button className="close-button" onClick={() => setShowMenu(false)}>
              <span className="close-line line1"></span>
              <span className="close-line line2"></span>
            </button>
            <div className="side-menu-content">
              <h1 className="title">Adam Mitro</h1>
              <p className="description">Full Stack Developer</p>
              <p className="description">Pittsburgh, PA</p>
            </div>
          </div>
          <div className="nav-section">
            <button className="nav-button" id='linkedIn' onClick={() => window.open('https://www.linkedin.com/in/adam-mitro-3b1a6a142/', '_blank')}>
              <img src="linkedin.png" alt="LinkedIn" />
            </button>
            <button className="nav-button" id='github' onClick={() => window.open('https://www.github.com/Arm412', '_blank')}>
              <img src="github.png" alt="github" />
            </button>
            <div className="menu-button-container" onClick={() => setShowMenu(true)}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
          <div className="monitor-screen">
            <img
              src={isDay ? 'PittsburghDayAnimation.gif' : 'pittsburghNight.png'}
              alt="Game screen"
            />
          </div>
          <div className="white-board">
            <h4 className="header">Hi! Welcome to my page!</h4>
            <div>
              <button className="option">About me</button>
              <button className="option">Portfolio</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
