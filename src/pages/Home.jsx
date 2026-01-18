import { Star } from "lucide-react";
import { ThemeToggle } from "../component/ThemeToggle";
import { StarBackground } from "../component/StarBackground";
import { Navbar } from "../component/Navbar";
import { HeroSection } from "../component/HeroSection";
import { AboutMe } from "../component/AboutMe";
import { Skills } from "../component/Skills";
export const Home = () => {
  return (
    <div className="home-container">

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
        </main>
 

        {/* Footer */}

    </div>
  )
  
};