'use client';
import landingban from "../../../assets/Landingthree-banner.png"
import { motion } from "framer-motion";
import Image from "next/image";
import centerimg from "../../../assets/center-img.png"
import './software.css'
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
      <section className="software-development-body">
        <section className="jh dg ug mm er at">
          <div className="w">
            <div className="jp hq fr sp sq mq vq">
              <div className="kh jb nm jr fp ip qr">
                <p className="ki ri wi yi">Level up with</p>
                <h2 className="ob mi ri xi gl dn ds ht"><span className="zi dh ah bh ch">Connect apps</span>with CRM</h2>

                <ul className="rb vf hm dl">
                  <li className="ic ef">
                    <div className="jc gf hf md pc yg hg ce">
                      <svg className="id vc xi" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div className="dc">
                      <h3 className="ji ri xi">1200+ Premium Apps</h3>
                      <p className="vb li ri yi">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                  </li>

                  <li className="ic ef">
                    <div className="jc gf hf md pc yg hg ce">
                      <svg className="id vc xi" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                      </svg>
                    </div>
                    <div className="dc">
                      <h3 className="ji ri xi">Control Directly from Dashboard</h3>
                      <p className="vb li ri yi">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                  </li>
                </ul>

                <hr className="rb pg dl"/>

                  <div className="w jc gf hf rb dl kk">
                    <div className="v sj tj hg x ah bh ch rk sk"></div>
                    <a href="#" title="" className="w jc gf hf nh oh li ri xi ug kg og hg" role="button"> Explore More </a>
                  </div>
              </div>

              <div className="ec op gp">
                <div className="w gi fc bn pn qr hp wp">
                  <div className="v gc il ah bh ch qp z wf ms gg"></div>
                  <img className="w fd mj gg yo bp wp aq bq"  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/features/3/dashboard-mockup.png" alt="Inbox user interface"/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
export default Softwaredevelopment;

