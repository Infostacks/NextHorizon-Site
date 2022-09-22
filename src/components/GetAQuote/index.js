import React from "react";
import AboutProject from "./AboutProject";
import ConnectOurTeam from "./ConnectOurTeam";
import OurOffices from "./OurOffices";

const index = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden pt-20 bg-slate-100">
      <AboutProject />
      <ConnectOurTeam />
      <OurOffices />
    </div>
  );
};

export default index;
