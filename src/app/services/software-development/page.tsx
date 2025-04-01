'use client';
import landingban from "../../../assets/Landingthree-banner.png"
import { motion } from "framer-motion";
import Image from "next/image";
import centerimg from "../../../assets/center-img.png"

const Softwaredevelopment = () => {
  return (
    <>
      <div className="relative flex flex-col items-center md:justify-between overflow-hidden  md:py-10">
        {/* Decorative Lines */}
        <Image
          src={centerimg}
          alt="Decorative Lines"
          width={1000}
          height={1000}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl md:max-w-5xl"
        />

        <div className=" relative z-20 flex flex-col items-center justify-center space-y-6 px-6 md:py-14">
          <motion.h1
            className="text-3xl md:text-6xl font-semibold text-center bg-gradient-to-r from-purple-50 via-neutral-400 to-transparent bg-clip-text text-transparent max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Build product of the future with Data
          </motion.h1>
          <motion.p
            className="text-sm md:text-base text-center text-purple-50 max-w-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We are on a mission to build data products that collectively help businesses create products of the future.
          </motion.p>

          <button className="relative inline-block p-px font-semibold leading-6 text-white no-underline bg-[#ffffff44] shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900">

            <div className="relative z-10 flex items-center px-6 py-1 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10">
              <span>START FREE TRIAL</span>
            </div>

          </button>

        </div>

        {/* Background Blur Effect */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-[radial-gradient(circle,_#9146FF_100%,_#97939E_100%)] w-[500px] h-[500px] md:w-[900px] md:h-[1100px] rounded-full opacity-30 blur-3xl z-10"></div>
        </div>

        {/* Hero Image */}
        <div className="relative mt-8 md:mt-10 w-full flex justify-center z-0">
          <Image
            src={landingban}
            alt="Hero Image"
            width={1000}
            height={1000}
            className="w-[90%] md:w-[80%] max-w-xs md:max-w-full"
          />
        </div>
      </div>
    </>
  );
}
export default Softwaredevelopment;