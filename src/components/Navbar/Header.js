import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import BlogMenu from "./BlogMenu";
import ServicesMenu from "./ServicesMenu";
import { NavLink } from "react-router-dom";
import "../../App.css";
import "./Navbar.css";

import MainLogowhite1 from "../../images/logo/Nhw3.png";
import MainLogowhite2 from "../../images/logo/Nhw4.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
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

  const changeNavBG = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavBG); // to navbar bg-color

  return (
    <nav
      className={`${
        navbar && "bg-[#D90429] bg-opacity-90 drop-shadow-md"
      } z-[1200px] text-slate-50`}>
      <div className="max-w-7xl flex justify-center mx-auto">
        <div className="flex items-center justify-between h-16 w-full px-10 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center w-full max-w-6xl">
            <div className="flex-shrink-0">
              <NavLink to="/">
                <img
                  className="xl:h-14 lg:h-14 h-10"
                  src={`${navbar ? MainLogowhite1 : MainLogowhite2}`}
                  alt="Workflow"
                />
              </NavLink>
            </div>

            <div className="flex flex-row justify-center items-end">
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <span className={`text-sm font-medium`}>
                    <NavLink to="/" className="tracking-widest navlinkUnderline">
                      Home
                    </NavLink>
                  </span>

                  <span className={`text-sm font-medium`}>
                    <NavLink
                      to="/services"
                      onMouseEnter={handleMouseEnterServices}
                      onMouseLeave={handleMouseExitServices}
                      className="tracking-widest navlinkUnderline">
                      Services
                    </NavLink>
                    <div
                      // className="sub-menu"
                      onMouseEnter={handleMouseEnterServices}
                      onMouseLeave={handleMouseExitServices}>
                      {isHoveringServices ? <ServicesMenu /> : ""}
                    </div>
                  </span>

                  <span className={`text-sm font-medium`}>
                    <NavLink to="/portfolio" className="tracking-widest navlinkUnderline">
                      Portfolio
                    </NavLink>
                  </span>

                  <span className={`text-sm font-medium`}>
                    <NavLink
                      to="/blogs/latest"
                      onMouseEnter={handleMouseEnterBlogs}
                      onMouseLeave={handleMouseExitBlogs}
                      className="tracking-widest navlinkUnderline">
                      Blogs
                    </NavLink>
                    <div
                      // className="sub-menu"
                      onMouseEnter={handleMouseEnterBlogs}
                      onMouseLeave={handleMouseExitBlogs}>
                      {isHoveringBlogs ? <BlogMenu /> : ""}
                    </div>
                  </span>

                  <span className={`text-sm font-medium`}>
                    <NavLink to="/gallery" className="tracking-widest navlinkUnderline">
                      Gallery
                    </NavLink>
                  </span>

                  <span className={`text-sm font-medium`}>
                    <NavLink to="/careers" className="tracking-widest navlinkUnderline">
                      Careers
                    </NavLink>
                  </span>

                  <span className={`text-sm font-medium`}>
                    <NavLink to="/contact" className="tracking-widest navlinkUnderline">
                      Get A Quote
                    </NavLink>
                  </span>

                  <span
                    className={`text-sm font-medium`}
                    //   onClick={handleLogout}
                  >
                    <NavLink to="/login" className="tracking-widest navlinkUnderline">
                      Login
                    </NavLink>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        {(ref) => (
          <div className="lg:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="text-white mx-2 pt-2 pb-3 border-t-[1px] space-y flex flex-col sm:px-3">
              <span className={`block px-3 py-2 rounded-md text-base font-medium`}>
                <NavLink to="/" className={`focus:font-bold focus:text-base focus:bg-gray-500`}>
                  Home
                </NavLink>
              </span>

              <span className="block px-3 py-2 rounded-md text-base font-medium">
                <NavLink to="/services">Services</NavLink>
              </span>

              <span className="block px-3 py-2 rounded-md text-base font-medium">
                <NavLink to="/portfolio">Portfolio</NavLink>
              </span>

              <span className="block px-3 py-2 rounded-md text-base font-medium">
                <NavLink to="/blogs/latest">Blogs</NavLink>
              </span>

              <span className="block px-3 py-2 rounded-md text-base font-medium">
                <NavLink to="/gallery">Gallery</NavLink>
              </span>

              <span className="block px-3 py-2 rounded-md text-base font-medium">
                <NavLink to="/careers">Careers</NavLink>
              </span>

              <span className="px-3 py-2 rounded-md text-sm font-medium">
                <NavLink to="/contact">Get A Quote</NavLink>
              </span>
              <span
                className={`px-5 py-2`}
                //   onClick={handleLogout}
              >
                <NavLink to="/login">Login</NavLink>
              </span>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Header;
