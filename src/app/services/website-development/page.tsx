'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  PackageSearchIcon,
  Settings2Icon,
  EyeClosed,
  ArrowUpRight,
  ArrowUpRightFromCircle,
} from 'lucide-react';
import { Features } from './Features';
import { Spotlight } from '../../../components/ui/spotlight';
import whyus from '../../../assets/testiimg.jpg';
import whyus2 from '../../../assets/Animation - 1741936606753.gif';
import whyus3 from '../../../assets/Contact us Banner.png';
import whyus4 from '../../../assets/cardfooter.png';
import whyus5 from '../../../assets/website 1.png';
import { Transition } from '@headlessui/react';
import Image, { StaticImageData } from 'next/image';
import { InfiniteImageScroller } from '../../../components/ui/infinite-moving-cards';
import { AuroraText } from '../../../components/magicui/aurora-text';
import Textdivide from './features1';

export default function Webdevelopment() {
  return (
    <>
      <SpotlightSection />
      <InfiniteImageScrollerDemo />
      <Textdivide />
      <Component />
      <FeaturesSection />
      <Whyus />
    </>
  );
}

//spotlight

export function SpotlightSection() {
  return (
    <div
      className="relative h-[35rem] w-full rounded-md flex items-center justify-center overflow-hidden bg-black"
      style={{
        background:
          'radial-gradient(130% 130% at 50% 100%, transparent 40%, rgb(102, 51, 238) 100%, rgb(255, 255, 255) 0px)',
      }}
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="w-full  rounded-md flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-6xl text-center text-white">
            Crafting Digital Experience
            <br />
            That <AuroraText>Inspire & Convert </AuroraText>
          </h1>

          <p className="mt-4 font-normal text-base text-[#8c8c8c] max-w-lg text-center mx-auto">
            Spotlight effect is a great way to draw attention to a specific part
            of the page.we are drawing the attention towards the text section of
            the page.
          </p>
        </div>
      </div>
    </div>
  );
}

// infinity image scroll

export function InfiniteImageScrollerDemo() {
  return (
    <div className="h-[20rem] mb-[150px] mt-[-100px] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteImageScroller
        images={[whyus5.src, whyus5.src, whyus5.src, whyus5.src, whyus5.src]} // Extract src from StaticImageData
        direction="right"
        speed="slow"
      />
    </div>
  );
}

// four feature card

const data = [
  {
    id: 1,
    title: '1. Choose Your Component',
    content:
      "Select the component that best suits your needs from Eldora UI's versatile collection, designed to simplify and enhance your development process.",
    image:
      'https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png',
    icon: <PackageSearchIcon className="size-6 text-primary" />,
  },
  {
    id: 2,
    title: '2. Add Utility Helpers',
    content:
      'Enhance functionality by incorporating utility helpers that align with the selected component, ensuring seamless integration and customization.',
    image:
      'https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png',
    icon: <Settings2Icon className="size-6 text-primary" />,
  },
  {
    id: 3,
    title: '3. Copy and Paste the Code',
    content:
      "Simply copy and paste the provided code into your project, making the process quick and hassle-free. You're now ready to see the magic in action!",
    image:
      'https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png',
    icon: <EyeClosed className="size-6 text-primary" />,
  },
];

export function Component() {
  return (
    <section className="text-center mt-12 mb-12">
      <div className="flex flex-col items-center justify-center text-center mb-[44.8px]">
        <h2 className="text-white text-[3.25rem] leading-[1.1] mb-8">
          Get Started Effortlessly
        </h2>
        <p className="text-[#dfe1f4d7] text-[0.9rem] max-w-[470px] leading-[1.8] font-normal">
          Three simple steps to bring your ideas to life
        </p>
      </div>
      <Features data={data} />
    </section>
  );
}

