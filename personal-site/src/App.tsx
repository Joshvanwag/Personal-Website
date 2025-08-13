import { useState, useEffect } from 'react'
import backgroundImage from './assets/background.jpeg'
import './App.css'
import myImage from './assets/FAM.jpg'
import myImage2 from './assets/Josh.jpg'

function App() {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => {
      if (el.id) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Header Navigation */}
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="header-title">Josh VanWagenen</h1>
          </div>
          <nav className="header-nav">
            <button 
              className="nav-button" 
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
            <button 
              className="nav-button" 
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
            <button 
              className="nav-button" 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
            <a href="/Resume.pdf" download="Resume.pdf">
              <button className="nav-button primary">Resume</button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src={backgroundImage} alt="Background" className="hero-background-image" />
        </div>
        <div className="hero-content">
          <h1 
            id="hero-title"
            className={`hero-title fade-in ${visibleElements.has('hero-title') ? 'visible' : ''}`}
          >
            Welcome to my website
          </h1>
          <h2 
            id="hero-subtitle"
            className={`hero-subtitle fade-in ${visibleElements.has('hero-subtitle') ? 'visible' : ''}`}
          >
            Don't stay too long
          </h2>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <h2 
            id="about-title"
            className={`section-title fade-in ${visibleElements.has('about-title') ? 'visible' : ''}`}
          >
            About Me
          </h2>
          <div className="about-content">
            <div className="profile-image">
              <img src={myImage} alt="Profile" />
            </div>
            <p 
              id="about-desc-1"
              className={`about-description fade-in ${visibleElements.has('about-desc-1') ? 'visible' : ''}`}
            >
              <br />
              I am married to the love of my life, and we have a beautiful daughter.
              We are both from Utah and both went to Bingham High School. I love sports and have a golfing addiction. 

          
              
            </p>
            <p 
              id="about-desc-2"
              className={`about-description fade-in ${visibleElements.has('about-desc-2') ? 'visible' : ''}`}
            >
             I am a software engineer with a degree in Computer Science from Western Governors University.
              I have worked in many roles prior to graduation, including a director at a Day Support Center for adults with disabilities.
              Most recently, I was a Medical Sales Representative. I have always had a passion for software and have been coding on the side for years.
              I am currently working on a startup with some friends creating a CRM. I have experience in all of the following areas: Java, Python, C++,
              JavaScript, React, SQL, TypeScript, Spring Boot, Docker, AWS, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <h2 
            id="projects-title"
            className={`section-title fade-in ${visibleElements.has('projects-title') ? 'visible' : ''}`}
          >
            My Projects
          </h2>
          <div className="projects-content">
            <p 
              id="projects-desc"
              className={`projects-description fade-in ${visibleElements.has('projects-desc') ? 'visible' : ''}`}
            >
              Here are some of the projects I've worked on.
            </p>
            {/* Project cards will go here */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 
            id="contact-title"
            className={`section-title fade-in ${visibleElements.has('contact-title') ? 'visible' : ''}`}
          >
            Get In Touch
          </h2>
          <div className="profile-image">
            <img src={myImage2} alt="Profile" />
          </div>
          <div className="contact-content">
            <p 
              id="contact-desc"
              className={`contact-description fade-in ${visibleElements.has('contact-desc') ? 'visible' : ''}`}
            >
              <br />
              Give me a follow
              <br />
              <br />
                             <a href="https://www.linkedin.com/in/josh-van-wagenen-41799b34a/" target="_blank" rel="noopener noreferrer" className="social-link">
                 <i className="fab fa-linkedin"></i>
               </a>
              
               <a href="https://github.com/joshvanwag" target="_blank" rel="noopener noreferrer" className="social-link">
                 <i className="fab fa-github"></i>
               </a>
               
               <a href="https://www.instagram.com/josh_vanwagenen/" target="_blank" rel="noopener noreferrer" className="social-link">
                 <i className="fab fa-instagram"></i>
               </a>

            </p>
            {/* Contact form or info will go here */}
          </div>
        </div>
      </section>
    </>
  )
}

export default App
