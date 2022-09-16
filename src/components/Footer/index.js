import { FaInstagram } from "react-icons/fa";
import { GoDeviceMobile } from "react-icons/go";
import { BiMapPin } from "react-icons/bi";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ourServices, Expertise, Insights, offices } from "../../utils/data";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-router-dom";
import './Footer.css';
import MainLogowhite3 from "../../images/logo/Nhw4.png";

const Footer = () => {
  const { inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const hoverAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      hoverAnimation.start({
        x: 30,
        transition: { duration: 0.25 },
      });
    }
    if (!inView) {
      hoverAnimation.start({
        x: 0,
        transition: { duration: 0.25 },
      });
    }
  });

  return (
    <div className="footerPattern w-full overflow-x-hidden">
      <div className="z-50">
        <ScrollToTop
          smooth
          viewBox="0 0 24 24"
          svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
        />
      </div>

      <div className="footerXMargin flex flex-col justify-center gap-5 w-full bg-[#1B2B36] bg-opacity-95">
        {/* adress details  */}
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col justify-between w-full items-center">
          <img
            className="h-12"
            src={MainLogowhite3}
            alt="Workflow"
          />
          <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col gap-5">
            <div className="flex flex-row gap-3 items-center">
              <div className="hover:cursor-pointer text-4xl xl:text-slate-300 lg:text-slate-100 md:text-slate-150 text-[#D90429] hover:text-[#D90429]">
                <GoDeviceMobile />
              </div>
              <div className="flex flex-col">
                <div className="text-sm text-slate-50">
                  264 Avenue 0 Suite A8,NY,11230, USA
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="hover:cursor-pointer text-4xl xl:text-slate-300 lg:text-slate-100 md:text-slate-150 text-[#D90429] hover:text-[#D90429]">
                <BiMapPin />
              </div>
              <div className="flex flex-col">
                <div className="text-sm text-slate-50">+1 929 552 2285</div>
                <div className="text-sm text-slate-50">
                  support@nhitechsolutions.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* horizontal line  */}
        <div className="w-full h-[1px] bg-[#D90429]"></div>

        {/* navigation links  */}
        <div className="text-white flex xl:flex-row lg:flex-row flex-col justify-between xl:gap-28 gap-20 w-full">
          <div className="xl:flex lg:flex justify-between xl:flex-row lg:flex-row flex-col gap-5 xl:w-4/6 lg:w-4/6 w-full xl:visible lg:visible hidden">
            <div className="flex flex-col gap-5">
              <div className="font-bold">Services</div>
              <div className="flex flex-col text-base font-light gap-2">
                {ourServices.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      whileHover={{
                        x: 15,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        x: 0,
                        transition: { duration: 0.25 },
                      }}
                      className="hover:cursor-pointer hover:translate-x-3"
                    >
                      <Link to={item.link}>{item.title}</Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="font-bold">Expertise</div>
              <div className="flex flex-col text-base font-light gap-2">
                {Expertise.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      whileHover={{
                        x: 15,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        x: 0,
                        transition: { duration: 0.25 },
                      }}
                      className="hover:cursor-pointer hover:translate-x-3"
                    >
                      <Link to={item.link}>{item.title}</Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="font-bold">Insights</div>
              <div className="flex flex-col text-base font-light gap-2">
                {Insights.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      whileHover={{
                        x: 15,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        x: 0,
                        transition: { duration: 0.25 },
                      }}
                      className="hover:cursor-pointer hover:translate-x-3"
                    >
                      <Link to={item.link}>{item.title}</Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col xl:w-2/6 lg:w-2/6 w-full gap-5">
            <div className="font-bold">Offices</div>
            {/* address  */}
            <div className="grid grid-cols-2 gap-x-11 gap-y-6 text-base font-light">
              {offices.map((office, index) => {
                return (
                  <div key={index} className="flex flex-col">
                    <div className="hover:cursor-pointer">{office.contact}</div>
                    <div className="">{office.city}</div>
                  </div>
                );
              })}
            </div>

            <div className="font-bold">Emails</div>
            {/* emails  */}
            <div className="grid grid-cols-2 gap-x-11 gap-y-6 text-base">
              <div className="flex flex-col">
                <div className="font-normal">Build your team:</div>
                <div className="hover:cursor-pointer font-light">
                  sales@cleveroad.com
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-normal">Build your team:</div>
                <div className="hover:cursor-pointer font-light">
                  sales@cleveroad.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* icons  */}
        <div className="flex flex-row items-center gap-2">
          <div className="bg-[#D90429] p-3 rounded-full text-white hover:cursor-pointer hover:text-[#D90429] hover:bg-white">
            <GrFacebookOption />
          </div>
          <div className="bg-[#D90429] p-3 rounded-full text-white hover:cursor-pointer hover:text-[#D90429] hover:bg-white">
            <FaInstagram />
          </div>
          <div className="bg-[#D90429] p-3 rounded-full text-white hover:cursor-pointer hover:text-[#D90429] hover:bg-white">
            <GrTwitter />
          </div>
        </div>
      </div>

      {/* copyright section  */}
      <div className="flex justify-center items-center text-slate-50 bg-[#08080cff] bg-opacity-60 xl:py-8 lg:py-8 py-2 border-t-[1px] border-slate-500">
        © Copyright <strong>NEXT HORIZON</strong>. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
