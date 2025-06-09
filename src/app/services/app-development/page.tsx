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
      <Parallaloppimg />
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
            className="text-3xl md:text-6xl font-semibold text-center bg-gradient-to-r from-purple-50 via-neutral-400 to-transparent bg-clip-text text-transparent max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Custom App Development for Businesses
          </motion.h1>
          <motion.p
            className="text-sm md:text-base text-center text-purple-50 max-w-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
           We design and develop apps that deliver seamless performance and intuitive user experiences.


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

      
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold leading-[3.25rem] mb-6 text-gray-900 dark:text-white lg:max-w-3xl mx-auto">
              Built from the ground up for Digital excellence
            </h2>
            <p className="text-base font-normal text-gray-500 dark:text-gray-300 lg:max-w-2xl mx-auto mb-8">
              Empowering businesses with custom web solutions that are fast, flexible, and future-ready.
            </p>
            <div className="flex flex-col justify-center md:flex-row gap-5 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
              <a
                href="javascript:;"
                className="cursor-pointer bg-indigo-600 py-3 px-6 rounded-full flex items-center justify-center text-sm font-semibold text-white transition-all duration-500 focus:outline-none hover:bg-indigo-700"
              >
                Get started
              </a>
              <a
                href="javascript:;"
                className="cursor-pointer bg-indigo-50 dark:bg-gray-700 py-3 px-6 rounded-full flex items-center justify-center text-sm font-semibold text-indigo-600 dark:text-white transition-all duration-500 focus:outline-none hover:bg-indigo-100 dark:hover:bg-gray-600"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Grid section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
            {/* Main feature */}
            <div className="relative w-full h-auto md:col-span-2">
              <div className="bg-gray-800 dark:bg-gray-900 rounded-2xl flex flex-wrap">
                <div className="p-5 xl:p-8 w-full md:w-1/2">
                  <div className="block">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 12.5V18.75M18.75 2.5L11.25 2.5M15 28.75C8.7868 28.75 3.75 23.7132 3.75 17.5C3.75 11.2868 8.7868 6.25 15 6.25C21.2132 6.25 26.25 11.2868 26.25 17.5C26.25 23.7132 21.2132 28.75 15 28.75Z"
                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold xl:text-xl text-white py-5 w-full xl:w-64">
                  Custom Solutions for Every Business
                  </h3>
                  <p className="text-xs font-normal text-gray-300 w-full mb-8 xl:w-64">
                  We build scalable websites tailored to your unique goals and audience needs.
                  </p>
                  <button className="py-2 px-5 border border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                    View More
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                        stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="relative hidden md:block md:w-1/2">
                  <img
                    src="https://pagedone.io/asset/uploads/1695028873.png"
                    alt="Header"
                    className="h-full object-cover rounded-r-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Secondary features */}
            <div className="relative w-full h-auto">
              <div className="bg-indigo-500 rounded-2xl p-5 xl:p-8 h-full">
                <div className="block">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M24.6429 11.4286C24.6429 14.3872 20.2457 16.7857 14.8214 16.7857C9.3972 16.7857 5 14.3872 5 11.4286M24.6429 16.7857C24.6429 19.7444 20.2457 22.1429 14.8214 22.1429C9.3972 22.1429 5 19.7444 5 16.7857M24.6429 22.1429C24.6429 25.1015 20.2457 27.5 14.8214 27.5C9.3972 27.5 5 25.1015 5 22.1429M24.6429 6.96429C24.6429 9.42984 20.2457 11.4286 14.8214 11.4286C9.3972 11.4286 5 9.42984 5 6.96429C5 4.49873 9.3972 2.5 14.8214 2.5C20.2457 2.5 24.6429 4.49873 24.6429 6.96429Z"
                      stroke="white" strokeWidth="2" strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="py-5 text-white text-lg font-bold xl:text-xl">Fast Websites on All Devices
                </h3>
                <p className="text-xs font-normal text-white mb-8">Optimized for speed and responsiveness to provide smooth user experiences everywhere.</p>
                <button className="py-2 px-5 border border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                  View More
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                      stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="relative w-full h-auto">
              <div className="bg-violet-500 rounded-2xl p-5 xl:p-8 h-full">
                <div className="block">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M26.7301 15.661C26.7301 22.1995 21.306 27.5 14.6151 27.5C7.9241 27.5 2.5 22.1995 2.5 15.661C2.5 9.1225 7.9241 3.822 14.6151 3.822M18.1313 10.1507L18.1313 4.85383C18.1313 3.22503 19.6455 2.00299 21.1519 2.70013C23.7608 3.90751 26.6177 6.25557 27.456 10.2563C27.7542 11.6798 26.4931 12.8563 25.0064 12.8368L20.7873 12.7814C19.3147 12.762 18.1313 11.5899 18.1313 10.1507Z"
                      stroke="white" strokeWidth="2" strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="py-5 text-white text-lg font-bold xl:text-xl">Secure Code Protects Your Data</h3>
                <p className="text-xs font-normal text-white mb-8">Following best practices to keep your site safe and users confident always.</p>
                <button className="py-2 px-5 border border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                  View More
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                      stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
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
                <h2 className="oh th zh tl ep cq">Innovative Solutions to Drive Success</h2>
                <p className="qb ph th zh ck yl">Empowering your business with technology that’s fast, flexible, and reliable.</p>
                <p className="pb ph th zh yl dk">Join Landingfolio to:</p>
                <ul className="ob mf">
                  <li className="cc ve ph th di">
                    <span className="ac ph">💸</span>Seamless Integration Made Simple
                  </li>
                  <li className="cc ve ph th di">
                    <span className="ac ph">🎁</span>User Experience at Core
                  </li>
                  <li className="cc ve ph th di">
                    <span className="ac ph">⌛️</span>Reliable Support and Maintenance
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

      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full"
          >
            <div className="w-full lg:w-1/2">
              <img
                src="https://www.creativefabrica.com/wp-content/uploads/2022/10/24/SmartPhone-Mockup-Graphics-43084841-1.jpg"
                alt="FAQ tailwind section"
                className="w-full rounded-xl object-cover"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-xl">
                <div className="mb-6 lg:mb-16">
                  <h6 className="text-lg text-center font-medium text-indigo-600 mb-2 lg:text-left">
                    faqs
                  </h6>
                  <h2
                    className="text-4xl text-center font-bold text-gray-900 dark:text-white leading-[3.25rem] mb-5 lg:text-left"
                  >
                    Looking for answers?
                  </h2>
                </div>

                <div className="accordion-group" data-accordion="default-accordion">

                  <div className="accordion pb-8 border-b border-gray-200 dark:border-gray-700 active">
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 dark:text-gray-300 w-full transition duration-500 hover:text-indigo-600 dark:hover:text-indigo-400 accordion-active:text-indigo-600 accordion-active:font-medium"
                    >
                      <h5>How do I start app development?</h5>
                      <svg
                        className="text-gray-900 dark:text-white transition duration-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 accordion-active:rotate-180"
                        width="22"
                        height="22"
                        fill="none"
                        viewBox="0 0 22 22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                     
                      </svg>
                    </button>
                    <div className="accordion-content w-full px-0 overflow-hidden pr-4 active" style={{maxHeight: "100px;"}}>
                      <p className="text-base font-normal text-gray-600 dark:text-gray-400">
                        To begin, contact us via the inquiry form or call. We discuss your requirements, plan the project, and start designing your custom app solution.
                      </p>
                    </div>
                  </div>
                  <div className="accordion py-8 border-b border-gray-200 dark:border-gray-700">
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 dark:text-gray-300 w-full transition duration-500 hover:text-indigo-600 dark:hover:text-indigo-400 accordion-active:font-medium"
                    >
                      <h5>Can I trust your development process?</h5>
                      <svg
                        className="text-gray-900 dark:text-white transition duration-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 accordion-active:rotate-180"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                     
                      </svg>
                    </button>
                    <div className="accordion-content w-full px-0 overflow-hidden pr-4">
                      <p className="text-base font-normal text-gray-600 dark:text-gray-400">
                       Absolutely! We follow industry best practices, maintain transparent communication, and ensure your app is delivered on time with full quality assurance.
                      </p>
                    </div>
                  </div>

                  <div className="accordion py-8 border-b border-gray-200 dark:border-gray-700">
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 dark:text-gray-300 w-full transition duration-500 hover:text-indigo-600 dark:hover:text-indigo-400 accordion-active:font-medium"
                    >
                      <h5>How do I request changes or updates?</h5>
                      <svg
                        className="text-gray-900 dark:text-white transition duration-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 accordion-active:rotate-180"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                     
                      </svg>
                    </button>
                    <div className="accordion-content w-full px-0 overflow-hidden pr-4">
                      <p className="text-base font-normal text-gray-600 dark:text-gray-400">
                        You can request updates anytime through our support portal or email. We prioritize your feedback to continuously improve your app.
                      </p>
                    </div>
                  </div>

              
                  <div className="accordion py-8">
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 dark:text-gray-300 w-full transition duration-500 hover:text-indigo-600 dark:hover:text-indigo-400 accordion-active:font-medium"
                    >
                      <h5>What is the payment process?</h5>
                      <svg
                        className="text-gray-900 dark:text-white transition duration-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 accordion-active:rotate-180"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                     
                      </svg>
                    </button>
                    <div className="accordion-content w-full px-0 overflow-hidden pr-4">
                      <p className="text-base font-normal text-gray-600 dark:text-gray-400">
                       Payments are made via secure channels, typically in milestones. You receive invoices and receipts for every transaction for full transparency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}


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


