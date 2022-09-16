import React from "react";
import { faqsMobile } from "../../../utils/data.js";
import "./listStyle.css";

const Answer = (faq) => {
  console.log(faq.faq);
  return <div dangerouslySetInnerHTML={createMarkup(faq.faq)}></div>;
};

function createMarkup(faq) {
  return { __html: faq };
}

const FAQsMobile = () => {
  return (
    <div className="flex flex-col justify-center w-screen items-center bg-slate-100 xl:px-0 lg:px-0 px-10">
      <section className="flex flex-col items-center justify-center w-full">
        <div className="max-w-screen-lg w-full flex items-center justify-center flex-col pt-16 xl:gap-20 lg:gap-14 gap-10">
          {/* top section  */}
          <div className="flex flex-col items-center">
            {/* Text intro  */}
            <div className="flex flex-col gap-5 justify-center items-center w-full">
              <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
                Questions you might have
              </h2>
              <p>Learn more about our mobile app development workflow.</p>
            </div>
          </div>

          <div className="max-w-screen-lg space-y-4 w-full flex flex-col items-center">
            {/* faqsMobile    */}
            {faqsMobile.map((faq, index) => {
              return (
                <details
                  key={index}
                  className="p-6 border-l-4 border-[#D90429] bg-gray-50 group w-full"
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

                  {/* <p className="mt-4 leading-relaxed text-gray-700 w-full"> */}
                  {/* {() => faq.answer} */}
                  <Answer faq={faq.answer} />
                  {/* </p> */}
                </details>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQsMobile;
