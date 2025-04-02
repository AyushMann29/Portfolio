import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import Home from './main_pages/Home';
import Projects from './main_pages/Projects';
import AboutMe from './main_pages/aboutMe';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isScrollingToSection, setIsScrollingToSection] = useState(false);
  const [hasEnteredAboutMe, setHasEnteredAboutMe] = useState(false);
  const lastScrollPosition = useRef(0);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Don't run the snap logic if we're currently in a programmatic scroll
      if (isScrollingToSection) return;
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate which section is closest to being in view
      const homeSection = document.getElementById('home');
      const projectsSection = document.getElementById('projects');
      const aboutSection = document.getElementById('aboutMe');
      
      // Get the positions of each section
      const homeSectionTop = homeSection.offsetTop;
      const projectsSectionTop = projectsSection.offsetTop;
      const aboutSectionTop = aboutSection.offsetTop;
      
      // Determine current section for tracking purposes
      if (scrollPosition < projectsSectionTop - windowHeight/3) {
        setCurrentSection('home');
      } else if (scrollPosition < aboutSectionTop - windowHeight/3) {
        setCurrentSection('projects');
      } else {
        if (currentSection !== 'aboutMe') {
          setHasEnteredAboutMe(true);
        }
        setCurrentSection('aboutMe');
      }
      
      // Check if we're scrolling into the AboutMe section for the first time
      const isEnteringAbout = 
        scrollPosition >= aboutSectionTop - windowHeight/2 && 
        !hasEnteredAboutMe;
      
      // If we're already in the AboutMe section and have scrolled past its top,
      // don't try to snap anymore
      if (hasEnteredAboutMe && scrollPosition > aboutSectionTop) {
        lastScrollPosition.current = scrollPosition;
        return;
      }
      
      // Only do the snap scrolling for Home and Projects, or when first entering AboutMe
      let targetPosition;
      
      if (scrollPosition < projectsSectionTop - windowHeight/3) {
        targetPosition = homeSectionTop;
      } else if (scrollPosition < aboutSectionTop - windowHeight/3) {
        targetPosition = projectsSectionTop;
      } else if (isEnteringAbout) {
        targetPosition = aboutSectionTop;
      } else {
        lastScrollPosition.current = scrollPosition;
        return; // Don't snap if already in AboutMe section
      }
      
      // Only perform scroll if we're not already at the target
      if (Math.abs(scrollPosition - targetPosition) > 5) {
        // Set flag to prevent scroll event loop
        setIsScrollingToSection(true);
        
        // Scroll to target section
        window.scrollTo({ 
          top: targetPosition, 
          behavior: 'smooth' 
        });
        
        // Reset flag after animation completes
        setTimeout(() => {
          setIsScrollingToSection(false);
          lastScrollPosition.current = targetPosition;
        }, 1000); // Adjust timeout to match scroll animation duration
      }
    };
    
    // Add a debounce to prevent too many scroll events
    let scrollTimeout;
    const scrollListener = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 50);
    };
    
    window.addEventListener('scroll', scrollListener);
    
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [currentSection, isScrollingToSection, hasEnteredAboutMe]);

  return (
    <div className="App">
      <div id="home" className="snap-section">
        <Home />
      </div>
      <div id="projects" className="snap-section">
        <Projects />
      </div>
      <div id="aboutMe" className="scrollable-section">
        <AboutMe />
      </div>
    </div>
  );
}

export default App;