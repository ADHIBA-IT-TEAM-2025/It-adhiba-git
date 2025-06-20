'use client';
import landingban from "../../../assets/Landingthree-banner.png"
import Image from "next/image";
import centerimg from "../../../assets/center-img.png"
import './software.css'
import whyus2 from '../../../assets/Animation - 1741936606753.gif';
import whyus3 from '../../../assets/Contact us Banner.png';
import whyus4 from '../../../assets/cardfooter.png';
import whyus5 from '../../../assets/GALLERY (8).png';
import FeatureCarousel from '@/components/ui/feature-carousel';
import { cn } from "@/lib/utils";
import { CardHoverEffectDemo } from "../website-development/Webdev";
import { motion } from "motion/react";

const Softwaredevelopment = () => {
  return (
    <>

      <HeroSectionOne />

      <section className="software-development-body mt-12">
        <section className="jh dg ug mm er at">
          <div className="w">
            <div className="jp hq fr sp sq mq vq">
              <div className="kh jb nm jr fp ip qr">
                <p className="ki ri wi yi">Level up with</p>
                <h2 className="ob mi ri xi gl dn ds ht"><span className="zi dh ah bh ch">Powerful Software Built </span>Results</h2>

                <ul className="rb vf hm dl">
                  <li className="ic ef">
                    <div className="jc gf hf md pc yg hg ce">
                      <svg className="id vc xi" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div className="dc">
                      <h3 className="ji ri xi">Custom Software Solutions</h3>
                      <p className="vb li ri yi">We design and develop software that perfectly aligns with your business needs, ensuring flexibility, scalability, and long-term value.</p>
                    </div>
                  </li>

                  <li className="ic ef">
                    <div className="jc gf hf md pc yg hg ce">
                      <svg className="id vc xi" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                      </svg>
                    </div>
                    <div className="dc">
                      <h3 className="ji ri xi">Agile Development Process</h3>
                      <p className="vb li ri yi">Our agile approach ensures faster delivery, adaptive planning, continuous improvement, and collaboration throughout every phase of development.</p>
                    </div>
                  </li>
                </ul>

                <hr className="rb pg dl" />

                <div className="w jc gf hf rb dl kk">
                  <div className="v sj tj hg x ah bh ch rk sk"></div>
                  <a href="#" title="" className="w jc gf hf nh oh li ri xi ug kg og hg" role="button"> Explore More </a>
                </div>
              </div>

              <div className="ec op gp">
                <div className="w gi fc bn pn qr hp wp">
                  <div className="v gc il ah bh ch qp z wf ms gg"></div>
                  <img className="w fd mj gg yo bp wp aq bq" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/features/3/dashboard-mockup.png" alt="Inbox user interface" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <FeatureCarouselDemo />

    </>
  );
}
export default Softwaredevelopment;

function FeatureCarouselDemo() {
  return (
    <>
      <div className="w-full max-w-5xl mx-auto mt-12">
        <div className="rounded-[34px] bg-neutral-700 p-2">
          <div className="relative z-10 grid w-full gap-8 rounded-[28px] bg-neutral-950 p-2">
            <FeatureCarousel
              title="Interactive Feature Demo"
              description="Showcase your features with smooth animations and transitions"
              step1img1Class={cn(
                "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
                "max-md:scale-[160%] max-md:rounded-[24px] rounded-[24px] left-[25%] top-[57%] md:left-[35px] md:top-[29%]",
                "md:group-hover:translate-y-2"
              )}
              step1img2Class={cn(
                "pointer-events-none w-[60%] border border-stone-100/10 dark:border-stone-700/50 transition-all duration-500 overflow-hidden",
                "max-md:scale-[160%] rounded-2xl max-md:rounded-[24px] left-[69%] top-[53%] md:top-[21%] md:left-[calc(50%+35px+1rem)]",
                "md:group-hover:-translate-y-6"
              )}
              step2img1Class={cn(
                "pointer-events-none w-[50%] rounded-t-[24px] overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
                "max-md:scale-[160%] left-[25%] top-[69%] md:left-[35px] md:top-[30%]",
                "md:group-hover:translate-y-2"
              )}
              step2img2Class={cn(
                "pointer-events-none w-[40%] rounded-t-[24px] border border-stone-100/10 dark:border-stone-700 transition-all duration-500 rounded-2xl overflow-hidden",
                "max-md:scale-[140%] left-[70%] top-[53%] md:top-[25%] md:left-[calc(50%+27px+1rem)]",
                "md:group-hover:-translate-y-6"
              )}
              step3imgClass={cn(
                "pointer-events-none w-[90%] border border-stone-100/10 dark:border-stone-700 rounded-t-[24px] transition-all duration-500 overflow-hidden",
                "left-[5%] top-[50%] md:top-[30%] md:left-[68px]"
              )}
              step4imgClass={cn(
                "pointer-events-none w-[90%] border border-stone-100/10 dark:border-stone-700 rounded-t-[24px] transition-all duration-500 overflow-hidden",
                "left-[5%] top-[50%] md:top-[30%] md:left-[68px]"
              )}
              // Example images
              image={{
                step1light1: whyus5,
                step1light2: whyus5,
                step2light1: whyus5,
                step2light2: whyus5,
                step3light: whyus5,
                step4light: whyus5,
                alt: "Feature demonstration",
              }}
            />
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center mt-15">
        <div className="flex flex-col items-center text-center space-y-4 mb-5">
          <h2 className="text-black dark:text-white text-[40px]">Agile Development Process That Ensures Quality</h2>
          <p className="text-lg text-gray-700 dark:text-gray-400">Fast, adaptive, and collaborative development for better product outcomes.</p>
        </div>
        <CardHoverEffectDemo />
      </div>
    </>

  )
}


function HeroSectionOne() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Building Scalable, Efficient Software Solutions"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          We deliver custom software solutions that enhance efficiency, scalability, and innovation for your business growth.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="/gallery" className="w-60 transform rounded-full bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-center block">
            Explore Now
          </a>

          <a href="/getintouch" className="w-60 transform rounded-full border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 text-center block">
            Contact Support
          </a>

        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <img
              src="https://assets.aceternity.com/pro/aceternity-landing.webp"
              alt="Landing page preview"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
