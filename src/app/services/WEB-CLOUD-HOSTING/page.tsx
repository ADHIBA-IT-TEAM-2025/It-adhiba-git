'use client';
import landingban from "../../../assets/Landingthree-banner.png"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import centerimg from "../../../assets/center-img.png"
import { cn } from "@/lib/utils";
import { HoverEffect, projects } from "../design-development/Webdesign";
import { ComponentPropsWithoutRef } from "react";
import './cloudbodydes.css'

const WEBCLOUDHOSTING = () => {
  return (
    <>
      <MarqueeDemo />
      <Cloudbodydesign />
    </>
  );
}
export default WEBCLOUDHOSTING;

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <>


      <figure className="relative h-full me-5 mt-3 cursor-pointer overflow-hidden  p-4 ">
        <div className="flex flex-row items-center gap-2">
          <Image className="rounded-full" width="64" height="64" alt="Review" src={img} />
        </div>
      </figure>
    </>
  );
};

function MarqueeDemo() {
  return (
    <>
      <div className="relative mt-12 flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:50s]">
          <ReviewCard img={require("../../../assets/Web-Designing/ICON-1.png")} />
          <ReviewCard img={require("../../../assets/Web-Designing/ICON-2.png")} />
          <ReviewCard img={require("../../../assets/Web-Designing/ICON-3.png")} />

        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          <ReviewCard img={require("../../../assets/Web-Designing/ICON-4.png")} />
          <ReviewCard img={require("../../../assets/Web-Designing/ICON-5.png")} />
          <ReviewCard img={require("../../../assets/Web-Designing/ICON-6.png")} />
        </Marquee>
        <Marquee pauseOnHover className="[--duration:30s]">
          <ReviewCard img={require("../../../assets/Web-Designing/ICON-7.png")} />
          <ReviewCard img={require("../../../assets/Web-Designing/ICON-8.png")} />
          <ReviewCard img={require("../../../assets/Web-Designing/ICON-9.png")} />
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-3/4 bg-gradient-to-l from-black"></div>
      </div>

      <div className="mt-20 text-center">
        <span className="animate-fadeIn">
          <h1 className="text-[55px] font-semibold leading-[115%] text-transparent bg-clip-text bg-gradient-to-r from-white/80 via-white to-white/80 shadow-md">
            AI that works<br />with your OS
          </h1>
        </span>
        <p className="mt-8 mb-3 text-[16px] font-medium leading-6 text-white/60 shadow-md tracking-wide">
          Raycast AI combines leading models with powerful <br /> extensions - right on your OS
        </p>
        <div className="mt-10 flex justify-center">
          {/* <Button>Contact Us</Button> */}
        </div>
      </div>

      {/* <CardHoverEffectDemo /> */}
    </>
  );
}

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
}

function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden [--duration:40s]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

