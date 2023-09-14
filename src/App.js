import React from "react";import { Header } from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ParticlesContainer from "./components/ParticlesContainer";
function App() {
  return (
    <div>
      <ParticlesContainer />
      <nav>
          <ul>
            <li>
              <AnchorLink href="#section1"><Header /></AnchorLink>
            </li>
            <li>
              <AnchorLink href="#section2"><Home /></AnchorLink>
            </li>
            <li>
              <AnchorLink href="#section3">Bölüm 3</AnchorLink>
            </li>
          </ul>
        </nav>
      <About />
    </div>
  );
}

export default App;
