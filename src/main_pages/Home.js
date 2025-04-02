import "./Home.css";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import webdevImg from "../assets/1.png";
import youtuberImg from "../assets/2.png";
import cloudImg from "../assets/3.png";
import Tilt from 'react-parallax-tilt';




function Home() {
  const [profession, setProfession] = React.useState("Web Developer");

  const handleButtonClick = (newProfession) => {
    setProfession(newProfession);
  };
  const professionImages = {
    "Web Developer": webdevImg,
    "YouTuber": youtuberImg,
    "Cloud Enthusiast": cloudImg,
  };
  
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="Home">
      {/* Left side */}
      <div className="leftSide">
        <div className="leftHeader">
          <motion.p
            id="Ayush"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Ayush
          </motion.p>
          
        </div>

        {["YouTuber","Web Developer",  "Cloud Enthusiast"].map((role) => (
          <motion.span
            key={role}
            id={role === "Web Developer" ? "webDev" : role === "Youtuber" ? "youtuber" : "gameDev"}
            className={profession === role ? "active" : ""}
            onClick={() => handleButtonClick(role)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {role}
            <span id="overlay"></span>
          </motion.span>
        ))}
      </div>
    

      {/* Right side */}
      <div className="rightSide">
        <div className="rightHeader">
          <motion.p
            id="Mann"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Mann
          </motion.p>
        </div>

        <AnimatePresence mode="wait">
  {profession && (
    <motion.div
      key={profession}
      className="professionContent"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
            <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        transitionSpeed={800}
        scale={1.05}
        gyroscope={true}
        className="tilt">

      <img
        src={professionImages[profession]}
        alt={profession}
        className="professionImage"
        />
      <div className="professionDisplay">{profession}</div>
</Tilt>
    </motion.div>
  )}
</AnimatePresence>

      </div>

      {/* Scroll prompt */}
      <motion.div
        className="scrollPrompt"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >

        <button onClick={handleSmoothScroll} 
          href="#projects" 
          className="scrollLink"
          aria-label="Scroll to projects section">
            Scroll to view Projects
        </button>
      </motion.div>
    </div>
  );
}

export default Home;
