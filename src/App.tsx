import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Events from "./pages/Events";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Preloader from "./pages/Preloader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Particle from "./components/Particle";
function App() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setloading(false);
      }, 1000);
    }
  }, [loading]);
  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Particle />
          <Header />
          <Home />
          <About />
          <Events />
          <Gallery />
          <Sponsors />
          <Contact />
          <Team />
        </>
      )}
    </div>
  );
}

export default App;
