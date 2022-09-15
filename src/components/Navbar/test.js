import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import BlogMenu from "./BlogMenu";
import ServicesMenu from "./ServicesMenu";
import { NavLink } from "react-router-dom";
import "../../App.css";

import MainLogo from "../../images/logo/Nh.png";
import MainLogowhite from "../../images/logo/Nhw.png";
import MainLogowhite1 from "../../images/logo/Nhw1.png";
import MainLogowhite2 from "../../images/logo/Nhw2.png";

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
        navbar ? "bg-[#D90429] bg-opacity-90 drop-shadow-md" : "bg-slate-900"
      } z-[1200px] text-slate-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-between items-center w-full">
            <div className="flex-shrink-0">
              <NavLink to="/">
                <img
                  className="h-8"
                  src={`${navbar ? MainLogowhite1 : MainLogowhite2}`}
                  alt="Workflow"
                />
              </NavLink>
            </div>

            <div className="flex flex-row justify-center items-center">
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink to="/" className="tracking-widest hover:bg-gray-700  px-3 py-2 hover:rounded-md text-sm" >
                    <span
                      className={` font-medium`}
                    >
                      Home
                    </span>
                  </NavLink>

                  <NavLink
                    to="/services"
                    onMouseEnter={handleMouseEnterServices}
                    onMouseLeave={handleMouseExitServices}
                    className="tracking-widest"
                  >
                    <span
                      className={`hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      Services
                      <div
                        // className="sub-menu"
                        onMouseEnter={handleMouseEnterServices}
                        onMouseLeave={handleMouseExitServices}
                      >
                        {isHoveringServices ? <ServicesMenu /> : ""}
                      </div>
                    </span>
                  </NavLink>

                  <NavLink to="/portfolio" className="tracking-widest">
                    <span
                      className={`hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      Portfolio
                    </span>
                  </NavLink>

                  <NavLink
                    to="/blogs/latest"
                    onMouseEnter={handleMouseEnterBlogs}
                    onMouseLeave={handleMouseExitBlogs}
                    className="tracking-widest"
                  >
                    <span
                      className={`hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      Blogs
                      <div
                        // className="sub-menu"
                        onMouseEnter={handleMouseEnterBlogs}
                        onMouseLeave={handleMouseExitBlogs}
                      >
                        {isHoveringBlogs ? <BlogMenu /> : ""}
                      </div>
                    </span>
                  </NavLink>

                  <NavLink to="/gallery" className="tracking-widest">
                    <span
                      className={`hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      Gallery
                    </span>
                  </NavLink>

                  <NavLink to="/contact" className="tracking-widest">
                    <span
                      className={`hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      Contact Us
                    </span>
                  </NavLink>

                  <NavLink to="/login" className="tracking-widest">
                    <span
                      className={`hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                      //   onClick={handleLogout}
                    >
                      Login
                    </span>
                  </NavLink>
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
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
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
                  aria-hidden="true"
                >
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
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="lg:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="text-white mx-2 pt-2 pb-3 border-t-[1px] space-y flex flex-col sm:px-3"
            >
              <NavLink
                to="/"
                className="focus:font-bold focus:text-base focus:bg-gray-500"
              >
                <span className="block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </span>
              </NavLink>

              <NavLink to="/services">
                <span className="block px-3 py-2 rounded-md text-base font-medium">
                  Services
                </span>
              </NavLink>

              <NavLink to="/portfolio">
                <span className="block px-3 py-2 rounded-md text-base font-medium">
                  Portfolio
                </span>
              </NavLink>

              <NavLink to="/blogs/latest">
                <span className="block px-3 py-2 rounded-md text-base font-medium">
                  Blogs
                </span>
              </NavLink>

              <NavLink to="/gallery">
                <span className="block px-3 py-2 rounded-md text-base font-medium">
                  Gallery
                </span>
              </NavLink>

              <NavLink to="/contact">
                <span className="px-3 py-2 rounded-md text-sm font-medium">
                  Contact Us
                </span>
              </NavLink>

              <NavLink to="/login">
                <span
                  className={`px-5 py-2`}
                  //   onClick={handleLogout}
                >
                  Login
                </span>
              </NavLink>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Header;
