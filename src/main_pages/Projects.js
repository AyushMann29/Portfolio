import React, { useState } from 'react';
import Cloud from './Cloud';
import ProjectsBase from './ProjectsBase';
import './Projects.css';

function Projects() {
  const projects = [
    { 
      heading: "🕹️ 90s Style Portfolio", 
      content: (
        <>
          🔗 <a
            href="https://portfolio-90s-style.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#396B89", textDecoration: "underline" }}
          >
            Visit the site
          </a>
        </>
      )  
    },
    { 
      heading: "🧠 Health Menta", 
      content: (
        <>
          🔗 <a
            href="https://health-hackathon1.vercel.app/Health-Menta"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#396B89", textDecoration: "underline" }}
          >
            Visit the site
          </a>
        </>
      ) 
    },
    { 
      heading: "🍕 Domino's Reimagined", 
      content: (
        <>
          🔗 <a
            href="https://beyond-infinity-reimagine-round1.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#396B89", textDecoration: "underline" }}
          >
            Visit the site
          </a>
        </>
      )
    },
    { 
      heading: "☕ Eat n Fun", 
      content: (
        <>
          🔗 <a
            href="https://eat-n-fun.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#396B89", textDecoration: "underline" }}
          >
            Visit the site
          </a>
        </>
      )
    },
  ];

  const [shiftRight, setShiftRight] = useState(false);
  const [shiftLeft, setShiftLeft] = useState(false);

  const handleViewMoreClickRight = () => {
    setShiftLeft(!shiftLeft);
  };

  const handleViewMoreClickLeft = () => {
    setShiftRight(!shiftRight);
  };

  return (
    <div className="projects">
      <ProjectsBase />
      <div className={`leftSideProjects ${shiftLeft ? 'shift' : ''}`}>
        <div className="cloud-container">
          <div className="cloud1">
            <Cloud {...projects[0]} />
          </div>
          <div className="cloud4">
            <Cloud {...projects[1]} />
          </div>
        </div>
        <button onClick={handleViewMoreClickLeft} className="leftViewMoreButton">
          {shiftRight ? 'Hide' : 'View More'}
        </button>
      </div>
      <div className={`rightSideProjects ${shiftRight ? 'shift' : ''}`}>
        <div className="cloud-container">
          <div className="cloud1">
            <Cloud {...projects[2]} />
          </div>
          <div className="cloud4">
            <Cloud {...projects[3]} />
          </div>
        </div>
        <button onClick={handleViewMoreClickRight} className="rightViewMoreButton">
          {shiftLeft ? 'Hide' : 'View More'}
        </button>
      </div>
    </div>
  );
}

export default Projects;