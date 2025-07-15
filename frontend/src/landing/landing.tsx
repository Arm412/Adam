import React, { useEffect, useState } from 'react';
import './landing.scss';

const Landing: React.FC = () => {
  const [isDay, setIsDay] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const sideMenu = document.getElementById('sideMenu')
    if (sideMenu) {
      if (showMenu) {
        sideMenu.classList.add('active');
      } else {
        sideMenu.classList.remove('active');
      }
    }
  }, [showMenu]);

  useEffect(() => {
      const sideMenu = document.getElementById('sideMenu')
      if (sideMenu) {
        if (darkMode) {
          sideMenu.classList.add('dark-theme');
        } else {
          sideMenu.classList.remove('dark-theme');
        }
      }
    }, [darkMode]);

  return (
    <div id="landingContainer">
      <div className="fade-out"></div>
      <div className="scene">
        <div className="room">
          <div id="sideMenu" className="side-menu font-mono bg-primary text-mainText">
            <div className="flex justify-between items-center p-2 mb-2">
              <button className="close-button" onClick={() => setShowMenu(false)}>
                <span className="close-line line1"></span>
                <span className="close-line line2"></span>
              </button>
              <label
                className="flex items-center justify-center text-textMain hover:text-textMain cursor-pointer select-none h-fit pr-4"
                onClick={(e) => {
                  e.preventDefault();
                  setDarkMode(!darkMode);
                }}
              >
                <div className="flex justify-center items-center flex-col">
                  <div className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={darkMode}
                      onChange={() => { }}
                      readOnly
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600 bg-secondary" />
                    <span className="ms-3 text-sm font-mono">
                      {darkMode ? "Dark" : "Light"}
                    </span>
                  </div>
                </div>
              </label>
            </div>
            <div className="side-menu-content text-textMain">
              <button className="menu-option" onClick={() => window.location.href = '/aboutme'}>
                <h4>About Info</h4>
              </button>
              <button className="menu-option" onClick={() => window.location.href = '/aboutme?section=workExperience'}>
                <h4>Work Experience</h4>
              </button>
              <button className="menu-option" onClick={() => window.location.href = '/aboutme?section=portfolio'}>
                <h4>Portfolio</h4>
              </button>
              <button className="menu-option" onClick={() => window.location.href = '/aboutme?section=education'}>
                <h4>Education</h4>
              </button>
              <button className="menu-option" onClick={() => window.location.href = '/aboutme?section=contactInfo'}>
                <h4>Contact Info</h4>
              </button>
              <div className="social-buttons">
                <button className="social-option" onClick={() => window.open('https://www.linkedin.com/in/adam-mitro-3b1a6a142/', '_blank')}>
                  <img src="/icons/linkedin.png" alt="LinkedIn" />
                </button>
                <button className="social-option" onClick={() => window.open('https://www.github.com/Arm412', '_blank')}>
                  <img src="/icons/github.png" alt="GitHub" />
                </button>
              </div>
            </div>
          </div>
          <div className="nav-section">
            <button className="nav-button" id='linkedIn' onClick={() => window.open('https://www.linkedin.com/in/adam-mitro-3b1a6a142/', '_blank')}>
              <img src="/icons/linkedin.png" alt="LinkedIn" />
            </button>
            <button className="nav-button" id='github' onClick={() => window.open('https://www.github.com/Arm412', '_blank')}>
              <img src="/icons/github.png" alt="github" />
            </button>
            <div className="menu-button-container" onClick={() => setShowMenu(true)}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
          <div className="monitor-screen">
            <img
              className="select-none"
              src={isDay ? 'PittsburghDayAnimation.gif' : 'pittsburghNight.png'}
              alt="Game screen"
            />
          </div>
          <div className="white-board">
            <h4 className="header">Hi! Welcome to my page!</h4>
            <div>
              <button className="option" onClick={() => window.location.href = '/aboutme'}>About me</button>
              <button className="option" onClick={() => window.location.href = '/aboutme'}>Contact Info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
