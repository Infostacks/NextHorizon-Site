import React from "react";
import { projectsData } from "../../utils/data.js";

const ProjectCard = () => {
  return (
    <div className="py-10 flex flex-row justify-center flex-wrap gap-5 mt-10 w-full overflow-x-hidden bg-slate-100 px-10 max-w-screen-lg">
      {projectsData &&
        projectsData.map((project, index) => {
          return (
            <div className="w-72 drop-shadow-md" key={index}>
              <div className="text-2xl text-white hover:text-orange-600 bg-orange-600 hover:bg-white p-3 mx-28 my-32 w-fit border-4 border-white rounded-sm absolute flex items-center">
                {project.icon}
              </div>
              <div className="h-[">
                <div>
                  <img className="w-full h-40" src={project.img} alt="projectimage" />
                </div>
                <div className="flex flex-col px-3 pt-8 bg-white">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm tracking-wider font-light text-justify">
                    {project.desc.slice(0, 100)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProjectCard;
