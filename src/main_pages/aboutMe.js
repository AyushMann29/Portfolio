import React, { useEffect, useState } from "react";
import "./aboutMe.css";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaServer, FaDatabase, FaMobileAlt, FaLeaf, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function AboutMe() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "React", icon: <FaCode />, level: 90 },
    { name: "JavaScript", icon: <FaLaptopCode />, level: 85 },
    { name: "Node.js", icon: <FaServer />, level: 80 },
    { name: "MongoDB", icon: <FaDatabase />, level: 75 },
    { name: "React Native", icon: <FaMobileAlt />, level: 70 }
  ];

  const cloudVariants = {
    animate: {
      x: [0, 10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  // Bird animation for the top of trees
  const birdFly = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: [0, 1, 0],
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 4,
        repeatDelay: 10,
        delay: 2
      }
    }
  };

  return (
    <div className="aboutMeSection">
      {/* Animated clouds */}
      <motion.div 
        className="cloud cloud1"
        variants={cloudVariants}
        animate="animate"
        style={{ x: scrollY * 0.2 }}
      />
      <motion.div 
        className="cloud cloud2" 
        variants={cloudVariants}
        animate="animate"
        style={{ x: scrollY * -0.15 }}
      />
      <motion.div 
        className="cloud cloud3" 
        variants={cloudVariants}
        animate="animate"
        style={{ x: scrollY * 0.1 }}
      />
      
      {/* Sun */}
      <div className="sun">
        <div className="sunRays" />
      </div>
      
      {/* Content container */}
      <motion.div 
        className="aboutContentContainer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1 
          className="aboutTitle"
          variants={fadeInUp}
        >
          About Me
        </motion.h1>
        
        <motion.div 
          className="bioContainer"
          variants={fadeInUp}
        >
          <div className="avatarContainer">
            <div className="avatar">
              {/* Replace with your actual image */}
              <img src="https://via.placeholder.com/150" alt="Ayush Mann" className="avatarImg" />
            </div>
            <div className="avatarBackground" />
          </div>
          
          <div className="bioText">
            <h2>Hi, I'm Ayush Mann</h2>
            <p>
              I'm a passionate Computer Science Engineering student at Vellore Institute of Technology, 
              focused on creating engaging and innovative web experiences. My journey in programming 
              started with curiosity and has evolved into a deep love for building digital solutions.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source,
              or working on my YouTube channel sharing technical insights with the community.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="skillsSection"
          variants={fadeInUp}
        >
          <h2>My Skills</h2>
          <div className="skillsContainer">
            {skills.map((skill, index) => (
              <motion.div 
                className="skillTree"
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: { 
                    delay: index * 0.2,
                    duration: 0.5
                  }
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="skillBird"
                  variants={birdFly}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="birdShape" />
                </motion.div>
                <div className="skillLeafCluster" style={{ height: `${skill.level * 0.8}px` }}>
                  <div className="leafBunch leafBunch1" />
                  <div className="leafBunch leafBunch2" />
                  <div className="leafBunch leafBunch3" />
                  <div className="skillIcon">{skill.icon}</div>
                </div>
                <div className="skillTrunk">
                  <div className="trunkDetail trunkDetail1" />
                  <div className="trunkDetail trunkDetail2" />
                </div>
                <div className="skillRoots">
                  <div className="root root1" />
                  <div className="root root2" />
                  <div className="root root3" />
                </div>
                <div className="skillName">{skill.name}</div>
                <div className="skillLevel">{skill.level}%</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="educationSection"
          variants={fadeInUp}
        >
          <h2>Education Journey</h2>
          <div className="timelinePath">
            <div className="timelineDot">
              <div className="timelineLeaf"><FaLeaf /></div>
            </div>
            <div className="timelineCard right">
              <h3>Vellore Institute of Technology</h3>
              <p className="timelineDate">2021 - 2027</p>
              <p>Bachelor of Technology (B.Tech.) in Computer Science Engineering</p>
              <p>CGPA: 8.81/10</p>
            </div>
            
            <div className="timelineDot">
              <div className="timelineLeaf"><FaLeaf /></div>
            </div>
            <div className="timelineCard left">
              <h3>Government Model Sansriti Senior Secondary School</h3>
              <p className="timelineDate">2021 - 2023</p>
              <p>XIIth Board (CBSE)</p>
              <p>Percentage: 88.8%</p>
            </div>
            
            <div className="timelineDot">
              <div className="timelineLeaf"><FaLeaf /></div>
            </div>
            <div className="timelineCard right">
              <h3>Vishwa Bharati Public School</h3>
              <p className="timelineDate">2019 - 2021</p>
              <p>Xth Board (CBSE)</p>
              <p>Percentage: 87.4%</p>
            </div>
          </div>
        </motion.div>


      </motion.div>
      
      {/* Integrated Contact Section */}
      <div className="contactIntegration">
        <div className="contactHills" />
        
        <motion.h2 
          className="contactTitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>
        
        <div className="treeRow">
          <motion.div 
            className="contactTree"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="contactTrunk">
              <div className="contactBranch branch1" />
              <div className="contactBranch branch2" />
            </div>
            <a href="https://github.com/ayushmann29" target="_blank" rel="noopener noreferrer" className="contactLeaves">
              <FaGithub className="contactIcon" />
            </a>
          </motion.div>
          
          <motion.div 
            className="contactTree"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="contactTrunk">
              <div className="contactBranch branch1" />
              <div className="contactBranch branch2" />
            </div>
            <a href="https://linkedin.com/in/ayush-mann29" target="_blank" rel="noopener noreferrer" className="contactLeaves">
              <FaLinkedin className="contactIcon" />
            </a>
          </motion.div>
          
          <motion.div 
            className="contactTree"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="contactTrunk">
              <div className="contactBranch branch1" />
              <div className="contactBranch branch2" />
            </div>
            <a href="mailto:mannayush60@gmail.com" target="_blank" rel="noopener noreferrer" className="contactLeaves">
              <FaEnvelope className="contactIcon" />
            </a>
          </motion.div>
        </div>
        
        <motion.p 
          className="contactMessage"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          🌿 Let's connect and grow together!
        </motion.p>
      </div>
      
      {/* Ground */}
      <div className="aboutGround">
        <div className="grass" />
        <motion.div 
          className="aboutTag"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Growing through code 🌱
        </motion.div>
      </div>
      
      {/* Parallax mountains */}
      <div 
        className="mountains mountainBack" 
        style={{ transform: `translateY(${scrollY * 0.1}px)` }} 
      />
      <div 
        className="mountains mountainMiddle" 
        style={{ transform: `translateY(${scrollY * 0.15}px)` }} 
      />
      <div 
        className="mountains mountainFront" 
        style={{ transform: `translateY(${scrollY * 0.2}px)` }} 
      />
    </div>
  );
}

export default AboutMe;