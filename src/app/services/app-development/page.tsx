'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import { cn } from '@/lib/utils';
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from '@tabler/icons-react';
import whyus2 from '../../../assets/Animation - 1741936606753.gif';
import whyus3 from '../../../assets/Contact us Banner.png';
import whyus4 from '../../../assets/cardfooter.png';
import whyus5 from '../../../assets/GALLERY (8).png';
import FeatureCarousel from '@/components/ui/feature-carousel';
import { HeroHighlight, Highlight } from "../../../components/ui/feature-carousel1";
import parallaloppimg from "../../../assets/parallal-opp-card.png"
import '../software-development/software.css'
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import videoimg1 from '../../../assets/GALLERY (12).png';
import mobileimg1 from '../../../assets/App_Development-image-1.webp';
import Rightimg from "../../../assets/Web-dev/rightt-img.png"
import cardRightimg from "../../../assets/Web-dev/card-right-img.png"

export default function Appdevelopment() {
  return (
    <>
      {/* <Mobileview /> */}
      <Parallaloppimg />
      <Appdevbodydesign />
      <Example />

    </>
  );
}


// landing
function Parallaloppimg() {
  return (
    <>
      <section>
        <div className="mt-12 relative z-20 flex flex-col items-center justify-center space-y-6 px-6 md:py-14">
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
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-[radial-gradient(circle,_#9146FF_100%,_#97939E_100%)] w-[500px] h-[500px] md:w-[900px] md:h-[1100px] rounded-full opacity-30 blur-3xl">
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <Image src={parallaloppimg} alt="" style={{ padding: "30px" }} /></div>
          <div className="w-full lg:w-1/2">
            <Image src={parallaloppimg} alt="" style={{ padding: "30px" }} /></div>
        </div>
      </section>

      <section className="app-development-section mt-12">
        <section className="w qf eg">
          <div className="v ab db le ke in jn tp eq">
            <svg className="ri oi" style={{ filter: 'blur(64px)' }} width="644" height="411" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M180.781 217.613C85.977 122.809-63.572 134.004 31.232 39.2c94.804-94.804 495.712 1.312 590.516 96.116 94.804 94.804-152.396 152.395-247.2 247.199s-98.963-70.098-193.767-164.902Z" fill="url(#b)" />
              <defs>
                <linearGradient id="b" x1="663.883" y1="177.451" x2="295.437" y2="472.757" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" style={{ stopColor: 'var(--color-cyan-500)' }} />
                  <stop offset="100%" style={{ stopColor: 'var(--color-purple-500)' }} />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="v y">
            <img
              className="pg xc lc ki ni"
              src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
              alt=""
            />
          </div>

          <div className="w ug hb id kl oo">
            <div className="fc re co ho">
              <div className="gh rl xo">
                <h2 className="oh th zh tl ep cq">Become an early adopter of our app.</h2>
                <p className="qb ph th zh ck yl">Keep control on your projects. Don't make the mistakes again & again.</p>
                <p className="pb ph th zh yl dk">Join Landingfolio to:</p>
                <ul className="ob mf">
                  <li className="cc ve ph th di">
                    <span className="ac ph">💸</span> Get 10 Web & Mobile UI Inspirations Every Week
                  </li>
                  <li className="cc ve ph th di">
                    <span className="ac ph">🎁</span> Exclusive Discount on Design Resources
                  </li>
                  <li className="cc ve ph th di">
                    <span className="ac ph">⌛️</span> 3 Random Subscribers will Get Featured on Emails
                  </li>
                </ul>

                <div className="cc te xe ye pb if dm sk cl dl vk">
                  <a href="#" title="App Store" className="w cc ti ui le yi" role="button">
                    <div className="v tf kg lg mg x"></div>
                    <img
                      className="w vc tf nc hm un"
                      src="https://landingfoliocom.imgix.net/store/collection/dusk/images/application/2/app-store-button.svg"
                      alt="App Store"
                    />
                  </a>
                  <a href="#" title="Play Store" className="w cc ti ui le yi" role="button">
                    <div className="v tf kg lg mg x"></div>
                    <img
                      className="w vc tf nc hm un"
                      src="https://landingfoliocom.imgix.net/store/collection/dusk/images/application/2/play-store-button.svg"
                      alt="Play Store"
                    />
                  </a>
                </div>
              </div>

              <div className="pf jb sn">
                <img
                  className="xc md hb le up xn"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cta/4/phone-in-hand-mockup.png"
                  alt="Phone in Hand Mockup"
                />
              </div>
            </div>
          </div>
        </section>
      </section>

    </>
  )
}

// llanding
// const Mobileview = () => {
//   return (

//   );
// };

const Example = () => {
  return (
    <section className="grid place-content-center bg-neutral-900 p-12">
      <FloatingPhone />
    </section>
  );
};

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-[#313985]"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      {/* Example logo from logoispum */}
      <svg
        width="50"
        height="39"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-[#313985]"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#000000"
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#000000"
        ></path>
      </svg>

      <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-sm font-medium text-[#313985] backdrop-blur">
        Get Started WITH ADHIBA
      </button>

      {/* <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-[#313985]" /> */}
      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-[#313985]" />
    </div>
  );
};

export function Appdevbodydesign() {
  return (
    <>
      <section className="overflow-hidden">
        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 flex flex-col justify-center">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Advanced Controls
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Built for modern product teams
            </h2>
            <p className="text-lg text-indigo-200/65">
              Open AI reads and understands your files, and with nothing more
              than a single line of feedback, so you can go further than the
              speed of thought.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row mx-auto text-center">
            <a href="#_">
              <Image src={cardRightimg} className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-[25vh] w-full object-cover hover:scale-150 transform origin-bottom" alt="#_" />
              <hr style={{ width: "50%" }} />
              <h1 className="mt-15">Nystai.com</h1></a>
            <a href="#_">
              <Image src={cardRightimg} className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-[25vh] w-full object-cover hover:scale-150 transform origin-bottom" alt="#_" />
              <hr style={{ width: "50%" }} />
              <h1 className="mt-15">Istretail.com</h1> </a>
            <a href="#_">
              <Image src={cardRightimg} className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-[25vh] w-full object-cover hover:scale-150 transform origin-bottom" alt="#_" />
              <hr style={{ width: "50%" }} />
              <h1 className="mt-15">Adhiba.com</h1> </a>
            <a href="#_">
              <Image src={cardRightimg} className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-[25vh] w-full object-cover hover:scale-150 transform origin-bottom" alt="#_" />
              <hr style={{ width: "50%" }} />
              <h1 className="mt-15">Glocre.com</h1> </a>
          </div>
        </div>
      </section>
      <div className="relative overflow-hidden xl:pt-40 mb-20">
        <div className="relative">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="text-left md:max-w-xl md:mx-auto md:text-center">
              <h1 className="tracking-tighter text-white">
                <span className="font-serif italic font-normal text-8xl">App Development</span>
              </h1>
              <p className="mt-5 font-sans text-base font-normal leading-7 text-white text-opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus pellentesque dolor consequat ligula egestas massa gravida. Porttitor venenatis enim praesent.</p>
              <div className="mt-8">
                <a
                  href="#"
                  title=""
                  className="
                            inline-flex
                            items-center
                            justify-center
                            px-8
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            transition-all
                            duration-200
                            border-2 border-transparent
                            rounded-full
                            sm:leading-8
                            bg-white
                            sm:text-lg
                            text-black
                            hover:bg-opacity-90
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                        "
                  role="button"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-5xl px-6 mx-auto mt-12 -mb-8 group sm:px-8 lg:px-12 sm:-mb-24 lg:-mb-36 xl:-mb-40">
          <div className="overflow-hidden rounded-md aspect-w-4 aspect-h-3 lg:aspect-w-16 lg:aspect-h-9">
            <Image className="object-cover w-full h-full transition-all duration-300 group-hover:opacity-80" src={videoimg1} alt="" style={{ borderRadius: "10px" }} />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <button type="button" className="flex flex-col items-center">
              <span className="inline-flex items-center justify-center w-16 h-16 transition-all duration-200 border-2 rounded-full text-white border-primary hover:bg-white hover:bg-opacity-20">

              </span>
              <span className="mt-5 text-base font-normal text-white"> Play trailer </span>
            </button>
          </div>
        </div>
      </div>
      <section className="py-12 sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center max-w-5xl grid-cols-1 mx-auto gap-y-8 lg:grid-cols-5 gap-x-16">
            <div className="max-w-md mx-auto text-center lg:max-w-none lg:col-span-3">
              <h1 className="text-4xl font-normal text-white uppercase sm:text-5xl lg:text-7xl xl:text-7xl">Get goods <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">delivered</span></h1>
              <p className="mt-6 font-[17px] text-white sm:text-xl" >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam.</p>
              <div className="mt-8 sm:mt-10">
                <a href="#" title="" className="inline-flex items-center justify-center px-8 py-4 text-base font-normal text-white transition-all duration-200 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:contrast-150" role="button"> Download Now </a>
              </div>

              <p className="max-w-xs mx-auto mt-4 text-base font-normal text-gray-400 sm:mt-8">
                30 days free trial.<br />
                then plans start at $9.99
              </p>
            </div>

            <div className="lg:col-span-2 lg:order-first">
              <Image className="w-full max-w-sm mx-auto" src={mobileimg1} alt="" />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