function CardHoverEffectDemo() {
  return (
    <div className="w-[1300px] mx-auto px-8 mt-15 mb-15">
      <HoverEffect items={projects} />
    </div>
  );
}


 function Cloudbodydesign() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Brand Identity',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?q=80&w=2940&auto=format&fit=crop',
      description: 'Corporate identity design for tech startup',
    },
    {
      id: 2,
      title: 'UI/UX Design',
      category: 'ui',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2940&auto=format&fit=crop',
      description: 'Mobile app interface design',
    },
    {
      id: 3,
      title: 'Typography',
      category: 'typography',
      image: 'https://images.unsplash.com/photo-1618004912476-29818d81ae2e?q=80&w=2864&auto=format&fit=crop',
      description: 'Custom typeface for luxury brand',
    },
    {
      id: 4,
      title: 'Web Design',
      category: 'ui',
      image: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?q=80&w=2864&auto=format&fit=crop',
      description: 'E-commerce platform redesign',
    },
    {
      id: 5,
      title: 'Motion Graphics',
      category: 'motion',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop',
      description: 'Product launch animation',
    },
    {
      id: 6,
      title: 'Print Design',
      category: 'print',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2942&auto=format&fit=crop',
      description: 'Editorial design for art magazine',
    },
  ];

  const filteredProjects =
    activeTab === 'all'
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <>
      <div
        className={` web-two-sec-design min-h-screen bg-black text-white font-light transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Design 1 */}
        <section id="process" className="py-20 px-6 ">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-light tracking-tight pb-12">Design Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="border-t border-zinc-700 pt-6">
                <span className="text-zinc-500 text-sm">01</span>
                <h3 className="text-xl mt-2 mb-4">Discovery</h3>
                <p className="text-zinc-400">
                  Understanding your business, audience, and objectives to establish a
                  solid foundation.
                </p>
              </div>
              <div className="border-t border-zinc-700 pt-6">
                <span className="text-zinc-500 text-sm">02</span>
                <h3 className="text-xl mt-2 mb-4">Strategy</h3>
                <p className="text-zinc-400">
                  Developing a clear roadmap that aligns design decisions with your
                  business goals.
                </p>
              </div>
              <div className="border-t border-zinc-700 pt-6">
                <span className="text-zinc-500 text-sm">03</span>
                <h3 className="text-xl mt-2 mb-4">Design</h3>
                <p className="text-zinc-400">
                  Creating thoughtful, purposeful designs that solve problems and
                  engage users.
                </p>
              </div>
              <div className="border-t border-zinc-700 pt-6">
                <span className="text-zinc-500 text-sm">04</span>
                <h3 className="text-xl mt-2 mb-4">Implementation</h3>
                <p className="text-zinc-400">
                  Bringing designs to life with attention to detail and technical
                  excellence.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Design 2 */}
        <section id="work" className="work-section">
          <div className="container">
            <div className="work-header">
              <h2 className="work-title">Selected Work</h2>
              <div className="work-tabs">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`tab-button ${activeTab === "all" ? "active" : ""}`}
                >
                  ALL
                </button>
                <button
                  onClick={() => setActiveTab("branding")}
                  className={`tab-button ${activeTab === "branding" ? "active" : ""}`}
                >
                  BRANDING
                </button>
                <button
                  onClick={() => setActiveTab("ui")}
                  className={`tab-button ${activeTab === "ui" ? "active" : ""}`}
                >
                  UI/UX
                </button>
                <button
                  onClick={() => setActiveTab("motion")}
                  className={`tab-button ${activeTab === "motion" ? "active" : ""}`}
                >
                  MOTION
                </button>
              </div>
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <div key={project.id} className="project-card">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                    <a href="#" className="project-link">
                      <span>View Project</span> <span className="arrow">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="py-20 relative bg-white dark:bg-gray-900">
        <div className="w-full max-w-2xl lg:max-w-7xl px-6 lg:px-8 mx-auto">
          <h1 className="font-manrope font-medium text-4xl text-gray-900 dark:text-white mb-10 max-md:text-center">
            Professional Project Achievements
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Project 1 */}
            <div className="flex items-center flex-col gap-8 w-full group">
              <div>
                <img className="rounded-3xl object-cover" src="https://pagedone.io/asset/uploads/1707480017.png" alt="Sketch Project" />
              </div>
              <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                <div>
                  <h4 className="text-2xl font-manrope font-semibold text-gray-900 dark:text-white mb-1">Sketch</h4>
                  <p className="font-medium text-lg text-gray-400 dark:text-gray-300">Content Design, Marketing</p>
                </div>
                <button className="border border-black dark:border-white py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black dark:group-hover:bg-white">
                  <svg className="stroke-black dark:stroke-white transition-all duration-300 group-hover:stroke-white dark:group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                      strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group flex items-center flex-col gap-8 w-full">
              <div>
                <img className="rounded-3xl object-cover" src="https://pagedone.io/asset/uploads/1707480034.png" alt="Figma Project" />
              </div>
              <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                <div>
                  <h4 className="text-2xl font-manrope font-semibold text-gray-900 dark:text-white mb-1">Figma</h4>
                  <p className="font-medium text-lg text-gray-400 dark:text-gray-300">User Interface Design</p>
                </div>
                <button className="border border-black dark:border-white py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black dark:group-hover:bg-white">
                  <svg className="stroke-black dark:stroke-white transition-all duration-300 group-hover:stroke-white dark:group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                      strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group flex items-center flex-col gap-8 w-full md:w-1/2 mx-auto md:col-span-2 lg:col-span-1 lg:w-full">
              <div>
                <img className="rounded-3xl object-cover" src="https://pagedone.io/asset/uploads/1707480044.png" alt="Frame.io Project" />
              </div>
              <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                <div>
                  <h4 className="text-2xl font-manrope font-semibold text-gray-900 dark:text-white mb-1">Frame.io</h4>
                  <p className="font-medium text-lg text-gray-400 dark:text-gray-300">User Interface Design</p>
                </div>
                <button className="border border-black dark:border-white py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black dark:group-hover:bg-white">
                  <svg className="stroke-black dark:stroke-white transition-all duration-300 group-hover:stroke-white dark:group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                      strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>



    </>
  )
}