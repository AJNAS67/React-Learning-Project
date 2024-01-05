import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

const OwlCarouselFunc = () => {
  // Custom options for the OwlCarousel
  const customOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 20,
    navSpeed: 700,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 2,
      },
      740: {
        items: 2,
      },
      940: {
        items: 2,
      },
    },
    nav: true,
  };

  // const customOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: false,
  //   dots: false,
  //   margin: 20,
  //   navSpeed: 700,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 2,
  //     },
  //     1000: {
  //       items: 3,
  //     },
  //   },
  //   nav: true,
  // };

  return (
    <OwlCarousel className="owl-theme" {...customOptions} style={{ opacity: 0.5, cursor: 'not-allowed' }}>
      <div className="item">
        <div id="dailyNote">
          <div className="note-pad color-4">
            <span className="date">12.12.2022</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque volutpat sem justo, ac lacinia leo dignissim vel.
              Sed rutrum ultricies erat, eu suscipit ligula tincidunt vitae.
              elit id laoreet efficitur.
            </p>
          </div>
        </div>
      </div>
      <div className="item">
        <div id="dailyNote">
          <div className="note-pad color-2">
            <span className="date">12.12.2022</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque volutpat sem justo, ac lacinia leo dignissim vel.
              Sed rutrum ultricies erat, eu suscipit ligula tincidunt vitae.
              elit id laoreet efficitur.
            </p>
          </div>
        </div>
      </div>
      <div className="item">
        <div id="dailyNote">
          <div className="note-pad color-3">
            <span className="date">12.12.2022</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque volutpat sem justo, ac lacinia leo dignissim vel.
              Sed rutrum ultricies erat, eu suscipit ligula tincidunt vitae.
              elit id laoreet efficitur.
            </p>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default OwlCarouselFunc;
