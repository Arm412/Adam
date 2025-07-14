import React, { useEffect, useState } from 'react';
import './AboutMe.scss';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import WorkExperienceItem from '../components/WorkExperienceItem/WorkExperienceItem';
import { ProgrammingLanguage, IconsHelper } from '../helpers/helpers';

const AboutMe: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  type JobExperience = {
    companyName: string;
    jobDuties: string[];
    programmingLanguages?: ProgrammingLanguage[];
  };

  const jobExperiences: JobExperience[] = [
    {
      companyName: "Software Design Solutions Inc.",
      jobDuties: [
        "Implemented Behavior-Driven Development testing for .NET web applications using SpecFlow and Gherkin, enhancing test coverage and ensuring alignment with business requirements.",
        "Performed embedded development on Linux using the Yocto Project to create recipes for building and deploying firmware images to the BeagleBone Black.",
        "Established and maintained rigorous software testing standards, ensuring high product quality.",
        "Participated in Agile sprint planning, identifying risks and proposing mitigation strategies.",
        "Led debugging efforts to resolve software defects, improving product stability and customer satisfaction.",
        "Conducted peer code reviews to optimize software development processes and maintain code integrity."
      ],
      programmingLanguages: [
        { name: "C++", icon: IconsHelper.Cpp },
        { name: "Typescript", icon: IconsHelper.Typescript },
        { name: "HTML5", icon: IconsHelper.HTML5 },
        { name: "CSS3", icon: IconsHelper.CSS3 },
        { name: "Gherkin", icon: IconsHelper.Cucumber },
        { name: "The Yocto Project", icon: IconsHelper.Yocto }
      ]
    },
    {
      companyName: "UPMC Enterprises",
      jobDuties: [
        "Developed and enhanced the MyUPMC web, iOS, and Android healthcare applications, improving user experience and patient engagement, with over 1 million monthly active users.",
        "Developed custom Angular components in TypeScript for the MyUPMC patient portal, leveraging NGXS for efficient and scalable state management.",
        "Managed and processed data interactions with backend services via Java Spring Boot APIs.",
        "Integrated SwiftUI and Jetpack Compose to modernize application functionality.",
        "Collaborated with UX designers and product teams to define requirements and design intuitive interfaces."
      ],
      programmingLanguages: [
        { name: "C++", icon: IconsHelper.Cpp },
        { name: "Typescript", icon: IconsHelper.Typescript },
        { name: "HTML5", icon: IconsHelper.HTML5 },
        { name: "CSS3", icon: IconsHelper.CSS3 }
      ]
    }
  ];

  useEffect(() => {
    const sideMenu = document.getElementById('aboutMeContainer')
    if (sideMenu) {
      if (darkMode) {
        sideMenu.classList.add('dark-theme');
      } else {
        sideMenu.classList.remove('dark-theme');
      }
    }
  }, [darkMode]);

  return (
    <div id="aboutMeContainer" className="font-mono bg-primary">
      <div className="w-full h-20 bg-cardBg border-b-2 border-b-secondary flex shadow-lg">
        <button className="absolute flex top-0 left-0 items-center text-secondary hover:text-textMain w-50 h-20 pl-4" onClick={() => window.history.back()}>
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          <span>Back</span>
        </button>
        <div className="flex w-full justify-center">
          <div className="flex items-center w-1/2 justify-evenly">
            <button className="h-full flex-1 flex items-center justify-center text-secondary hover:text-textMain py-auto" onClick={() => window.history.back()}>
              <span>Work Experience</span>
            </button>
            <button className="h-full flex-1 flex items-center justify-center text-secondary hover:text-textMain py-auto" onClick={() => window.history.back()}>
              <span>Portfolio</span>
            </button>
            <button className="h-full flex-1 flex items-center justify-center text-secondary hover:text-textMain py-auto" onClick={() => window.history.back()}>
              <span>Education</span>
            </button>
            <button className="h-full flex-1 flex items-center justify-center text-secondary hover:text-textMain py-auto" onClick={() => window.history.back()}>
              <span>Contact Me</span>
            </button>
          </div>
        </div>
        <label
          className="absolute right-0 top-0 flex items-center justify-center text-secondary hover:text-textMain cursor-pointer select-none h-20 pr-4"
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
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600" />
              <span className="ms-3 text-sm font-mono">
                {darkMode ? "Dark Mode" : "Light Mode"}
              </span>
            </div>
          </div>
        </label>
      </div>
      <div className="min-h-screen text-white py-5">
        { }
        <section className="flex flex-col md:flex-row items-center gap-8 p-6 max-w-7xl mx-auto my-20">
          <div className="w-full md:w-1/2 ">
            <img src="Adam.png" alt="Adam Mitro" className="rounded-full shadow-lg w-full h-auto object-cover border-4 border-secondary" />
          </div>

          <div className="bg-cardBg p-6 rounded-lg border border-secondary shadow-lg w-fit">
            <h2 className="text-secondary text-3xl font-bold mb-4 font-mono">About Me</h2>
            <p className="text-lg text-textMain font-mono">
              Hi, I'm Adam Mitro. I'm a full-stack engineer passionate about building projects that keep me on the cutting edge of programming languages and technologies.
              I thrive on exploring new tools and frameworks to continuously sharpen my skills and stay ahead in the ever-evolving world of software development.
            </p>
          </div>
        </section>
        {/* Work Experience Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 py-6 w-full mx-auto mb-20">
          <div className="bg-cardBg p-6 border-y border-secondary shadow-lg overflow-hidden w-full">
            <h2 className="text-secondary text-3xl font-bold mb-5 font-mono">Work Experience</h2>
            {jobExperiences.map((experience, index) => (
              <WorkExperienceItem
                key={index}
                companyName={experience.companyName}
                jobDuties={experience.jobDuties}
                programmingLanguages={experience.programmingLanguages}
              />
            ))}
          </div>
        </section>
        {/* Portfolio Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 py-6 w-full mx-auto mb-20">
          <div className="bg-cardBg p-6 border-y border-secondary shadow-lg w-full">
            <h2 className="text-secondary text-3xl font-bold mb-4 font-mono">Portfolio</h2>
            <p className="text-lg text-textMain font-mono">
              Hi, I'm Adam Mitro. I'm a full-stack engineer passionate about building projects that keep me on the cutting edge of programming languages and technologies.
              I thrive on exploring new tools and frameworks to continuously sharpen my skills and stay ahead in the ever-evolving world of software development.
            </p>
          </div>
        </section>
        {/* Contact Me Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 py-6 w-full mx-auto mb-20">
          <div className="bg-cardBg p-6  border-y border-secondary w-full">
            <h2 className="text-secondary text-3xl font-bold mb-4 font-mono">Contact Me</h2>
            <p className="text-lg text-textMain font-mono">
              Email - <a href="mailto:adam.mitro@gmail.com" className="text-secondary hover:text-white">adam.mitro@gmail.com</a>
            </p>
            <p className="text-lg text-textMain font-mono">
              Github - <a href="https://www.github.com/Arm412" className="text-secondary hover:text-white">Arm412</a>
            </p>
            <p className="text-lg text-textMain font-mono">
              LinkedIn - <a href="https://www.linkedin.com/in/adam-mitro-3b1a6a142/" className="text-secondary hover:text-white">Adam Mitro</a>
            </p>
          </div>
        </section>
        <div className="flex flex-col md:flex-column items-center gap-8 p-6 max-w-7xl mx-auto mb-20">
          <h2 className="text-secondary text-3xl font-bold mb-4 font-mono">Credit</h2>
          <p>Icons by Icons8 —
            <a href="https://icons8.com" className="text-secondary hover:text-white"> https://icons8.com </a></p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
