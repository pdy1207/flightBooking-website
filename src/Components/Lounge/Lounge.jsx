import React, { useEffect } from "react";

// Image Import  =================>
import imageGrid2 from "../../assets/image-grid2.jpg";

// Import AOS =====================>
import Aos from "aos";
import "aos/dist/aos.css";

const Lounge = () => {
  // UseEffect animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div data-Aos="fade-down" data-aos-duration="2500" className="imgDiv">
          <img src={imageGrid2} />
        </div>

        <div className="textDiv">
          <h2 data-Aos="fade-down" data-aos-duration="2500">
            Unaccompanied Minor Lounge
          </h2>

          <div className="grids grid">
            <div
              data-Aos="fade-down"
              data-aos-duration="2500"
              className="singleGrid"
            >
              <span
                data-Aos="fade-down"
                data-aos-duration="2500"
                className="gridTitle"
              >
                Help through the airpot
              </span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div
              data-Aos="fade-down"
              data-aos-duration="2500"
              className="singleGrid"
            >
              <span className="gridTitle">Priority Boarding</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div
              data-Aos="fade-down"
              data-aos-duration="2500"
              className="singleGrid"
            >
              <span className="gridTitle">Care on the flight</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div
              data-Aos="fade-down"
              data-aos-duration="2500"
              className="singleGrid"
            >
              <span className="gridTitle">Chauffeur-drive service</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
