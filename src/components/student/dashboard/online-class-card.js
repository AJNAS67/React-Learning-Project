import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import axios from "axios";
import { useEffect } from "react";
function OnlineClassCard() {
  const postUrl = "/web/dataset/call_kw";
  const customOptions2 = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
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
        items: 3,
      },
      600: {
        items: 3,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  useEffect(() => {
    const getPeople = async () => {
      let input = {
        params: {
          model: "ss.student",
          method: "get_portal_fees",
          args: [2909],
          kwargs: { offset: 0, limit: 5 },
        },
      };
      await axios.post(`${postUrl}`, input).then((response) => {
        console.log(response, "response");
      });
    };
    getPeople();
  }, []);
  return (
    <OwlCarousel
      className="owl-theme"
      {...customOptions2}
      style={{ cursor: "not-allowed" }}
    >
      <div>
        <div id="class">
          <div class="subject-card color-4">
            <div class="img">
              <img src="images/dashboard/subject-thumb-language.svg"></img>
            </div>
            <div class="content-style-1">
              <h5 class="heading-5-medium">Language</h5>
              <label>11:00 AM to 12:00 PM</label>
              <a
                class="btn-ss"
                onClick={() => {
                  axios
                    .get("https://jsonplaceholder.typicode.com/posts")
                    .then((res) => {
                      console.log(res);
                    });
                }}
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div id="class">
          <div class="subject-card color-2">
            <div class="img">
              <img src="images/dashboard/subject-thumb-geography.svg"></img>
            </div>
            <div class="content-style-1">
              <h5 class="heading-5-medium">Geography</h5>
              <label>12:00 PM to 1:00 PM</label>
              <a class="btn-ss">Join Now</a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div id="class">
          <div class="subject-card color-3">
            <div class="img">
              <img src="images/dashboard/subject-thumb-language.svg"></img>
            </div>
            <div class="content-style-1">
              <h5 class="heading-5-medium">Language</h5>
              <label>11:00 AM to 12:00 PM</label>
              <a class="btn-ss">Join Now</a>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
}

export default OnlineClassCard;
