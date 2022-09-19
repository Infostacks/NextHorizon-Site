import React from "react";

const ModernWebapps = () => {
  return (
    <section className="bg-slate-100 w-screen flex flex-col gap-10 items-center justify-center py-20 overflow-x-hidden xl:px-0 lg:px-0 px-10">
      {/* top section  */}
      <div className="max-w-screen-lg flex items-center xl:px-10 flex-col gap-5">
        {/* Text intro  */}
        <h2 className="xl:text-7xl lg:text-7xl md:text-4xl text-3xl text-center font-bold tracking-tight">
          Modern web apps and websites
        </h2>

        <div className="max-w-lg mt-4 xl:text-xl lg:text-xl text-base tracking-wide">
          We offer web app development services of any complexity for startups,
          mid-sized companies, and enterprises. Looking out for trends and the
          latest technologies, we monitor performance and work towards
          continuous improvement and optimization of web products.
        </div>
      </div>

      {/* awards  */}
      <div className="max-w-screen-lg flex flex-row flex-wrap items-center justify-center w-full gap-5 xl:text-3xl lg:text-3xl text-xl font-semibold">
        <span>Accessible</span>
        <span>Performant</span>
        <span>Responsive</span>
        <span>Secure</span>
      </div>
    </section>
  );
};

export default ModernWebapps;
