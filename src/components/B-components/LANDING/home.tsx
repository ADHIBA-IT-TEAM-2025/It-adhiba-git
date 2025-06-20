'use client';
import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import '../../../styles/home.css';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Marquee } from '../../magicui/marquee';
import { AnimatedShinyText } from '../../magicui/animated-shiny-text';
import { InteractiveHoverButton } from '@/components/eldoraui/interactivebutton';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { ReactNode } from 'react';
import { Transition } from '@headlessui/react';
import '../../../styles/home.css';
import { Sparkles } from '../../magicui/Sparkles';
import whyus from '../../../assets/testiimg.jpg';
import {
  Code,
  TrendingUp,
  Cloud,
  Server,
  Terminal,
  Brush,
  PhoneOutgoing,
} from 'lucide-react';
import { AnimatedList } from '@/components/magicui/animated-list';
import Workflows from '../../shadcn/ui/workflows';
import Link from 'next/link';
// MAIN
export default function Landingit() {
  return (
    <>
      <Landing />
      <Index />
      <FeaturesSection />
      <Whatweoffer />
      <Whyus />
    </>
  );
}

// landing design

const ReviewCard = ({
  icon,
  name,
  body,
}: {
  icon: ReactNode;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        'relative h-full w-64 cursor-pointer overflow-hidden rounded-2xl border p-4',
        // Light mode styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // Dark mode styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* Icon */}
        <div className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full">
          {icon}
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

function Landing() {

  const reviews = [
    {
      name: 'Web Development',
      username: '@jack',
      body: 'Custom websites, optimized for user experience.',
      icon: <Code />, // Web development icon
    },
    {
      name: 'Digital Marketing',
      username: '@jill',
      body: 'Traffic-boosting strategies to enhance brand visibility.',
      icon: <TrendingUp />, // Digital Marketing icon
    },
    {
      name: 'Cloud Hosting',
      username: '@john',
      body: 'Secure, scalable cloud solutions for optimal performance.',
      icon: <Cloud />, // Cloud Hosting icon
    },
    {
      name: 'Web Hosting',
      username: '@jane',
      body: 'Reliable hosting solutions for high-performance websites.',
      icon: <Server />, // Web Hosting icon
    },
    {
      name: 'Software Development',
      username: '@jenny',
      body: 'Custom software to streamline operations and improve efficiency.',
      icon: <Terminal />, // Software Development icon
    },
    {
      name: 'UI/UX',
      username: '@jenny1',
      body: 'Our UI/UX designs enhance user satisfaction on functionality.',
      icon: <Brush />, // UI/UX Design icon
    },
  ];


  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center justify-center mt-6"
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.3 },
            },
          }}
          className="text-center m-5 flex flex-col items-center justify-center"
        >
          <div className="z-10 flex min-h-20 items-center justify-center">
            <div
              className={cn(
                'group rounded-full border border-black/5 bg-[#ffffff25] transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 text-[#00000070] dark:text-[#ffffff70]">
                <span>✨ Adhiba IT Solutions</span>
              </AnimatedShinyText>

            </div>
          </div>

          <motion.h3
            className="py-5 text-4xl font-medium leading-none tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-7xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] text-[#000000cc] dark:text-[#ffffffcc]"
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            Building the Future <br className="hidden md:block" />
            of Digital Innovation
          </motion.h3>


          <motion.p
            className="tracking-tight text-gray-400 md:text-lg text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]"
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 1.2 } },
            }}
          >
            We design, develop, and deliver high-quality digital solutions <br /> that empower businesses to grow, scale, and lead.

          </motion.p>

          <div className="relative justify-center mx-auto mt-12 mb-12">
            <Link  href="/getintouch">
              <InteractiveHoverButton />
            </Link>
          </div>
        </motion.div>

        {/* Marquee Section */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden ">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map(review => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map(review => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </motion.section>
    </>
  );
}

// TESTIMONEAL

// whyus
interface Testimonial {
  quote: string;
  img: StaticImageData | string;
  name: string;
  role: string;
}

