import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ProjectsPage } from "./components/ProjectsPage";
import { Communication } from "./components/Communication";

function App() {
  return (
    <div className="text-center">
      <Navbar />
      <div>
        <HomePage/>
        <AboutPage/>
        <ProjectsPage/>
        <Communication/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
