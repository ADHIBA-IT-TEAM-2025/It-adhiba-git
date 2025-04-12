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

export default function Appdevelopment() {
  return (
    <>
      <Parallaloppimg />
    </>
  );
}


// landing
export function Parallaloppimg() {
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

