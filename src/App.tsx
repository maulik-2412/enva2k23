import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Galleries from "./pages/Galleries";
import About from "./pages/About";
import Events from "./pages/Events";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import Team from "./pages/Teams";
import Preloader from "./pages/Preloader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Particle from "./components/Particle";
import { getCurrentUser, login } from "./api/auth";
import Footer from "./pages/Footer";
function App() {
  const [loading, setloading] = useState(true);
  const getuser = () => {
    getCurrentUser()
      .then((res) => {
        setloading(false);
      })
      .catch(async (err) => {
        await login();
        console.error(err);
        setloading(false);
      });
  };
  useEffect(() => {
    getuser();
    // if (loading) {
    //   setTimeout(() => {
    //     setloading(false);
    //   }, 1000);
    // }
  }, []);
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
          <Galleries />
          <Sponsors />
          {/* <Contact /> */}
          <Team />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
