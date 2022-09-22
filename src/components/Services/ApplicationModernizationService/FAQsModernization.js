import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { faqsAppModernization } from "../../../utils/data.js";
import styles from "../../../utils/GlobalStyles.js";

const Answer = (faq) => {
  console.log(faq.faq);
  return <div dangerouslySetInnerHTML={createMarkup(faq.faq)}></div>;
};

function createMarkup(faq) {
  return { __html: faq };
}

const FAQsModernization = () => {
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
    <div
      ref={ref}
      className="flex flex-col justify-center w-screen items-center pt-10 bg-slate-100 xl:px-0 lg:px-0 px-10"
    >
      <section className="flex flex-col items-center justify-center w-full">
        <div className="max-w-screen-lg w-full flex items-center justify-center flex-col gap-5 py-16">
          {/* top section  */}
          <div className="max-w-screen-xl flex xl:flex-row lg:flex-row flex-col gap-5 items-center">
            {/* Text intro  */}
            <motion.span
              animate={fadeInAnimation}
              className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight"
            >
              Questions You May Have
            </motion.span>

            <motion.span
              animate={fadeInAnimation}
              className="max-w-lg mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide"
            >
              Answering popular questions about website application development
              services
            </motion.span>
          </div>

          <div className="max-w-screen-lg space-y-4 w-full flex flex-col items-center">
            {/* faqsAppModernization    */}
            {faqsAppModernization.map((faq, index) => {
              return (
                <motion.details
                  animate={fadeInAnimation}
                  key={index}
                  className={`p-6 border-l-4 border-${styles.redPrimary} bg-gray-50 group w-full`}
                  close
                >
                  <summary className="flex items-center justify-between cursor-pointer w-full">
                    <h5 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h5>

                    <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <Answer faq={faq.answer} />
                </motion.details>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQsModernization;
