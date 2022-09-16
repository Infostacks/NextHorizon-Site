import React from "react";

const MemberLogin = () => {
  return (
    <section
      id="login"
      className="bg-white py-32 mt- w-full overflow-x-hidden"
    >
      <div className="max-w-screen-md px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center flex xl:flex-row lg:flex-row flex-col gap-10 mb-10">
          <p className="mt-4 text-gray-600 xl:text-3xl lg:text-3xl text-xl">
            Are you already a member?
          </p>
          <h2 className="text-slate-800 xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold">
            Login
          </h2>
        </div>

        <div className="flex xl:flex-row lg:flex-row md:flex-col gap-10">
          <blockquote className="flex flex-col justify-between p-6 -mt-6 w-full text-center rounded-lg shadow-xl">
            <div className="flex flex-col p-0 gap-3 items-center">
              <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col w-full gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  className="text-gray-600 font-light p-2 rounded-md border-[1px] border-gray-400 focus:outline-none bg-gray-100 font-xs w-full"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="ext-gray-600 font-light p-2 rounded-md border-[1px] border-gray-400 focus:outline-none bg-gray-100 font-xs w-full"
                />
              </div>

              {/* Login button */}
              <button className="hover:bg-[#08080cff] text-[#D90429] py-2 px-10 rounded-full drop-shadow-md hover:shadow-inner hover:text-white border-[1px] hover:border-[#252627] border-[#D90429] w-fit opacity-50 hover:opacity-100 transition-opacity duration-700">
                Login
              </button>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default MemberLogin;
