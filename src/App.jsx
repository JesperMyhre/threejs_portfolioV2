import React from "react";
import "./App.css";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";

function App() {
  return (
    <main className="max-w-[2000px] w-full mx-auto relative px-4 sm:px-6 lg:px-8 2xl:px-16">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
