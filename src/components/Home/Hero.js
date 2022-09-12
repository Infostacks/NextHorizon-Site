import React from "react";
import homeBG from "../../images/template.jpg";
import { useGlobalContext } from "../../context";

const Hero = () => {
  // const [animationData, setAnimationData] = useState(null);

  const { closeSubmenu } = useGlobalContext();
  return (
    <div className="w-full overflow-x-hidden bg-slate-100">
      <img
        src={homeBG}
        alt="homeBG"
        className="h-screen w-full overflow-x-hidden absolute"
      />
      <section
        className="hero xl:px[10rem] lg:px-[4rem] md:px-[3rem] px-[3rem]"
        onMouseOver={closeSubmenu}
      >
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col-reverse xl:gap-10 lg:gap-8 md:gap-3 gap-5 justify-center items-center h-screen w-full">
          {/* right  */}
          <article className="flex flex-col justify-center xl:w-1/2 lg:w-1/2 md:w-1/2 w-full xl:h-full lg:h-full md:h-full h-1/3 gap-5">
            <h1 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold z-10">
              Doing More for Your Technical Success
            </h1>
            <p className="z-10">
              We’re a full-cycle web and mobile application development company
              that creates software solutions tailored to the demands of
              businesses
            </p>
            <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#08080cff] hover:border-[1px] hover:border-[#08080cff] w-fit">
              Connect with us
            </button>
          </article>
          {/* left  */}
          <article className="flex xl:w-1/2 lg:w-1/2 md:w-1/2 w-full">
            <img
              src="https://demo.themovation.com/stratus/wp-content/uploads/2020/12/Payments-0.jpg"
              alt="homeBG"
              className="xl:w-[45rem] lg:w-[35rem] md:w-[25rem] w-[35rem] h-auto rounded-2xl drop-shadow-xl"
            />
          </article>
        </div>
      </section>
    </div>
  );
};

export default Hero;
