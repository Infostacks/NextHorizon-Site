/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
// import { motion } from "framer-motion";
import "./Navbar.css";

// import HomeMenu from "./HomeMenu";
// import AboutMenu from "./AboutMenu";
import ServicesMenu from "./ServicesMenu";
// import PortfolioMenu from "./PortfolioMenu";
import BlogMenu from "./BlogMenu";
// import GalleryMenu from "./GalleryMenu";
// import ConactMenu from "./ContactMenu";

const index = () => {
  // old nav
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  // const [navbar, setNavbar] = useState(false);/

  // const displaySubmenu = (e) => {
  //   const page = e.target.textContent;
  //   const tempBtn = e.target.getBoundingClientRect();
  //   const center = (tempBtn.left + tempBtn.right) / 2;
  //   const bottom = tempBtn.bottom - 3; // 3 is the height of the navbar

  //   if (page === undefined) {
  //     return;
  //   } // to check undefined
  //   openSubmenu(page, { center, bottom });
  // };

  // const handleSubmenu = (e) => {
  //   if (!e.target.classList.contains("link-btn")) {
  //     closeSubmenu();
  //   }
  // };

  const [isHoveringServices, setIsHoveringServices] = useState(false);
  const handleMouseEnterServices = (e) => {
    setIsHoveringServices(true);
  };

  const handleMouseExitServices = (e) => {
    setIsHoveringServices(false);
  };

  const [isHoveringBlogs, setIsHoveringBlogs] = useState(false);
  const handleMouseEnterBlogs = (e) => {
    setIsHoveringBlogs(true);
  };

  const handleMouseExitBlogs = (e) => {
    setIsHoveringBlogs(false);
  };

  return (
    <nav
      className="nav xl:px[20rem] lg:px-[5] md:pr-[5rem] md:pl-[5rem] px-[5rem] w-screen h-screen bg-[#1B2B36] bg-opacity-80"
      // onMouseOver={handleSubmenu}
    >
      <div className="flex flex-row justify-around items-center w-full h-full">
        <div className="nav-header w-full h-full">
          <Link to="/">
            <img
              className="h-8"
              src="https://www.nhitechsolutions.com/assets/img/finalumar.png"
              alt="Workflow"
            />
          </Link>

          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        
        <div className="flex justify-center items-center flex-row gap-[30px] w-full h-full text-white">
          <span className="nav-item is-active" active-color="cyan">
            <Link to="/">HOME</Link>
          </span>

          <span className="nav-item" active-color="crimson">
            <Link
              to="/services"
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseExitServices}
            >
              SERVICES
            </Link>
            <div
              className="sub-menu"
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseExitServices}
            >
              {isHoveringServices ? <ServicesMenu /> : ""}
            </div>
          </span>

          <span className="nav-item" active-color="green">
            <Link to="/portfolio">PORTFOLIO</Link>
            <div
              className="sub-menu"
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseExit}
            >
              {/* {isHovering ? <PortfolioMenu /> : ""} */}
            </div>
          </span>

          <span className="nav-item" active-color="blue">
            <Link
              to="/blogs/latest"
              onMouseEnter={handleMouseEnterBlogs}
              onMouseLeave={handleMouseExitBlogs}
            >
              BLOGS
            </Link>
            <div
              className="sub-menu"
              onMouseEnter={handleMouseEnterBlogs}
              onMouseLeave={handleMouseExitBlogs}
            >
              {isHoveringBlogs ? <BlogMenu/>  : ""}
            </div>
          </span>

          <span className="nav-item" active-color="red">
            <Link to="/gallery">GALLERY</Link>
            <div
              className="sub-menu"
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseExit}
            >
              {/* {isHovering ? <GalleryMenu /> : ""} */}
            </div>
          </span>

          <span className="nav-item" active-color="rebeccapurple">
            <Link to="/contact">CONTACT</Link>
          </span>

          <span className="nav-item" active-color="orange">
            <Link to="#login">CLIENT LOGIN</Link>
          </span>
        </div>
        <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-3 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#08080cff] hover:border-[1px] hover:border-[#08080cff] w-[17rem] h-fit">
          Getting Started
        </button>
      </div>
    </nav>
  );
};

export default index;
