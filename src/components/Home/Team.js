import React from "react";
import { team } from "../../utils/data";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";

const Team = () => {
  return (
    <div>
      <section className="w-screen overflow-x-hidden bg-gray-900 bg-opacity-95">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl text-slate-50 font-bold sm:text-4xl">CHECK OUR TEAM</h2>
            <p className="mt-4 text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((item, index) => {
              return (
                <div key={index}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="object-cover w-40 h-40 mx-auto rounded-full shadow-xl"
                  />

                  <blockquote className="flex flex-col justify-between p-6 -mt-6 text-center rounded-lg shadow-xl">
                    <div
                      className="mt-6 block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-[#D90429]/10 hover:border-[#D90429]/10"
                    >
                      <h3 className="mt-4 text-xl font-bold text-white">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-300">
                        {item.designation}
                      </p>

                      {/* icons  */}
                      <div className="flex flex-row justify-center items-center gap-2">
                        <div className="bg-violet-100 p-3 rounded-full text-slate-900 hover:bg-[#D90429] hover:text-white hover:cursor-pointer">
                          <GrFacebookOption />
                        </div>
                        <div className="bg-violet-100 p-3 rounded-full text-slate-900 hover:bg-[#D90429] hover:text-white hover:cursor-pointer">
                          <FaInstagram />
                        </div>
                        <div className="bg-violet-100 p-3 rounded-full text-slate-900 hover:bg-[#D90429] hover:text-white hover:cursor-pointer">
                          <GrTwitter />
                        </div>
                      </div>
                    </div>
                  </blockquote>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
