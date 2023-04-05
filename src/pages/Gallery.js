import React from "react";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
const Gallery = () => {
  var TrandingSlider = new Swiper(".tranding-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  return (
    <div>
     <section id="tranding">
      <div className="container">
        <h3 className="text-center section-subheading">- popular Delivery -</h3>
        <h1 className="text-center section-heading">Tranding food</h1>
      </div>
      <div className="container">
        <div className="swiper tranding-slider">
          <div className="swiper-wrapper">
           
            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img src="https://cdn.statusqueen.com/desktopwallpaper/thumbnail/desktop_wallpaper__10-559.jpg" alt="messi"/>
              </div>
              <div className="tranding-slide-content">
            
                <div className="tranding-slide-content-bottom">
                  <h2 className="food-name">
                enva 
                  </h2>

                </div>
              </div>
            </div>
        

            <div className="swiper-slide tranding-slide">
                <div className="tranding-slide-img">
                  <img src="https://cdn.statusqueen.com/desktopwallpaper/thumbnail/desktop_wallpaper__10-559.jpg" alt="messi"/>
                </div>
                <div className="tranding-slide-content">
              
                  <div className="tranding-slide-content-bottom">
                    <h2 className="food-name">
                  enva 
                    </h2>
  
                  </div>
                </div>
              </div>

              <div className="swiper-slide tranding-slide">
                <div className="tranding-slide-img">
                  <img src="https://cdn.statusqueen.com/desktopwallpaper/thumbnail/desktop_wallpaper__10-559.jpg" alt="messi"/>
                </div>
                <div className="tranding-slide-content">
              
                  <div className="tranding-slide-content-bottom">
                    <h2 className="food-name">
                  enva 
                    </h2>
  
                  </div>
                </div>
              </div>

              <div className="swiper-slide tranding-slide">
                <div className="tranding-slide-img">
                  <img src="https://cdn.statusqueen.com/desktopwallpaper/thumbnail/desktop_wallpaper__10-559.jpg" alt="messi"/>
                </div>
                <div className="tranding-slide-content">
              
                  <div className="tranding-slide-content-bottom">
                    <h2 className="food-name">
                  enva 
                    </h2>
  
                  </div>
                </div>
              </div>

              <div className="swiper-slide tranding-slide">
                <div className="tranding-slide-img">
                  <img src="https://cdn.statusqueen.com/desktopwallpaper/thumbnail/desktop_wallpaper__10-559.jpg" alt="messi"/>
                </div>
                <div className="tranding-slide-content">
              
                  <div className="tranding-slide-content-bottom">
                    <h2 className="food-name">
                  enva 
                    </h2>
  
                  </div>
                </div>
              </div>

              <div className="swiper-slide tranding-slide">
                <div className="tranding-slide-img">
                  <img src="https://cdn.statusqueen.com/desktopwallpaper/thumbnail/desktop_wallpaper__10-559.jpg" alt="messi"/>
                </div>
                <div className="tranding-slide-content">
              
                  <div className="tranding-slide-content-bottom">
                    <h2 className="food-name">
                  enva 
                    </h2>
  
                  </div>
                </div>
              </div>

              <div className="swiper-slide tranding-slide">
                <div className="tranding-slide-img">
                  <img src="https://cdn.statusqueen.com/desktopwallpaper/thumbnail/desktop_wallpaper__10-559.jpg" alt="messi"/>
                </div>
                <div className="tranding-slide-content">
              
                  <div className="tranding-slide-content-bottom">
                    <h2 className="food-name">
                  enva 
                    </h2>
  
                  </div>
                </div>
              </div>

              <div className="swiper-slide tranding-slide">
                <div className="tranding-slide-img">
                  <img src="https://cdn.statusqueen.com/desktopwallpaper/thumbnail/desktop_wallpaper__10-559.jpg" alt="messi"/>
                </div>
                <div className="tranding-slide-content">
              
                  <div className="tranding-slide-content-bottom">
                    <h2 className="food-name">
                  enva 
                    </h2>
  
                  </div>
                </div>
              </div>
           
          </div>

          <div className="tranding-slider-control">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
};

export default Gallery;