function Whyus() {
  const testimonials: Testimonial[] = [
    {
      quote: 'Delivered exactly what we needed, on time and perfectly!',
      img: whyus,
      name: 'John Doe',
      role: 'CEO, Company',
    },
    {
      quote: 'Exceptional design and development—professional, reliable, and fast.',
      img: whyus,
      name: 'Jane Smith',
      role: 'Marketing Manager, Company',
    },
    {
      quote: 'Our website looks amazing and functions beautifully now.',
      img: whyus,
      name: 'John Doe',
      role: 'CEO, Company',
    },
    {
      quote: 'They understood our vision and brought it to life.',
      img: whyus,
      name: 'Jane Smith',
      role: 'Marketing Manager, Company',
    },
    {
      quote: 'Great experience, responsive team, and flawless project execution.',
      img: whyus,
      name: 'John Doe',
      role: 'CEO, Company',
    },
    {
      quote: 'Highly recommend them for any digital development needs!',
      img: whyus,
      name: 'Jane Smith',
      role: 'Marketing Manager, Company',
    },
  ];

  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const autorotateTiming: number = 5000;

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(prev => (prev + 1 === testimonials.length ? 0 : prev + 1));
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate, testimonials.length]);

  const heightFix = () => {
    if (testimonialsRef.current?.parentElement) {
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
    }
  };

  useEffect(() => {
    heightFix();
  }, []);
  return (
    <>
   
    </>
  );
}

