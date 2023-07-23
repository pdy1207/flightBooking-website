import React from "react";

// Image Import  =================>
import Logo from "../../assets/logo.png";

// Imported icons ============>
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={Logo} className="Logo" />
          </div>
          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiFillYoutube className="icon" />
            <FaPinterestP className="icon" />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Explore</a>
          </li>
          <li>
            <a>Flight Status</a>
          </li>
          <li>
            <a>Travel</a>
          </li>
          <li>
            <a>Check-In</a>
          </li>
          <li>
            <a>Manage your booking</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>How to</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Baggage</a>
          </li>
          <li>
            <a>Route Map</a>
          </li>
          <li>
            <a>Our communities</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Explore</a>
          </li>
          <li>
            <a>Flight Status</a>
          </li>
          <li>
            <a>Travel</a>
          </li>
          <li>
            <a>Check-In</a>
          </li>
          <li>
            <a>Manage your booking</a>
          </li>
        </div>
      </div>

      <div className="copyRightDiv flex">
        <p>
          Courtesy Design | Developed by
          <a href="https://github.com/pdy1207" target="_black">
            Earth
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
