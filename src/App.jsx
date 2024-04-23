import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from "react";

export default function App() {
  const [ lenguage, setLenguage ] = useState('es') 
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="conatiner mx-auto px-8">
        <Navbar setLenguage={setLenguage} lenguage={lenguage}/>
        <Hero lenguage={lenguage}/>
        <About lenguage={lenguage}/>
        <Technologies/>
        <Experience lenguage={lenguage}/>
        <Projects lenguage={lenguage}/>
        <Contact/>
      </div>
    </div>
  )
}
