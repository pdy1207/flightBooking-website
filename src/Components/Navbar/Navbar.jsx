import React from "react";

// Icons Import
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul />
        </div>

        <div className="flex">
          <li className="flex">
            <BsPhoneVibrate /> Support
          </li>
          <li className="flex">
            {" "}
            <AiOutlineGlobal /> Languages
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
