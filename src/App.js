import React, { useState, useEffect } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState({});
  const [activeSection, setActiveSection] = useState('skills');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading animation
    setTimeout(() => setIsLoading(false), 2000);

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Update this data with your resume information
  const portfolioData = {
    name: "HARIKRISHNA D",
    title: "DATA ANALYST | FULL STACK DEVELOPER",
    email: "hariff006@gmail.com",
    phone: "+91 9384724680",
    linkedin: "linkedin.com/in/yourprofile",
    github: "github.com/harikris103",
    
    skillCategories: [
      {
        category: "Data Analytics",
        skills: ["Python", "PowerBI", "SQL", "Data annotation", "Machine Learning", "Statistics"]
      },
      {
        category: "Frontend",
        skills: ["JavaScript", "React", "HTML/CSS", "TypeScript", "Responsive Design"]
      },
      {
        category: "Backend",
        skills: ["Node.js", "FAST API", "MongoDB", "REST APIs", "Database Design"]
      },
      {
        category: "DevOps & Tools",
        skills: ["Git", "AWS", "Docker", "Linux", "CI/CD"]
      }
    ],
    
    experience: [
      {
        title: "Senior Developer",
        company: "Tech Company Inc.",
        period: "2022 - Present",
        description: "Led development of web applications using React and Node.js. Improved system performance by 40% and mentored junior developers."
      },
      {
        title: "Software Developer",
        company: "StartUp Solutions",
        period: "2020 - 2022",
        description: "Developed full-stack applications and collaborated with cross-functional teams to deliver high-quality software solutions."
      }
    ],
    
    projects: [
      {
        title: "E-Commerce Platform",
        description: "Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
        technologies: "React, Node.js, MongoDB, Stripe API"
      },
      {
        title: "Task Management App",
        description: "Created a collaborative task management application with real-time updates using Socket.io and React.",
        technologies: "React, Socket.io, Express, PostgreSQL"
      },
      {
        title: "Hand gesture Recognition System",
        description: "Developed a hand gesture recognition system using Python and OpenCV that can identify various hand gestures in real-time.",
        technologies: "python,OpenCV,MediaPipe"
      }
    ],
    
    education: {
      degree: "Bachelor of Computer Science(Data science and analytics)",
      university: "kamaraj university",
      year: "2023-2026"
    }
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader">
          <div className="loader-text">Loading...guys</div>
          <div className="loader-bar"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="portfolio">
        <nav className="nav-menu">
          <div className="nav-content">
            <div className="nav-left">
              <div className="nav-brand">HARIKRISHNA D</div>
            </div>
            <div className="nav-links">
              <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
              <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
              <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
              <a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a>
              <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}> Contact</a>
            </div>
          </div>
        </nav>
        <header className="header">
          <div className="header-content">
            <div className="hero-left">
              <h1 className="hero-name typing-animation">HARIKRISHNA D</h1>
              <p className="title fade-in-up">{portfolioData.title}</p>
              <p className="header-summary fade-in-up">
                Passionate AI & Data Science professional with expertise in machine learning, 
                deep learning, and data analytics. Building intelligent solutions that drive 
                business value through advanced algorithms and data-driven insights.
              </p>
            </div>
            <div className="hero-right">
              <div className="profile-img floating">
                <img src="/me.jpg" alt="Profile" />
              </div>
            </div>
          </div>
        </header>

        <div className="content">

          <section id="skills" className={`section skills-section ${isVisible.skills ? 'visible' : ''}`}>
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-categories">
              {portfolioData.skillCategories.map((category, index) => (
                <div key={index} className="skill-category">
                  <h3 className="category-title">{category.category}</h3>
                  <div className="skills-pills">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="experience" className={`section ${isVisible.experience ? 'visible' : ''}`}>
            <h2 className="section-title">Experience</h2>
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <h3 className="item-title">{exp.title}</h3>
                <p className="item-subtitle">{exp.company} | {exp.period}</p>
                <p className="item-description">{exp.description}</p>
              </div>
            ))}
          </section>

          <section id="projects" className={`section ${isVisible.projects ? 'visible' : ''}`}>
            <h2 className="section-title">Projects</h2>
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="project-item">
                <h3 className="item-title">{project.title}</h3>
                <p className="item-subtitle">Technologies: {project.technologies}</p>
                <p className="item-description">{project.description}</p>
              </div>
            ))}
          </section>

          <section id="education" className={`section ${isVisible.education ? 'visible' : ''}`}>
            <h2 className="section-title">Education</h2>
            <div className="experience-item">
              <h3 className="item-title">{portfolioData.education.degree}</h3>
              <p className="item-subtitle">{portfolioData.education.university} | {portfolioData.education.year}</p>
            </div>
          </section>

          <section id="contact" className={`section ${isVisible.contact ? 'visible' : ''}`}>
            <h2 className="section-title">Contact</h2>
            <div className="contact-info">
              <a href={`mailto:${portfolioData.email}`} className="contact-item">
                📧 {portfolioData.email}
              </a>
              <a href={`tel:${portfolioData.phone}`} className="contact-item">
                📱 {portfolioData.phone}
              </a>
              <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-item">
                💼 LinkedIn
              </a>
              <a href={`https://${portfolioData.github}`} target="_blank" rel="noopener noreferrer" className="contact-item">
                🔗 GitHub
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;