// Completed
const FeaturesSection = () => {
  return (
    <div className="relative mb-25 rounded-[50px] bg-[radial-gradient(130%_130%_at_50%_20%,transparent_40%,#6633EE_100%,#FFFFFF_0px)] py-32">
      <div className="container mx-auto max-w-[1100px]">
        <div className="flex flex-col items-center justify-center text-center mb-[44.8px]">
          <h2 className="text-white text-[3.25rem] leading-[1.1] mb-8">
            Secure, Compliant and Fully
            <br /> Customizable
          </h2>
          <p className="text-[#dfe1f4d7] text-[0.9rem] max-w-[470px] leading-[1.8] font-normal">
            UI Components was designed to simplify the process of building
            compliant payments workflows. They're flexible, secure and fully
            compliant under PCI DSS.
          </p>
        </div>

        <div className="w-full h-[1px] bg-[#2a2b3a] my-12"></div>

        <div className="grid md:grid-cols-3 gap-8 ">
          <div className="mb-4 text-white">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M372.2 52c0 20.9-12.4 39-30.2 47.2L448 192l104.4-20.9c-5.3-7.7-8.4-17.1-8.4-27.1c0-26.5 21.5-48 48-48s48 21.5 48 48c0 26-20.6 47.1-46.4 48L481 442.3c-10.3 23-33.2 37.7-58.4 37.7l-205.2 0c-25.2 0-48-14.8-58.4-37.7L46.4 192C20.6 191.1 0 170 0 144c0-26.5 21.5-48 48-48s48 21.5 48 48c0 10.1-3.1 19.4-8.4 27.1L192 192 298.1 99.1c-17.7-8.3-30-26.3-30-47.1c0-28.7 23.3-52 52-52s52 23.3 52 52z" />
              </svg>
              <h5 className="text-[1.05rem] leading-[1.142857143]">
                WEB DEVELOPMENT
              </h5>
            </div>
            <p className="mt-4 text-[#dfe1f4d7] text-[14.4px]">
              Expert web development: Fast, responsive, modern, scalable,
              secure, and SEO-friendly.
            </p>
          </div>

          <div className="mb-4 text-white">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z" />
              </svg>
              <h5 className="text-[1.05rem] leading-[1.142857143]">
                APP DEVELOPMENT
              </h5>
            </div>
            <p className="mt-4 text-[#dfe1f4d7] text-[14.4px]">
              Custom app development: Fast, scalable, secure, user-friendly, and
              feature-rich.
            </p>
          </div>

          <div className="mb-4 text-white">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
              </svg>
              <h5 className="text-[1.05rem] leading-[1.142857143]">
                SOFTWARE DEVELOPMENT
              </h5>
            </div>
            <p className="mt-4 text-[#dfe1f4d7] text-[14.4px]">
              Powerful software development: Scalable, secure, efficient,
              innovative, and user-centric solutions.
            </p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#2a2b3a] my-12"></div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="mb-4 text-white">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M87 481.8h73.7v-73.6H87zM25.4 346.6v61.6H87v-61.6zm466.2-169.7c-23-74.2-82.4-133.3-156.6-156.6C164.9-32.8 8 93.7 8 255.9h95.8c0-101.8 101-180.5 208.1-141.7 39.7 14.3 71.5 46.1 85.8 85.7 39.1 107-39.7 207.8-141.4 208v.3h-.3V504c162.6 0 288.8-156.8 235.6-327.1zm-235.3 231v-95.3h-95.6v95.6H256v-.3z" />
              </svg>
              <h5 className="text-[1.05rem] leading-[1.142857143]">
                DIGITAL MARKETING
              </h5>
            </div>
            <p className="mt-4 text-[#dfe1f4d7] text-[14.4px]">
              Results-driven digital marketing: SEO, social media, PPC,
              branding, and growth.
            </p>
          </div>

          <div className="mb-4 text-white">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" />
              </svg>
              <h5 className="text-[1.05rem] leading-[1.142857143]">
                CLOUD HOSTING
              </h5>
            </div>
            <p className="mt-4 text-[#dfe1f4d7] text-[14.4px]">
              Reliable cloud hosting: Secure, scalable, fast, cost-effective,
              and high-performance.
            </p>
          </div>

          <div className="mb-4 text-white">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
              </svg>
              <h5 className="text-[1.05rem] leading-[1.142857143]">
                WEB HOSTING
              </h5>
            </div>
            <p className="mt-4 text-[#dfe1f4d7] text-[14.4px]">
              Fast and secure web hosting: Reliable, scalable, affordable, and
              high-performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// whytrustus
interface Testimonial {
  quote: string;
  img: StaticImageData | string;
  name: string;
  role: string;
}

export function Whyus() {
  const testimonials: Testimonial[] = [
    {
      quote: '6 Evervault balances flexibility and security extremely well.',
      img: whyus,
      name: 'John Doe',
      role: 'CEO, CompanyX',
    },
    {
      quote: '5 Evervault balances flexibility and security extremely well.',
      img: whyus,
      name: 'Jane Smith',
      role: 'Marketing Manager, CompanyY',
    },
    {
      quote: '1 Evervault balances flexibility and security extremely well.',
      img: whyus,
      name: 'John Doe',
      role: 'CEO, CompanyX',
    },
    {
      quote: '2 Evervault balances flexibility and security extremely well.',
      img: whyus,
      name: 'Jane Smith',
      role: 'Marketing Manager, CompanyY',
    },
    {
      quote: '3 Evervault balances flexibility and security extremely well.',
      img: whyus,
      name: 'John Doe',
      role: 'CEO, CompanyX',
    },
    {
      quote: '4 Evervault balances flexibility and security extremely well.',
      img: whyus,
      name: 'Jane Smith',
      role: 'Marketing Manager, CompanyY',
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
      <section className="relative px-6  styles_background__rbhqc  styles_section__h_NXB ">
        <div className="flex flex-col items-center justify-center max-w-[680px] text-center text-base leading-7 mx-auto mb-6">
          <h2
            className=" mx-auto text-center text-[3.25rem] leading-none tracking-[-0.02em] mb-6 last:mb-0 bg-clip-text text-transparent bg-gradient-to-b from-black via-black/70 to-black/40 dark:from-white dark:via-white/50 dark:to-white/30"
            style={{ paddingTop: '5rem' }}
          >
            Why Trust Us?
          </h2>

          <div className="text-gray-700 dark:text-gray-300">
            Evervault is secure by default. We build, manage, and implement
            security best practices into the platform so you have to.
          </div>
        </div>

        <div className="mx-auto my-12 w-fit max-w-full rounded-[24px] px-4 py-16 sm:px-4 sm:py-16 md:px-4 md:py-16 lg:px-4 lg:py-16 xl:px-4 xl:py-16 2xl:px-4 2xl:py-16 backdrop-blur-md bg-gradient-to-b from-[#31398590] to-[#000000] dark:from-[#1c1c2b] dark:to-[#0a0622] shadow-[0_8px_16px_-4px_rgba(0,0,0,0.25),0_4px_8px_-2px_rgba(0,0,0,0.25),0_1px_2px_rgba(0,0,0,0.2),inset_0_0_0_1px_rgba(190,167,255,0.24)]">
          <div className="mx-auto relative max-w-full md:max-w-[850px] lg:max-w-[850px]">
            {/* Testimonial Image */}
            <div className="relative h-32">
              <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-[#313985]/25 before:via-[#313985]/5 before:via-25% before:to-[#313985]/0 before:to-75%">
                <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
                  {testimonials.map((testimonial, index) => (
                    <Transition
                      as="div"
                      key={index}
                      show={active === index}
                      className="absolute inset-0 -z-10 h-full"
                      enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                      enterFrom="opacity-0 -rotate-[60deg]"
                      enterTo="opacity-100 rotate-0"
                      leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                      leaveFrom="opacity-100 rotate-0"
                      leaveTo="opacity-0 rotate-[60deg]"
                      beforeEnter={() => heightFix()}
                    >
                      <Image
                        className="relative left-1/2 top-11 -translate-x-1/2 rounded-full"
                        src={
                          typeof testimonial.img === 'string'
                            ? testimonial.img
                            : testimonial.img.src
                        } // Ensure correct format
                        width={56}
                        height={56}
                        alt={testimonial.name}
                      />
                    </Transition>
                  ))}
                </div>
              </div>
            </div>
            {/* Testimonial Text */}
            <div className="mb-9 transition-all delay-300 duration-150 ease-in-out">
              <div
                className="relative flex flex-col relative h-[100px] overflow-hidden"
                ref={testimonialsRef}
              >
                {testimonials.map((testimonial, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-in-out duration-700"
                    enterFrom="opacity-0 translate-y-2 absolute"
                    enterTo="opacity-100 translate-y-0 absolute"
                    leave="transition ease-out duration-500"
                    leaveFrom="opacity-100 translate-y-0 absolute"
                    leaveTo="opacity-0 translate-y-2 absolute"
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-[#313985] dark:text-[#aab0ff] before:content-['\201C'] after:content-['\201D']">
                      {testimonial.quote}
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Buttons */}
            <div className="-m-1.5 flex flex-wrap justify-center">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  className={`m-1.5 inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-xs shadow-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring focus-visible:ring-[#313985]/50 dark:focus-visible:ring-[#aab0ff] ${active === index
                      ? 'bg-[#313985] text-white shadow-[#313985]/10 dark:bg-[#aab0ff] dark:text-[#313985]'
                      : 'bg-white text-[#313985] hover:bg-[#e0e3ff] dark:bg-[#1c1c2b] dark:text-[#aab0ff] dark:hover:bg-[#313985]/20'
                    }`}
                  onClick={() => {
                    setActive(index);
                    setAutorotate(false);
                  }}
                >
                  <span>{testimonial.name}</span>
                  <span
                    className={`${active === index ? 'text-[#e0e3ff]' : 'text-[#aab0ff]'
                      }`}
                  >
                    -
                  </span>
                  <span>{testimonial.role}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
