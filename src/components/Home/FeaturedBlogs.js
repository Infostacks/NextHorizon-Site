import React from "react";
import styles from "../../utils/GlobalStyles";
import { blogs } from "../../utils/data";

const Answer = (faq) => {
  console.log(faq.faq);
  return <div dangerouslySetInnerHTML={createMarkup(faq.faq)}></div>;
};

function createMarkup(faq) {
  return { __html: faq };
}

const FeaturedBlogs = () => {
  console.log(blogs);
  return (
    <div className="relative bg-slate-100 bg-opacity-80 w-full flex items-center justify-center pt-20 xl:px-0 lg:px-0 px-10">
      {blogs.map(
        (blog) =>
          blog.feature && (
            <div className="xl:p-10 lg:p-10 p-5 bg-white bg-opacity-30 backdrop-blur-sm border-2 rounded-3xl max-w-screen-lg h-[25rem] flex gap-5 xl:flex-row lg:flex-row flex-col">
              <span className="xl:w-1/2 lg:w-1/2 w-full">
                <img
                  src="https://www.nhitechsolutions.com/assets/img/about1.jpg"
                  alt=""
                  className="rounded-3xl shadow-lg"
                />
              </span>
              <div className="xl:w-1/2 lg:w-1/2 w-full flex flex-col gap-[1rem] overflow-y-scroll scroll-smooth scroll-hidden">
                <Answer faq={blog?.desc} />
                {/* {blog?.desc} */}
              </div>
            </div>
          )
      )}

      {/* <div className="xl:p-10 lg:p-10 p-5 bg-white rounded-3xl max-w-screen-lg flex gap-5 xl:flex-row lg:flex-row flex-col">
                <span className="xl:w-1/2 lg:w-1/2 w-full">
                  <img
                    src="https://www.nhitechsolutions.com/assets/img/about1.jpg"
                    alt=""
                    className="rounded-3xl shadow-lg"
                  />
                </span>
                <div className="xl:w-1/2 lg:w-1/2 w-full flex flex-col gap-[1rem]">
                  <span
                    className={`text-[2rem] font-bold text-${styles.redPrimary}`}
                  >
                    Our Story | Next Horizon Inc.
                  </span>
                  <span className="text-justify text-base">
                    The information technology (IT) business Next Horizon was
                    founded in Brooklyn, New York, in 2018. It provides a wide
                    range of services, from consultancy to maintenance. We cater
                    to diverse companies and organizations across the city and
                    ensure across the city and make sure that every need is
                    satisfied. With more than 20 organizations now using our
                    software, we now serve the entire global economy. We started
                    creating personal marketing software in 2018 to answer
                    specific business requirements. Including large and small,
                    public and private, for-profit and nonprofit enterprises,
                    our clientele is remarkably diverse. We stand behind them as
                    they grow, persevere, and change to embrace the future. We
                    help startups choose the best technology, resources, and
                    solutions to help them expand their company. Innovating,
                    dependable, integrated, and service-oriented information
                    technology services are what Next Horizon offers and
                    develops, empowering you to grow your business and stay one
                    step ahead of technology. We provide our dependable
                    customers with the newest IT services. A dependable and
                    strong infrastructure will enable ubiquitous, secure, and
                    seamless access to information resources in all forms. We
                    work together with the community in collaborative
                    relationships, serving as reliable partner who foresees
                    needs and offers creative solutions in response.
                  </span>

                  <span className="text-[1rem] font-bold">
                    Next Horizon Inc. has been selected among the Top Web
                    Development Companies In New York by DesignRush
                  </span>
                  <a
                    href="https://www.designrush.com/agency/web-development-companies/new-york?query=next%20horizon"
                    className="text-blue-600 underline"
                  >
                    Web Development Companies In New York
                  </a>
                </div>
              </div> */}
    </div>
  );
};

export default FeaturedBlogs;
