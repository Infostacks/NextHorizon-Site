import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ourServices, Expertise, Insights, offices } from "../../utils/data";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-router-dom";
import "./Footer.css";
import MainLogowhite3 from "../../images/logo/Nhw4.png";
import styles from "../../utils/GlobalStyles";

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
      <div className="z-50 zIndex">
        <ScrollToTop smooth color="#D90429" />
      </div>

      <div className="footerXMargin flex flex-col justify-center gap-5 w-full bg-[#1B2B36]">
        {/* adress details  */}
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col justify-between w-full items-center">
          <img className="h-12" src={MainLogowhite3} alt="Workflow" />
          {/* <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col gap-5">
            <div className="flex flex-row gap-3 items-center">
              <div
                className={`hover:cursor-pointer text-4xl xl:text-slate-300 lg:text-slate-100 md:text-slate-150 text-${styles.redPrimary} hover:text-${styles.redPrimary}`}
              >
                <GoDeviceMobile />
              </div>
              <div className="flex flex-col">
                <div className="text-sm text-slate-50">
                  264 Avenue 0 Suite A8,NY,11230, USA
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div
                className={`hover:cursor-pointer text-4xl xl:text-slate-300 lg:text-slate-100 md:text-slate-150 text-${styles.redPrimary} hover:text-${styles.redPrimary}`}
              >
                <BiMapPin />
              </div>
              <div className="flex flex-col">
                <div className="text-sm text-slate-50">+1 929 552 2285</div>
                <div className="text-sm text-slate-50">
                  support@nhitechsolutions.com
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* horizontal line  */}
        <div className={`w-full h-[1px] bg-${styles.redPrimary}`}></div>

        {/* navigation links  */}
        <div className="text-white flex xl:flex-row lg:flex-row flex-col justify-between xl:gap-12 gap-20 w-full">
          <div className="xl:flex lg:flex justify-between xl:flex-row lg:flex-row flex-col xl:w-4/6 lg:w-4/6 w-full xl:visible lg:visible hidden">
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
                      className="hover:cursor-pointer hover:translate-x-3">
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
                      className="hover:cursor-pointer hover:translate-x-3">
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
                      className="hover:cursor-pointer hover:translate-x-3">
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
            <div className="grid grid-cols-1 gap-x-11 gap-y-6 text-base font-light">
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
                <div className="hover:cursor-pointer font-light text-sm">
                  sales@nhitechsolutions.com
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-normal">Contact for support:</div>
                <div className="hover:cursor-pointer font-light text-sm">
                  support@nhitechsolutons.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* icons  */}
        <div className="flex flex-row items-center gap-2">
          <div
            className={`bg-${styles.redPrimary} p-3 rounded-full text-white hover:cursor-pointer hover:text-${styles.redPrimary} hover:bg-white`}>
            <a alt="" href="https://www.facebook.com/Nhitechsolutionsfb">
              <GrFacebookOption />
            </a>
          </div>
          <div
            className={`bg-${styles.redPrimary} p-3 rounded-full text-white hover:cursor-pointer hover:text-${styles.redPrimary} hover:bg-white`}>
            <a alt="" href="https://twitter.com/Nhitechsolutionst">
              <GrTwitter />
            </a>
          </div>
          <div
            className={`bg-${styles.redPrimary} p-3 rounded-full text-white hover:cursor-pointer hover:text-${styles.redPrimary} hover:bg-white`}>
            <a alt="" href="https://www.linkedin.com/company/next-horizon-inc/">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* copyright section  */}
      <div
        className={`flex justify-center items-center text-slate-50 bg-${styles.blackPrimary} bg-opacity-60 xl:py-8 lg:py-8 py-2 border-t-[1px] border-slate-500`}>
        © Copyright <strong>NEXT HORIZON</strong>. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
