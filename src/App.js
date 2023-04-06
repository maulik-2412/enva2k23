import React,{useState} from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
function App() {
  const [loading, setloading] = useState(true);
  // if (loading) {
  //   const preloader = document.querySelector(".preloader");
  //   setTimeout(() => {
  //     preloader.style.display = "none";
  //     setloading(false);
  //   }, 2000);
  // }
  return (
    <div className="App">
     {loading && 
       <Router>
       <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
       </Router>  }
    </div>
  );
}

export default App;
