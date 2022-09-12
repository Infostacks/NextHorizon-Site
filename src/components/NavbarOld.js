import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [isHover, toggleHover] = React.useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
  const [isMouse, toggleMouse] = React.useState(false);
  const toggleMouseMenu = () => {
    toggleMouse(!isMouse);
  };

  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const [navbar, setNavbar] = useState(false);

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3; // 3 is the height of the navbar

    if (page === undefined) {
      return;
    } // to check undefined
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  const changeNavBG = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  window.addEventListener("scroll", changeNavBG);

  return (
    <nav
      className="nav xl:px[20rem] lg:px-[5] md:pr-[5rem] md:pl-[5rem] px-[5rem] w-screen"
      onMouseOver={handleSubmenu}
    >
      <div className="nav-center">
        <div className="nav-header">
          <img
            className="h-8"
            src="https://www.nhitechsolutions.com/assets/img/finalumar.png"
            alt="Workflow"
          />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <button className="link-btn" onMouseOver={displaySubmenu}>
                HOME
              </button>
            </Link>
          </li>
          <li>
            <Link to="about">
              <button className="link-btn" onMouseOver={displaySubmenu}>
                ABOUT
              </button>
            </Link>
          </li>
          <li>
            <Link to="services">
              <button className="link-btn" onMouseOver={displaySubmenu}>
                SERVICES
              </button>
            </Link>
          </li>
          <li>
            <Link to="portfolio">
              <button className="link-btn" onMouseOver={displaySubmenu}>
                PORTFOLIO
              </button>
            </Link>
          </li>
          <li>
            <Link to="team">
              <button className="link-btn" onMouseOver={displaySubmenu}>
                TEAM
              </button>
            </Link>
          </li>
          <li>
            <Link to="gallery">
              <button className="link-btn" onMouseOver={displaySubmenu}>
                GALLERY
              </button>
            </Link>
          </li>
          <li>
            <Link to="contact">
              <button className="link-btn" onMouseOver={displaySubmenu}>
                CONTACT
              </button>
            </Link>
          </li>
          <li>
            <Link to="login">
              <button className="link-btn" onMouseOver={displaySubmenu}>
                CLIENT LOGIN
              </button>
            </Link>
          </li>
        </ul>
        <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-4 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#08080cff] hover:border-[1px] hover:border-[#08080cff] w-fit">
          Getting Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
