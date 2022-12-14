import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiEnvelope } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import styles from "./utils/GlobalStyles";

const ContactUs = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      leftAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 3,
          type: "spring",
          bounce: 0.6,
        },
      });

      rightAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 3,
          type: "spring",
          bounce: 0.6,
        },
      });
    }

    if (!inView) {
      leftAnimation.start({ y: "-5vw", opacity: 0 });
      rightAnimation.start({ y: "5vw", opacity: 0 });
    }
  }, [inView, leftAnimation, rightAnimation]);

  return (
    <section ref={ref} className="flex items-center justify-center w-full pt-20">
      <div className="flex flex-col gap-10 w-full max-w-screen-lg">
        <div className="w-full flex xl:gap-20 lg:gap-14 gap-10 xl:flex-row lg:flex-row flex-col justify-center">
          {/* left side  */}
          <motion.div
            animate={rightAnimation}
            className={`mb-10 flex max-w-sm mx-auto flex-col gap-3 justify-center items-center w-full bg-${styles.redPrimary} backdrop-blur-sm bg-opacity-60 border-2 border-${styles.redPrimary} rounded-3xl drop-shadow-md shadow-lg z-30`}>
            <h2 className="text-slate-100 xl:text-3xl lg:text-3xl text-xl font-bold">Contact Us</h2>
            <blockquote className="flex flex-col justify-between p-6 -mt-6 w-full text-center hover:rounded-3xl">
              <div className="flex flex-col justify-center items-center">
                <div className="text-3xl text-slate-100">
                  <HiOutlineLocationMarker />
                </div>
                <div className="text-2xl font-semibold text-slate-100">Our Address</div>
                <div className="text-base text-slate-50">264 Avenue 0 Suite A8,NY,11230, USA</div>
              </div>
            </blockquote>

            <blockquote className="flex flex-col justify-between p-6 -mt-6 w-full text-center hover:rounded-3xl">
              <div className="flex flex-col justify-center items-center">
                <div className="text-3xl text-slate-100">
                  <BiEnvelope />
                </div>
                <div className="text-2xl font-semibold text-slate-100">Email Us</div>
                <div className="text-base text-slate-50">support@nhitechsolutions.com</div>
              </div>
            </blockquote>

            <blockquote className="flex flex-col justify-between p-6 -mt-6 w-full text-center hover:rounded-3xl">
              <div className="flex flex-col justify-center items-center">
                <div className="text-3xl text-slate-100">
                  <BiPhoneCall />
                </div>
                <div className="text-2xl font-semibold text-slate-100">Call Us</div>
                <div className="text-base text-slate-50">+1 (929) 552 2285 (103)</div>
              </div>
            </blockquote>
          </motion.div>

          {/* right side  */}
          <motion.div
            animate={leftAnimation}
            className={`mt-10 max-w-sm flex justify-center flex-col items-center w-full h-full bg-slate-500 border-2 border-slate-500 backdrop-blur-sm bg-opacity-60 rounded-3xl drop-shadow-md shadow-lg z-30`}>
            <blockquote className="flex flex-col gap-5 items-center pb-5 mt-6 w-full text-center">
              <h2 className="text-slate-100 xl:text-3xl lg:text-3xl text-xl font-bold">
                Get In Touch
              </h2>
              <div className="flex flex-col gap-4 px-5 items-center w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={styles.inputField_Contact}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={styles.inputField_Contact}
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  className={styles.inputField_Contact}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className={styles.inputField_Contact}
                />
                <input
                  type="text"
                  name="help"
                  placeholder="How can we help?"
                  className={styles.inputField_Contact}
                />
                <textarea
                  name="message"
                  className={styles.inputField_Contact}
                  placeholder="Message"
                />
              </div>
              <button type="submit" value="Send" className={styles.buttonBlackFull}>
                Send Message
              </button>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
