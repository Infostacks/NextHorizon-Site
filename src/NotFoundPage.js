import React, { useEffect } from "react";
import { TbFaceIdError } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFoundPage = () => {
    const navigate = useNavigate();

    useEffect (()=>{
        setTimeout(() => {
            navigate("/");
        }, 6000);
    },[navigate])

  return (
    <div className="flex flex-col gap-20 justify-center items-center w-screen h-[40rem] text-rose-500">

      <div className="text-5xl font-bold">Something went wrong</div>

      <motion.div
        className="text-[5rem] drop-shadow-md rounded-3xl text-black"
        animate={{
          scale: [1, 1.3, 1.3, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 7,
          repeat: Infinity,
        }}
      >
        <TbFaceIdError />
      </motion.div>
      <div className="text-2xl text-slate-800 font-serif">
        Redirecting to Homepage...
      </div>
    </div>
  );
};

export default NotFoundPage;
