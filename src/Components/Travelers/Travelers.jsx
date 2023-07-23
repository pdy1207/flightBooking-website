import React, { useEffect } from "react";
// Image Import =================>
import dubai from "../../assets/dubai.jpg";
import japan from "../../assets/japan.jpg";
import paris from "../../assets/paris.jpg";
import rome from "../../assets/rome.jpg";
// Image user Import =================>
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
import user4 from "../../assets/user4.jpg";

// Import AOS =====================>
import Aos from "aos";
import "aos/dist/aos.css";

const travelers = [
  {
    id: 1,
    destinationImage: dubai,
    travlerImage: user1,
    travelerName: "Dubai Do Young ",
    socialLink: "@DUBAI",
  },
  {
    id: 2,
    destinationImage: japan,
    travlerImage: user2,
    travelerName: "Japan Do Young",
    socialLink: "@JAPAN",
  },
  {
    id: 3,
    destinationImage: paris,
    travlerImage: user3,
    travelerName: "Paris Do Young",
    socialLink: "@PARIS",
  },
  {
    id: 4,
    destinationImage: rome,
    travlerImage: user4,
    travelerName: "Rome Do Young",
    socialLink: "@ROME",
  },
];
const Travelers = () => {
  // UseEffect animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2 data-Aos="fade-down" data-aos-duration="2500">
          Top travelers of this month!
        </h2>
        <div className="travelersContainer grid">
          {travelers.map(
            ({
              id,
              destinationImage,
              travlerImage,
              travelerName,
              socialLink,
            }) => {
              return (
                // {/* Single passanger card */}
                <div
                  data-Aos="fade-down"
                  data-aos-duration="2000"
                  key={id}
                  className="singleTraveler"
                >
                  <img src={destinationImage} className="destinationImage" />

                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travlerImage} className="travlerImage" />
                    </div>

                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