// Four card
function Whatweoffer() {
  const Offerimages = [
    {
      src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      src: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      src: 'https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      src: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  return (
    <>
      {/* What we offer */}
      <div className="four-card-it mx-auto max-w-[1300px] flex justify-center items-center">
        <div className="styles_container__IFQFq mx-auto flex flex-col lg:flex-row items-center p-5 pt-0">
          {/* Left Content */}
          <div className="lg:w-1/2 w-full">
            <div className="styles_content__4BIdk">
              <div className="styles_eyebrow__Zrgyh">
                <div className="styles_eyebrow__ExZzW text-indigo-700 dark:text-indigo-300">
                  Smart Development
                </div>
              </div>
              <h2 className="text-4xl sm:text-4xl font-extrabold text-indigo-700 dark:text-indigo-300">
                Smart Solutions for
                <br /> Web Success
              </h2>


              <div className="styles_text__G73wT">
                From initial research to final delivery, we craft custom web solutions that are fast, responsive, and user-focused. Our process combines strategic thinking, clean design, and robust development to create websites that not only look great but drive real business results.
              </div>
              <div className="styles_grid__byXtd grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                {/* Card Items */}
                <div>
                  <h3 className="styles_gridTitle__8_JqM flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-brush"
                    >
                      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"></path>
                      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"></path>
                    </svg>
                    Research
                  </h3>
                  <p className="styles_gridCopy__cfHwU">
                    We analyze your goals, audience, and competitors to uncover insights that guide smarter development and strategic digital solutions.
                  </p>
                </div>
                <div>
                  <h3 className="styles_gridTitle__8_JqM flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-monitor-smartphone"
                    >
                      <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path>
                      <path d="M10 19v-3.96 3.15"></path>
                      <path d="M7 19h5"></path>
                      <rect width="6" height="10" x="16" y="12" rx="2"></rect>
                    </svg>
                    Sketching
                  </h3>
                  <p className="styles_gridCopy__cfHwU">
                    We transform ideas into wireframes and interactive layouts to visualize structure, content flow, and user interactions early on.
                  </p>
                </div>
                <div>
                  <h3 className="styles_gridTitle__8_JqM flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-plug"
                    >
                      <path d="M12 22v-5"></path>
                      <path d="M9 8V2"></path>
                      <path d="M15 8V2"></path>
                      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path>
                    </svg>
                    Development
                  </h3>
                  <p className="styles_gridCopy__cfHwU">
                    Our skilled developers build secure, responsive, and scalable websites using the latest technologies and best industry practices.
                  </p>
                </div>
                <div>
                  <h3 className="styles_gridTitle__8_JqM flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-expand"
                    >
                      <path d="m15 15 6 6"></path>
                      <path d="m15 9 6-6"></path>
                      <path d="M21 16.2V21h-4.8"></path>
                      <path d="M21 7.8V3h-4.8"></path>
                      <path d="M3 16.2V21h4.8"></path>
                      <path d="m3 21 6-6"></path>
                      <path d="M3 7.8V3h4.8"></path>
                      <path d="M9 9 3 3"></path>
                    </svg>
                    Final Product
                  </h3>
                  <p className="styles_gridCopy__cfHwU">
                    The result is a fast, functional, and visually stunning website that’s optimized for performance, usability, and future growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Animated Testimonials */}
          <div className="lg:w-1/2 w-full flex justify-center">
            {/* <AnimatedTestimonials testimonials={Offerimages} autoplay={true} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

// SParkles 
function Index() {
  return (
    <>

      <section id="process" className="mt-12 mb-12 px-6 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light tracking-tight pb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="border-t border-zinc-700 pt-6">
              <span className="text-zinc-500 text-sm">01</span>
              <h3 className="text-xl mt-2 mb-4"> Speed</h3>
              <p className="text-zinc-400">
                Experience ultra-fast performance with optimized servers that ensure quick load times and smooth user experiences worldwide.
              </p>
            </div>
            <div className="border-t border-zinc-700 pt-6">
              <span className="text-zinc-500 text-sm">02</span>
              <h3 className="text-xl mt-2 mb-4">Security</h3>
              <p className="text-zinc-400">
                Your data is protected with industry-grade encryption, firewalls, and regular monitoring to prevent breaches and threats.
              </p>
            </div>
            <div className="border-t border-zinc-700 pt-6">
              <span className="text-zinc-500 text-sm">03</span>
              <h3 className="text-xl mt-2 mb-4">Uptime</h3>
              <p className="text-zinc-400">
                We guarantee 99.9% uptime with redundant systems, so your website stays online without interruptions or downtime issues.
              </p>
            </div>
            <div className="border-t border-zinc-700 pt-6">
              <span className="text-zinc-500 text-sm">04</span>
              <h3 className="text-xl mt-2 mb-4">Support</h3>
              <p className="text-zinc-400">
                Our expert support team is available 24/7 to assist with technical issues, updates, and hosting-related concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-fit overflow-hidden bg-black">
        <div className="mx-auto mt-12 w-fit max-w-2xl">
          <div className="text-center text-3xl">
            <span className="text-indigo-200">
              Clients Believe in
            </span>
            <br />
            <span className="text-white">
              Our Expertise
            </span>
          </div>


          <div className="mt-14 grid grid-cols-4">
            <svg viewBox="0 0 180 56" fill="currentColor" className="w-full">
              <path
                d="M34 18.2a2.2 2.2 0 012.2-2.2h8.6a2.2 2.2 0 012.2 2.2v1.7a1.1 1.1 0 01-1.1 1.1H35.1a1.1 1.1 0 01-1.1-1.1v-1.7zM34 25.1a1.1 1.1 0 011.1-1.1h20.7a2.2 2.2 0 012.2 2.2v5.7a1.1 1.1 0 01-1.1 1.1H36.2a2.2 2.2 0 01-2.2-2.2v-5.7zM45 37.1a1.1 1.1 0 011.1-1.1h10.8a1.1 1.1 0 011.1 1.1v.7a2.2 2.2 0 01-2.2 2.2h-8.6a2.2 2.2 0 01-2.2-2.2v-.7zM71.596 30.741h2.311l4.293 7.017h5.256l-4.76-7.512c2.641-.909 4.182-2.945 4.182-5.89 0-4.127-2.89-6.356-7.54-6.356H67v19.758h4.596v-7.017zm0-3.742V21.88h3.494c2.174 0 3.275.936 3.275 2.56 0 1.595-1.1 2.558-3.275 2.558h-3.494zM91.363 38.06c2.89 0 5.531-1.458 6.605-4.237L94.28 32.64c-.413 1.266-1.486 1.926-2.862 1.926-1.678 0-2.862-1.128-3.164-3.11h9.824v-1.155c0-4.1-2.395-7.348-6.797-7.348-4.183 0-7.265 3.247-7.265 7.54 0 4.513 2.972 7.568 7.347 7.568zm-.138-11.694c1.624 0 2.477 1.1 2.505 2.394H88.39c.44-1.596 1.486-2.394 2.834-2.394zM100.573 33.878c0 2.972 1.569 4.018 4.706 4.018 1.046 0 1.871-.083 2.642-.193v-3.605c-.496.055-.743.083-1.266.083-1.101 0-1.734-.22-1.734-1.431v-5.862h2.834v-3.632h-2.834v-4.018h-4.348v4.018h-1.844v3.632h1.844v6.99zM123.672 30.52c0-4.512-3-7.567-7.265-7.567-4.293 0-7.265 3.055-7.265 7.568s2.972 7.54 7.265 7.54c4.265 0 7.265-3.027 7.265-7.54zm-10.154 0c0-2.53 1.128-3.962 2.889-3.962s2.89 1.431 2.89 3.963-1.129 3.962-2.89 3.962c-1.761 0-2.889-1.43-2.889-3.962zM139.527 30.52c0-4.512-2.999-7.567-7.265-7.567-4.293 0-7.265 3.055-7.265 7.568s2.972 7.54 7.265 7.54c4.266 0 7.265-3.027 7.265-7.54zm-10.154 0c0-2.53 1.128-3.962 2.889-3.962 1.762 0 2.89 1.431 2.89 3.963s-1.128 3.962-2.89 3.962c-1.761 0-2.889-1.43-2.889-3.962zM146 18h-4.403v19.758H146V18z"
                fill="#fff"
              ></path>
            </svg>
            <svg viewBox="0 0 180 54" fill="currentColor" className="w-full">
              <path
                d="M89.515 20.5c-4.424 0-7.614 2.925-7.614 7.313 0 4.387 3.59 7.312 8.014 7.312 2.673 0 5.03-1.072 6.488-2.88l-3.066-1.796c-.81.898-2.04 1.422-3.422 1.422-1.919 0-3.55-1.016-4.155-2.64h11.228c.088-.456.14-.927.14-1.423 0-4.383-3.19-7.308-7.613-7.308zm-3.791 5.89c.5-1.62 1.871-2.64 3.787-2.64 1.919 0 3.29 1.02 3.786 2.64h-7.573zm46.938-5.89c-4.424 0-7.613 2.925-7.613 7.313 0 4.387 3.59 7.312 8.014 7.312 2.672 0 5.028-1.072 6.487-2.88l-3.065-1.796c-.81.898-2.04 1.422-3.422 1.422-1.92 0-3.551-1.016-4.156-2.64h11.228c.088-.456.14-.927.14-1.423 0-4.383-3.189-7.308-7.613-7.308zm-3.787 5.89c.501-1.62 1.872-2.64 3.787-2.64 1.919 0 3.29 1.02 3.787 2.64h-7.574zm-15.639 1.422c0 2.438 1.571 4.063 4.007 4.063 1.651 0 2.889-.76 3.526-1.999l3.078 1.8c-1.275 2.153-3.663 3.449-6.604 3.449-4.428 0-7.613-2.925-7.613-7.313 0-4.387 3.189-7.312 7.613-7.312 2.941 0 5.325 1.296 6.604 3.45l-3.078 1.799c-.637-1.24-1.875-1.999-3.526-1.999-2.432 0-4.007 1.625-4.007 4.063zm33.05-11.78v18.687h-3.607V16.03h3.607zM47.806 14l14.806 26H33l14.806-26zm37.016 2.031l-11.103 19.5-11.103-19.5h4.163l6.94 12.188 6.94-12.188h4.163zm23.606 4.875v3.937a4.517 4.517 0 00-1.283-.2c-2.328 0-4.007 1.626-4.007 4.063v6.013h-3.606V20.906h3.606v3.738c0-2.064 2.369-3.738 5.29-3.738z"
                fill="#fff"
              ></path>
            </svg>

            <svg viewBox="0 0 180 56" fill="currentColor" className="w-full">
              <path
                d="M133.969 31.642a.918.918 0 00-.673.287c-.909.938-2.098 1.51-3.483 1.51a4.803 4.803 0 01-2.232-.546c-1.814-.947-2.987-3.015-2.661-5.319.356-2.529 2.567-4.411 5.045-4.338 1.322.04 2.457.604 3.334 1.509a.914.914 0 00.672.286c.554 0 1.029-.49 1.029-1.02 0-.247-.078-.53-.278-.735a6.742 6.742 0 00-4.277-2.055c-3.913-.348-7.435 2.84-7.557 6.886-.122 4.066 3.01 7.374 6.925 7.374 1.94 0 3.642-.777 4.909-2.081.198-.204.278-.49.278-.734-.002-.533-.478-1.023-1.031-1.023zM116.535 29.095c1.283-.735 2.135-2.1 2.094-3.77-.055-2.325-1.995-4.135-4.25-4.135h-6.239c-.546 0-.989.457-.989 1.02v11.883c0 .519.358.995.856 1.052.616.07 1.123-.356 1.123-.974V31.58c0-.2.131-.372.317-.42l3.506-.895 1.447-.38a.415.415 0 01.484.238l1.959 4.44c.16.365.507.58.872.58a.96.96 0 00.632-.244c.33-.288.399-.788.22-1.193l-2.032-4.61zm-7.405-.42v-5.093c0-.24.188-.431.418-.431h4.767c1.384 0 2.335.98 2.335 2.288 0 1.307-.779 2.251-2.37 2.602l-4.643 1.056a.421.421 0 01-.507-.422zM96.89 21.967c-.21-.455-.655-.727-1.192-.727-.537 0-.983.272-1.192.725l-5.462 11.742c-.071.145-.11.325-.11.488 0 .557.422.976.985.976a.944.944 0 00.895-.57l1.017-2.172a8.97 8.97 0 001.403.386c.792.151 1.59.203 2.377.194.79-.007 1.568-.104 2.335-.235.383-.066.76-.163 1.141-.243l.466-.133 1.024 2.188a.956.956 0 00.903.587c.638 0 .982-.502.982-.975 0-.166-.041-.344-.105-.481l-5.467-11.75zm.757 9.04c-.686.117-1.38.205-2.066.21-.687.006-1.37-.036-2.03-.164a7.106 7.106 0 01-.962-.251l.82-1.755h-.003l1.913-4.085a.413.413 0 01.753 0l1.761 3.76.088.188.064.137.797 1.707-.11.031c-.34.074-.68.164-1.025.223zM77.035 23.307c.212-1.058.044-2.13-.468-3.019-.592-1.023-1.538-1.714-2.668-1.946a3.901 3.901 0 00-.808-.08c-1.92 0-3.536 1.387-3.931 3.371a9.394 9.394 0 01-1.183 3.015.11.11 0 01-.1.054.113.113 0 01-.1-.069l-3.765-8.17c-.521-1.129-1.449-1.967-2.546-2.298-1.876-.569-3.922.376-4.762 2.197l-3.897 8.449a.048.048 0 01-.043.028c-.028 0-.033-.016-.037-.028-.618-1.575-2.08-2.593-3.729-2.593-.533 0-1.054.109-1.55.322-.992.426-1.756 1.24-2.158 2.292a4.375 4.375 0 00.032 3.214c.737 1.818 1.97 3.573 3.566 5.074.039.036.05.09.027.138l-1.258 2.732c-.95 2.063-.151 4.556 1.78 5.56a3.9 3.9 0 001.813.448c1.543 0 2.97-.929 3.633-2.366l1.086-2.356a.112.112 0 01.135-.062 14.83 14.83 0 004.025.578c1.458 0 2.942-.223 4.404-.66a.111.111 0 01.136.061l1.074 2.333c.69 1.494 2.124 2.464 3.66 2.474h.023a3.87 3.87 0 001.812-.447c1.93-1.005 2.728-3.505 1.772-5.575l-1.357-2.934a.12.12 0 01.028-.137c2.742-2.617 4.643-6.026 5.354-9.6zM54.201 36.69l-.98 2.126a2.19 2.19 0 01-1.975 1.286c-.338 0-.664-.078-.97-.234-1.06-.543-1.492-1.916-.964-3.065l1.045-2.268a.122.122 0 01.108-.071c.018 0 .041.005.062.021a17.81 17.81 0 003.61 2.044c.04.016.06.05.066.068a.107.107 0 01-.002.093zm9.565-1.345a.108.108 0 01-.07.061c-1.19.325-2.391.49-3.571.49-5.465 0-11.24-3.817-13.15-8.688-.45-1.15.09-2.465 1.206-2.931.261-.11.537-.166.817-.166.896 0 1.69.552 2.025 1.409 1.247 3.183 5.417 5.873 9.102 5.873.555 0 1.125-.055 1.694-.164.053-.01.106.014.127.064l1.82 3.947a.136.136 0 010 .105zm-4.468-6.183l.733-1.591a.273.273 0 01.252-.164.28.28 0 01.253.164l.716 1.553a.29.29 0 01-.007.26.27.27 0 01-.204.147 6.112 6.112 0 01-1.518.04.276.276 0 01-.213-.144.292.292 0 01-.012-.265zm11.09 10.706a2.108 2.108 0 01-.969.234 2.188 2.188 0 01-1.972-1.286l-6.578-14.27a.584.584 0 00-1.07 0l-2.04 4.426a.115.115 0 01-.137.064c-1.361-.483-2.638-1.295-3.596-2.282a.117.117 0 01-.018-.13l4.408-9.562c.148-.32.359-.578.609-.746.592-.4 1.265-.519 1.899-.337a2.199 2.199 0 011.382 1.201l9.047 19.626c.53 1.146.096 2.52-.965 3.062zm.526-8.807a.123.123 0 01-.106.036.11.11 0 01-.082-.067l-1.929-4.186a.12.12 0 01.014-.123c1.09-1.443 1.837-3.086 2.16-4.755.205-1.05 1.103-1.812 2.138-1.812h.002c.177 0 .356.024.533.069 1.144.293 1.84 1.506 1.584 2.76-.613 3.001-2.103 5.793-4.314 8.078z"
                fill="#fff"
              ></path>
            </svg>
            <svg viewBox="0 0 180 56" fill="currentColor" className="w-full">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34.292 33.307v3.443L26 28.5l1.731-1.723 6.56 6.53zm3.46 3.443h-3.46L42.583 45l1.732-1.723-6.563-6.527zm19.68-6.527l1.73-1.723L42.58 12l-1.727 1.727 6.56 6.527h-3.964l-4.58-4.547-1.73 1.723 2.847 2.833h-1.99V33.07h12.871v-1.98l2.848 2.834 1.732-1.723-4.58-4.556V23.7l6.565 6.523zM35.155 19.396L33.42 21.12l1.858 1.848 1.731-1.723-1.853-1.848zm14.726 14.652l-1.73 1.723 1.856 1.848 1.732-1.723-1.858-1.848zM31.442 23.09l-1.732 1.723 4.58 4.556v-3.445l-2.848-2.834zm13.735 13.667h-3.46l4.579 4.556 1.731-1.723-2.85-2.833z"
                fill="#fff"
              ></path>
              <path
                d="M151.74 36.73c-1.116 0-1.99-.301-2.613-.906-.624-.605-.936-1.446-.936-2.51v-6.6h-2.003v-2.471h2.014l.359-3.3h2.359v3.3H154v2.475h-3.08v6.237a1.3 1.3 0 00.356.92 1.22 1.22 0 00.94.38H154v2.475h-2.26zM139.691 36.963c-1.489 0-2.686-.353-3.593-1.06a4.739 4.739 0 01-1.74-2.816h2.961c.129.429.417.793.804 1.02a2.917 2.917 0 001.568.386c1.579 0 2.373-.44 2.373-1.29 0-.423-.249-.747-.745-.97a8.223 8.223 0 00-1.8-.534 22.253 22.253 0 01-2.125-.52 3.697 3.697 0 01-1.816-1.2c-.493-.587-.741-1.359-.743-2.315a3.264 3.264 0 011.252-2.616c.837-.695 1.998-1.042 3.483-1.04 1.484 0 2.663.33 3.537.99a4.415 4.415 0 011.679 2.666h-2.966c-.316-.781-1.061-1.18-2.242-1.181-1.267 0-1.899.393-1.899 1.18a1.016 1.016 0 00.533.88 3.55 3.55 0 001.327.472c.587.1 1.168.233 1.74.4.593.169 1.174.376 1.74.62a3.092 3.092 0 011.342 1.162 3.53 3.53 0 01.537 2 3.28 3.28 0 01-.333 1.517 3.307 3.307 0 01-.993 1.198c-.882.7-2.175 1.05-3.881 1.051zM130.862 25.257c-.912-.817-2.19-1.225-3.834-1.225-1.31 0-2.409.35-3.297 1.053a4.928 4.928 0 00-1.755 2.722h2.799c.142-.408.414-.76.774-1.001a2.488 2.488 0 011.481-.416c.77 0 1.376.198 1.82.59a2.081 2.081 0 01.663 1.645v.596h-3.206c-1.474 0-2.632.37-3.474 1.111a3.568 3.568 0 00-1.255 2.777 3.645 3.645 0 001.171 2.785c.779.733 1.811 1.1 3.096 1.1a4.748 4.748 0 002.291-.53 3.43 3.43 0 001.388-1.234h.115l.233 1.54h2.368v-8.14c-.005-1.429-.464-2.553-1.378-3.373zm-1.346 6.67a2.525 2.525 0 01-.83 1.98c-.549.486-1.3.73-2.251.73-.692 0-1.222-.158-1.587-.466a1.495 1.495 0 01-.553-1.19c0-1.1.723-1.646 2.14-1.646h3.081v.592zM114.473 36.99c-1.796 0-3.232-.574-4.307-1.72-1.074-1.148-1.612-2.735-1.614-4.762 0-2.022.536-3.608 1.608-4.756 1.071-1.148 2.509-1.722 4.313-1.72 1.466 0 2.68.388 3.644 1.166a5.532 5.532 0 011.92 2.954h-2.716a3.054 3.054 0 00-2.845-1.646 2.887 2.887 0 00-2.326 1.046c-.59.7-.885 1.685-.885 2.956 0 1.272.295 2.258.885 2.957a2.872 2.872 0 002.326 1.05 3.06 3.06 0 002.845-1.648h2.716a5.524 5.524 0 01-1.92 2.957c-.962.777-2.177 1.166-3.644 1.166zM98.455 41.476l1.895-4.717-5.088-12.487h2.96l3.434 8.837h.115l3.439-8.837h2.96l-6.872 17.204h-2.843zM92.704 25.257c-.913-.817-2.191-1.225-3.835-1.225-1.31 0-2.412.35-3.296 1.053a4.92 4.92 0 00-1.756 2.722h2.8c.14-.409.412-.76.773-1.001a2.48 2.48 0 011.482-.416c.769 0 1.376.197 1.82.59a2.074 2.074 0 01.663 1.645v.596h-3.207c-1.474 0-2.632.37-3.473 1.111a3.56 3.56 0 00-1.256 2.777 3.642 3.642 0 001.167 2.785c.779.733 1.81 1.1 3.096 1.1a4.745 4.745 0 002.29-.53 3.431 3.431 0 001.39-1.234h.114l.232 1.54h2.364v-8.14c0-1.429-.456-2.553-1.368-3.373zm-1.351 6.67a2.51 2.51 0 01-.83 1.98c-.548.487-1.298.73-2.25.73-.693 0-1.226-.156-1.588-.466a1.494 1.494 0 01-.553-1.19c.007-1.096.72-1.644 2.14-1.646h3.08v.592zM77.343 30.509c.422-.112.83-.272 1.216-.475a6.86 6.86 0 001.256-.88 4.036 4.036 0 001.046-1.54c.269-.69.401-1.425.39-2.165 0-1.57-.503-2.83-1.511-3.775-1.009-.946-2.32-1.418-3.936-1.415h-6.87v16.5h2.96v-6.122h2.247l4.267 6.122h3.317l-4.382-6.25zm-5.449-2.482v-5.17h3.669c.84 0 1.503.227 1.99.68.486.453.73 1.088.734 1.905 0 .817-.246 1.454-.739 1.91a2.784 2.784 0 01-1.961.675h-3.693z"
                fill="#fff"
              ></path>
            </svg>
          </div>
        </div>

        <div className="relative -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_80%)] before:opacity-100 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7876c566] after:bg-zinc-900">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]" />

          <Sparkles
            density={800}
            speed={1}
            size={1.1}
            color="#FFFFFF"
            className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          />
        </div>
      </div>
    </>
  );
}

// book a demo=
// Completed
const FeaturesSection = () => {
  return (
    <>
      <div className="bg-black " style={{ borderRadius: "0px 0px 50px 50px " }}>

        <div className=" relative rounded-[50px] bg-[radial-gradient(130%_130%_at_50%_20%,transparent_40%,#6633EE_100%,#FFFFFF_0px)] p-5 pt-0 pb-12 mb-12">
          <div className="container mx-auto max-w-7xl">

            <div className="flex flex-col items-center justify-center text-center mb-[44.8px]">
              <h2 className=" text-[#e4e7f5] text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] leading-[1.1] mb-8">
                Building Web Solutions That <br />Drive Growth
              </h2>


              <p className="text-gray-300 text-[0.9rem] max-w-[470px] leading-[1.8] font-normal">
                We create fast, responsive, and scalable websites tailored to your business needs, focusing on performance, usability, and modern design standards.
              </p>
            </div>

            <div className="w-full h-[1px] bg-[#2a2b3a] my-12"></div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Web Development */}
              <div className="mb-4 text-white">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5 fill-current">
                    <path d="M372.2 52c0 20.9-12.4 39-30.2 47.2L448 192l104.4-20.9c-5.3-7.7-8.4-17.1-8.4-27.1c0-26.5 21.5-48 48-48s48 21.5 48 48c0 26-20.6 47.1-46.4 48L481 442.3c-10.3 23-33.2 37.7-58.4 37.7l-205.2 0c-25.2 0-48-14.8-58.4-37.7L46.4 192C20.6 191.1 0 170 0 144c0-26.5 21.5-48 48-48s48 21.5 48 48c0 10.1-3.1 19.4-8.4 27.1L192 192 298.1 99.1c-17.7-8.3-30-26.3-30-47.1c0-28.7 23.3-52 52-52s52 23.3 52 52z" />
                  </svg>
                  <h5 className="text-[1.05rem] leading-[1.142857143]">WEB DEVELOPMENT</h5>
                </div>
                <p className="mt-4  text-gray-300 text-[14.4px]">
                  Expert web development: Fast, responsive, modern, scalable, secure, and SEO-friendly.
                </p>
              </div>

              {/* App Development */}
              <div className="mb-4 k text-white">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                    <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z" />
                  </svg>
                  <h5 className="text-[1.05rem] leading-[1.142857143]">APP DEVELOPMENT</h5>
                </div>
                <p className="mt-4  text-gray-300 text-[14.4px]">
                  Custom app development: Fast, scalable, secure, user-friendly, and feature-rich.
                </p>
              </div>

              {/* Software Development */}
              <div className="mb-4  text-white">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5 fill-current">
                    <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                  </svg>
                  <h5 className="text-[1.05rem] leading-[1.142857143]">SOFTWARE DEVELOPMENT</h5>
                </div>
                <p className="mt-4  text-gray-300 text-[14.4px]">
                  Powerful software development: Scalable, secure, efficient, innovative, and user-centric solutions.
                </p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#2a2b3a] my-12"></div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Digital Marketing */}
              <div className="mb-4 text-white">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                    <path d="M87 481.8h73.7v-73.6H87zM25.4 346.6v61.6H87v-61.6zm466.2-169.7c-23-74.2-82.4-133.3-156.6-156.6C164.9-32.8 8 93.7 8 255.9h95.8c0-101.8 101-180.5 208.1-141.7 39.7 14.3 71.5 46.1 85.8 85.7 39.1 107-39.7 207.8-141.4 208v.3h-.3V504c162.6 0 288.8-156.8 235.6-327.1zm-235.3 231v-95.3h-95.6v95.6H256v-.3z" />
                  </svg>
                  <h5 className="text-[1.05rem] leading-[1.142857143]">DIGITAL MARKETING</h5>
                </div>
                <p className="mt-4 text-gray-300 text-[14.4px]">
                  Results-driven digital marketing: SEO, social media, PPC, branding, and growth.
                </p>
              </div>

              {/* Cloud Hosting */}
              <div className="mb-4 text-white">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5 fill-current">
                    <path d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" />
                  </svg>
                  <h5 className="text-[1.05rem] leading-[1.142857143]">CLOUD HOSTING</h5>
                </div>
                <p className="mt-4 text-gray-300 text-[14.4px]">
                  Reliable cloud hosting: Secure, scalable, fast, cost-effective, and high-performance.
                </p>
              </div>

              {/* Web Hosting */}
              <div className="mb-4 text-white">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                    <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
                  </svg>
                  <h5 className="text-[1.05rem] leading-[1.142857143]">WEB HOSTING</h5>
                </div>
                <p className="mt-4 text-gray-300 text-[14.4px]">
                  Fast and secure web hosting: Reliable, scalable, affordable, and high-performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};


// auto noti

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
