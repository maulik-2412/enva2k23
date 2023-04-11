import React,{useEffect, useState} from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Events from './pages/Events';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Preloader from './pages/Preloader';
import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom';
function App() {
  const [loading, setloading] = useState(true);
  // if (loading) {
  //   const preloader = document.querySelector(".preloader");
  //   setTimeout(() => {
  //     preloader.style.display = "none";
  //     setloading(false);
  //   }, 2000);
  // }
   useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setloading(false);
      }, 7000);
    }
  }, [loading]);
  return (
    <div className="App">
     {loading ? (<Preloader/>) : (
       <Router>
       <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/sponsors" element={<Sponsors/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/team" element={<Team/>}/>
        </Routes>
       </Router>  )}
    </div>
  );
}

export default App;
