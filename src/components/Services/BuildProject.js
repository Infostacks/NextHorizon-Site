import React from "react";
import styles from "../../utils/GlobalStyles";
import { Link } from "react-router-dom";

const BuildProject = () => {
  return (
    <div className="flex xl:flex-row lg:flex-row flex-col justify-center items-center gap-10 w-screen max-w-screen-lg px-10 h-80">
      <span>
        Schedule a meeting to get consulted about the software development services you need.
      </span>
      <div className="flex flex-col gap-4">
        <h1 className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[2rem] font-semibold">
          Ready to build a project?
        </h1>
        {/* button  */}
        <button className={styles.buttonBlackFull}>
          <Link to="/contact">Schedule Now</Link>
        </button>
      </div>
    </div>
  );
};

export default BuildProject;
