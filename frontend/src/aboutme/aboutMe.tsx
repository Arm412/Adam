import React, { useState } from 'react';
import './aboutMe.scss';

const AboutMe: React.FC = () => {
  const [isDay, setIsDay] = useState(true);

  return (
    <div className="about-me-container">
      <h1 className="about-me-title">About Me</h1>
    </div>
  );
}

export default AboutMe;
