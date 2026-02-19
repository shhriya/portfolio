import './App.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/sections.css';
import './styles/typography.css';

import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx'; 
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Education from './sections/Education.jsx';
import Certifications from './sections/Certifications.jsx';
import Extracurricular from './sections/Extracurricular.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Extracurricular />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
