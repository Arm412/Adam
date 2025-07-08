import React, { useState } from 'react';
import './aboutMe.scss';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

const AboutMe: React.FC = () => {
  const [isDay, setIsDay] = useState(true);

  return (
    <div id="aboutMeContainer" className='font-mono'>
      <div className="w-full h-20 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-b-2 border-b-secondary">
        <button className="flex items-center text-secondary hover:text-white">
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          <span>Back</span>
        </button>
      </div>
      <div className="min-h-screen bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white p-10">
        <section className="flex flex-col md:flex-row items-center gap-8 p-6 max-w-5xl mx-auto">
        <div className="w-full md:w-1/2 ">
          <img src="Adam.png" alt="Adam Mitro" className="rounded-full shadow-lg w-full h-auto object-cover border-4 border-secondary" />
        </div>

        <div className="bg-cardBg backdrop-blur-md p-6 rounded-lg border border-secondary shadow-lg w-fit">
          <h2 className="text-secondary text-3xl font-bold mb-4 font-mono">About Me</h2>
          <p className="text-lg text-textMain font-mono">
            Hi, I'm Adam Mitro. I'm a full-stack engineer passionate about building projects that keep me on the cutting edge of programming languages and technologies. 
            I thrive on exploring new tools and frameworks to continuously sharpen my skills and stay ahead in the ever-evolving world of software development.
          </p>
        </div>
      </section>
      </div>
    </div>
  );
}

export default AboutMe;
