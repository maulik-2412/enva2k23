/*import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#1D2D50",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          number: {
            value: 10,
            density: {
              enable: true,
              value_area: 1514.7408198734,
            },
          },
          color: {
            value: "#31E1F7",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000",
            },
            polygon: {
              nb_sides: 6,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value:0.005,
            random: true,
            anim: {
              enable: true,
              speed: 4,
              size_min: 15,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 200,
            color: "#ffffff",
            opacity: 1,
            width: 2,
          },
          move: {
            enable: true,
            speed: 20.728032271951786,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "repulse",
            },
            onclick: {
              enable: false,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};
export default Particle;
*/
import React from 'react';
import './Particle.css';

class Particle extends React.Component{
  componentDidMount(){
    var bubbles = document.querySelector('.bubbles');


function bubblesf() {
  
  // Settings
  var min_bubble_count = 20, // Minimum number of bubbles
      max_bubble_count = 60, // Maximum number of bubbles
      min_bubble_size = 3, // Smallest possible bubble diameter (px)
      max_bubble_size = 12; // Maximum bubble blur amount (px)
  
  // Calculate a random number of bubbles based on our min/max
  var bubbleCount = min_bubble_count + Math.floor(Math.random() * (max_bubble_count + 1));
  var newbubbles = document.querySelectorAll('.bubble-container');
  // Create the bubbles
  for (var i = 0; i < bubbleCount; i++) {
    var bubbleContainer = document.createElement('div');
    bubbleContainer.className = 'bubble-container';
    
    var bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    bubbleContainer.appendChild(bubble);
    bubbles.appendChild(bubbleContainer);
  }
  

  
  // Now randomise the various bubble elements
  document.querySelectorAll('.bubble-container').forEach(function(thisBubble){
    
    // Randomise the bubble positions (0 - 100%)
    var pos_rand = Math.floor(Math.random() * 101);
    
    // Randomise their size
    var size_rand = min_bubble_size + Math.floor(Math.random() * (max_bubble_size + 1));
    
    // Randomise the time they start rising (0-15s)
    var delay_rand = Math.floor(Math.random() * 16);
    
    // Randomise their speed (3-8s)
    var speed_rand = 3 + Math.floor(Math.random() * 9);
    
    // Random blur
    var blur_rand = Math.floor(Math.random() * 3);
    
    // Cache the this selector
   

    
    // Apply the new styles
    thisBubble.style.left = pos_rand + '%';
    thisBubble.style.webkitAnimationDuration = speed_rand + 's';
    thisBubble.style.MozAnimationDuration = speed_rand + 's';
    thisBubble.style.msAnimationDuration = speed_rand + 's';
    thisBubble.style.animationDuration = speed_rand + 's';
    thisBubble.style.webkitAnimationDelay = delay_rand + 's';
    thisBubble.style.MozAnimationDelay = delay_rand + 's';
    thisBubble.style.msAnimationDelay = delay_rand + 's';
    thisBubble.style.animationDelay = delay_rand + 's';
    thisBubble.style.webkitFilter = 'blur(' + blur_rand  + 'px)';
    thisBubble.style.MozFilter = 'blur(' + blur_rand  + 'px)';
    thisBubble.style.msFilter = 'blur(' + blur_rand  + 'px)';
    thisBubble.style.filter = 'blur(' + blur_rand  + 'px)';

    thisBubble.querySelector('.bubble').style.width = size_rand + 'px';
    thisBubble.querySelector('.bubble').style.height = size_rand + 'px';

    
  });
    let bubbl = document.getElementsByClassName("bubble");

// Loop through all the bubbles and set their border color randomly
for (let i = 0; i < bubbl.length; i++) {
  bubbl[i].style.borderColor = getRandomColor(); // assuming getRandomColor() is a function that returns a random color code
}
}
function getRandomColor() {
  var colors = ['#66347F', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']; // array of color codes
  var colorIndex = Math.floor(Math.random() * colors.length); // generate random index
  var color = colors[colorIndex]; // get color code from array
  return color; // return random color
}




bubblesf();
  }
  render(){
    return(
      <div className="bubbles"></div>
    );
  }
}




export default Particle;