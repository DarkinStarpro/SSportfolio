import './App.css'
import About from './assets/about'
import Contact from './assets/contact'
import Navbar from './assets/navbar'
import Project from './assets/project'
import Skill from './assets/skill'
import Footer from './assets/footer'


function App() {
  return (
    <>
     <div id="about" className="about-section">
     <Navbar/>
        <About />
      </div>
      <div id="skill" className="skill-section">
        <Skill />
      </div>
      <div id="project" className="project-section">
        <Project />
      </div>
      <div id="contact" className="contact-section">
        <Contact />
      </div>
      <Footer/>

    </>
  )
}
export default App