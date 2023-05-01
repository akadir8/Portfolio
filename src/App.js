import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App text-center">
      <Navbar/>
     <h1>My App</h1>
     <p>Welcome to my app!</p>
     <Footer/>
    </div>
  );
}

export default App;
