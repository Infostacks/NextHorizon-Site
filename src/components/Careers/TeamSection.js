import React from "react";


const TeamSection = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center justify-center pb-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-xl flex items-center xl:px-10 xl:flex-row lg:flex-row flex-col gap-5">
        {/* Text intro  */}
        <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold tracking-tight">
          Not just work - your life's best work
        </h2>

        <p className="max-w-lg mt-4 xl:text-3xl lg:text-3xl text-xl tracking-wide">
          We collaboratively administrate empowered markets through existing
          channels and new opportunities on the horizon. We can quickly maximize
          the timely deliverables for real-time presentations to deliver
          outstanding ROI.
        </p>
      </div>

      {/* awards  */}
      <div className="max-w-screen-3xl flex flex-row flex-wrap items-center justify-center w-full gap-10">
        <img
          src="https://demo.themovation.com/stratus/wp-content/uploads/elementor/thumbs/8865586006_560677ac33_o-psy255krpcyzuneysjwjoxsd6skdw3i85c23x4o2hg.jpg"
          alt=""
          className="h-4/6 drop-shadow-md rounded-3xl xl:visible lg:visible hidden"
        />
        <img
          src="https://demo.themovation.com/stratus/wp-content/uploads/elementor/thumbs/Agency-4-psy254mxiixpj1gby1hx4g0wlep0oeeht7emfupgno.jpg"
          alt=""
          className="h-4/6 xl:-mt-32 lg:-mt-32 drop-shadow-md rounded-3xl"
        />
        <img
          src="https://demo.themovation.com/stratus/wp-content/uploads/elementor/thumbs/Agency-5-psy254mxiixpj1gby1hx4g0wlep0oeeht7emfupgno.jpg"
          alt=""
          className="h-4/6 drop-shadow-md rounded-3xl"
        />
        <img
          src="https://demo.themovation.com/stratus/wp-content/uploads/elementor/thumbs/advisor-header-1-psy254mxiixpj1gby1hx4g0wlep0oeeht7emfupgno.jpg"
          alt=""
          className="h-3/6 xl:-mt-32 lg:-mt-32 drop-shadow-md rounded-3xl xl:visible lg:visible hidden"
        />
      </div>
    </section>
  );
};

export default TeamSection;
