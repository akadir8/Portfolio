import React from "react";
//components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-no-repeat bg-cover overflow-hidden">
      <Header/>
      <Banner/>
      <Navbar/>
      <About/>
      <Contact/>

     
      <Footer />
    </div>
  );
}

export default App;
