import { Contact, Star } from "lucide-react";
import { ThemeToggle } from "../component/ThemeToggle";
import { StarBackground } from "../component/StarBackground";
import { Navbar } from "../component/Navbar";
import { HeroSection } from "../component/HeroSection";
import { AboutMe } from "../component/AboutMe";
import { Skills } from "../component/Skills";
import { ProjectsSection } from "../component/ProjectsSection";
import { ContactSection } from "../component/ContactSection";
import { Footer } from "../component/Footer";
export const Home = () => {
  return (
    <div id="home" className="home-container">

        {/*Theme Toggle Button*/}
      <ThemeToggle/>

        {/* Background Effects */}
      <StarBackground />

        {/*Navbar*/}
      <Navbar/>

        {/* Main Content */}
        <main>
              <HeroSection/>
              <AboutMe/>
              <Skills/>
              <ProjectsSection/>
              <ContactSection/>
        </main>
 

        {/* Footer */}
        <Footer/>

    </div>
  )
  
};