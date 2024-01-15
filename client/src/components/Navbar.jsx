import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

import Tsunet from "../assets/tsunet-white.png";

import "../styles/navbar.css";

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const settingsRef = useRef();

  const handleClickOutside = (event) => {
    if (settingsRef.current.contains(event.target)) {
      // inside click
      return;
    }
    // outside click
    setShowOptions(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClickOutside);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleIconClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <nav className={"navbar"}>
      <ul>
        <li className={"logo"}>
          <Link to="/">
            <img src={Tsunet} alt={"Tsunet"} />
            <span className={"website-title"}>Tsunet</span>
          </Link>
        </li>
        <li className={"search-container"}>
          <CiSearch className={"search-icon"} />
          <form action="/search" method="get">
            <input
              type="text"
              placeholder="Search..."
              name="q"
              className="search-bar"
            />
          </form>
        </li>
        <li className={"log-in-container"}>
          <button className={"log-in"}>Log In</button>
        </li>
        <li
          className={"settings-button"}
          ref={settingsRef}
          onClick={handleIconClick}
        >
          <PiDotsThreeOutlineFill />
          {showOptions && (
            <div
              className={`settings-content ${
                showOptions ? "visible" : "hidden"
              }`}
            >
              <a href="#">
                <IoPersonOutline className={"settings-content-icon"} />
                Sign Up
              </a>
              <a href="#">
                <AiOutlineQuestionCircle className={"settings-content-icon"} />
                Help
              </a>
              <a href="#">Theme</a>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
