import React from "react";
// import homeBG from "../../images/template1.jpg";
// import homeBG from "../../images/template2.jpg";
import homeBG from "../../images/template3.jpg";
// import heroFinal from "../../images/heroFinal.png";
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
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col-reverse xl:gap-0 lg:gap-0 gap-10 justify-center items-center h-screen w-11/12">
          {/* right  */}
          <article className="flex flex-col justify-center xl:w-1/2 lg:w-1/2 md:w-1/2 w-full gap-5">
            <h1 className="xl:text-[7rem] lg:text-7xl md:text-6xl text-3xl font-bold z-10">
              Doing More for Your Technical Success
            </h1>
            <p className="z-10 xl:text-3xl lg:text-2xl text-xl">
              We‘re providing services to web and mobile application developers
              who are courageous to promote software solutions and lead towards
              the utmost growth of business demands to satisfy customer demands.
            </p>
            <button className="bg-[#08080cff] text-[#edf2f4ff] border-[1px] border-[#08080cff] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:bg-white hover:text-[#08080cff] hover:border-[1px] hover:border-[#08080cff] w-fit">
              Connect with us
            </button>
          </article>
          {/* left  */}
          <article className="flex xl:w-1/2 lg:w-1/2 md:w-1/2 w-full">
            <img
              // src={heroFinal}
              src="https://demo.themovation.com/stratus/wp-content/uploads/2020/05/SEO-1.svg"
              alt="homeBG"
              className="xl:w-[50rem] lg:w-[45rem] md:w-[40rem] w-[35rem] h-auto rounded-2xl drop-shadow-xl"
            />
          </article>
        </div>
      </section>
    </div>
  );
};

export default Hero;
