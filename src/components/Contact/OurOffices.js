import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { offices } from "../../utils/data.js";

const OurOffices = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const fadeInAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      fadeInAnimation.start({
        opacity: 1,
        transition: {
          duration: 2,
          bounce: 1,
        },
      });
    }

    if (!inView) {
      fadeInAnimation.start({ opacity: 0 });
    }
  }, [inView, fadeInAnimation]);

  return (
    <section
      ref={ref}
      className="bg-slate-100 w-screen flex flex-col gap-10 items-center pb-20 overflow-x-hidden"
    >
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center px-10 xl:flex-row lg:flex-row flex-col xl:gap-20 lg:gap-14 gap-10">
        {/* Text intro  */}
        <motion.h2
          animate={fadeInAnimation}
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Our Offices
        </motion.h2>

        <motion.p animate={fadeInAnimation} className="max-w-lg mt-4 text-xl">
          With several offices in Ukraine and beyond, you’re more than welcome
          to come to visit us at any convenient time and meet your team in
          person.
        </motion.p>
      </div>

      {/* awards  */}
      <div className="max-w-screen-lg grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 w-full px-10 gap-10">
        {offices.map((office, index) => {
          return (
            <motion.div
              initial={{ y: index % 2 === 0 ? "-10vh" : "10vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 2,
                  type: "spring",
                  bounce: 0.4,
                },
              }}
              key={index}
              className="flex flex-col gap-2"
            >
              <img src={office.flag} alt="" className="w-16 h-10" />

              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-700">
                  {office.city}
                </span>

                <span className="text-xl text-gray-700">{office.adress}</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-700">Phone</span>

                <span className="text-xl text-gray-500">{office.contact}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default OurOffices;
