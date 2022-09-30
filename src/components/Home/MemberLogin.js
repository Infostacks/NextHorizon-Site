import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import styles from "../../utils/GlobalStyles.js";

const MemberLogin = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const fadeInAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      fadeInAnimation.start({
        opacity: 1,
        transition: {
          duration: 3,
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
      id="login"
      className="bg-white bg-opacity-80 backdrop-blur-sm py-32 mt-20 w-full overflow-x-hidden z-0"
    >
      <motion.div
        animate={fadeInAnimation}
        className="max-w-screen-md px-4 py-16 mx-auto sm:px-6 lg:px-8"
      >
        <div className="max-w-lg mx-auto text-center flex xl:flex-row lg:flex-row flex-col gap-10 mb-10">
          <p className="mt-4 text-gray-600 xl:text-3xl lg:text-3xl text-xl">
            Are you already a member?
          </p>
          <h2 className="text-slate-800 xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold">
            Login
          </h2>
        </div>

        <div className="flex xl:flex-row lg:flex-row md:flex-col gap-10">
          <blockquote className="flex flex-col justify-between p-6 -mt-6 w-full text-center rounded-lg shadow-xl">
            <div className="flex flex-col p-0 gap-3 items-center">
              <div className="flex xl:flex-row lg:flex-row flex-col w-full gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  className={styles.inputField_M_Login}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={styles.inputField_M_Login}
                />
              </div>

              {/* Login button */}
              <button className={styles.buttonRedOutline}>
                Login
              </button>
            </div>
          </blockquote>
        </div>
      </motion.div>
    </section>
  );
};

export default MemberLogin;
