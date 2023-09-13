import React from "react";
import { Header } from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import ParticlesContainer from "./components/ParticlesContainer";
function App() {
  return (
    <div>
      <ParticlesContainer />
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
