import React, { useEffect } from "react";

// Imported Assets ================>
import video from "../../assets/video.mp4";

import airplane from "../../assets/airplane.png";

// Import AOS =====================>
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  // UseEffect animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 data-Aos="fade-up" data-aos-duration="2000">
          Create Ever-lasting Memories With Us
        </h1>
      </div>

      <div
        data-Aos="fade-down"
        data-aos-duration="2000"
        className="homeImages flex"
      >
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className="video"></video>
        </div>
        <img src={airplane} className="plane" />
      </div>
    </div>
  );
};

export default Home;
