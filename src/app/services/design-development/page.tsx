'use client'
import {
    Box,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    Heading,
    Icon,
    IconButton,
    Stack,
    Tag,
    Text,
    VStack,
    Wrap,
    useClipboard,
    useTheme,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
    FiBox,
    FiLock,
    FiSearch,
    FiUserPlus,
    FiFlag,
    FiTrendingUp,
    FiToggleLeft,
    FiTerminal,
    FiCode,
    FiMousePointer
} from 'react-icons/fi';
import { useEffect, useState } from 'react'
import { OrbitingCircles } from '@/components/ui/OrbitingCircles'
import { cn } from '@/lib/utils'
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { ChevronRightIcon } from 'lucide-react'
import '../software-development/software.css'
import React, { useRef } from "react";
import galleryImg from "../../../assets/GALLERY (13).png";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useAnimate } from "framer-motion";

export default function Webdesign() {
    return (
        <>
            <OrbitingCirclesDemo />
            <Featurespoint />
            <TextParallaxContentExample />
        </>
    )
}

function AnimatedGradientTextDemo() {
    return (
        <>

<div className="TeamsHeader_headerContent__ceTPP">
  <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
    <span
      className="absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#00c6ff]/50 via-[#0072ff]/50 to-[#00c6ff]/50 bg-[length:300%_100%] p-[1px]"
      style={{
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "destination-out",
        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        maskComposite: "subtract",
        WebkitClipPath: "padding-box",
      }}
    />
    🚀
    <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-600" />
    <AnimatedGradientText className="text-sm font-medium text-white">
      Elevate Your Digital Presence
    </AnimatedGradientText>
    <ChevronRightIcon
      className="ml-1 size-4 stroke-neutral-400 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
    />
  </div>

  <h1 className="mt-6 text-3xl font-semibold text-white">Expert Design & Development</h1>
  <p className="mt-1 max-w-xl text-base text-neutral-300">
    From intuitive UI/UX to robust front-end and backend engineering, we build sleek, scalable,
    and high-performing digital solutions tailored for your business.
  </p>

  <a
    href="#learn-more"
    className="TeamsHeader_learnMore__Tce6T mt-1 inline-flex items-center text-blue-400 hover:text-blue-300 transition"
  >
    Learn more
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      className="icon TeamsHeader_arrowDown__rKHtB ml-1 w-4 h-4"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.75 4.75 13.25 8m0 0-3.5 3.25M13.25 8H2.75"
      />
    </svg>
  </a>
</div>

        </>
    );
}

function Featurespoint() {
    return (
        <>

<section className='desgin-development-sectioin'>
                <section className="nh yg qm kr it">
                    <div className="oh jb rm lr qd">
                        <div className="rd jb mi">
                            <p className="oi vi aj yi">
                                <span className="dj hh eh fh gh"> What's inside </span>
                            </p>
                            <h2 className="ob qi vi bj in js pt">Track all customers in a single dashboard</h2>
                            <p className="ob ri vi cj">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
                        </div>

                        <div className="lc sd cf jb lb mi qf pf vl uq fl qp dm">
                            <div className="ic df hf">
                                <div className="w ed qc kg ok">
                                    <div className="v y wj xj kg pk eh fh gh"></div>
                                    <div className="w jc hf if ed qc kg zg">
                                        <svg className="cd oc cj wj xj uk" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="ob ri vi bj">Daily Analytics</h3>
                            </div>

                            <div className="ic df hf">
                                <div className="w ed qc kg ok">
                                    <div className="v y wj xj kg pk eh fh gh"></div>
                                    <div className="w jc hf if ed qc kg zg">
                                        <svg className="cd oc cj wj xj uk" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="ob ri vi bj">Unlimited User</h3>
                            </div>

                            <div className="ic df hf">
                                <div className="w ed qc kg ok">
                                    <div className="v y wj xj kg pk eh fh gh"></div>
                                    <div className="w jc hf if ed qc kg zg">
                                        <svg className="cd oc cj wj xj uk" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="ob ri vi bj">Email Alerts</h3>
                            </div>

                            <div className="ic df hf">
                                <div className="w ed qc kg ok">
                                    <div className="v y wj xj kg pk eh fh gh"></div>
                                    <div className="w jc hf if ed qc kg zg">
                                        <svg className="cd oc cj wj xj uk" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="ob ri vi bj">Custom Themes</h3>
                            </div>

                            <div className="ic df hf">
                                <div className="w ed qc kg ok">
                                    <div className="v y wj xj kg pk eh fh gh"></div>
                                    <div className="w jc hf if ed qc kg zg">
                                        <svg className="cd oc cj wj xj uk" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="ob ri vi bj">Chat Service</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </section> 
            
            <section className="design-development-section bg-[#0f0f0f] text-white py-16">
                <section className="nh yg qm kr it max-w-7xl mx-auto px-4">
                    <div className="oh jb rm lr qd">
                        <div className="rd jb mi">
                            <p className="oi vi aj yi">
                                <span className="text-sm uppercase tracking-widest text-[#8fdfff] font-semibold"> What we offer </span>
                            </p>
                            <h2 className="text-3xl font-bold mt-2">Designs that Speak. Experiences that Convert.</h2>
                            <p className="text-lg text-neutral-300 mt-4">
                                We craft visually stunning and highly intuitive interfaces tailored to your brand. From concept to final pixels, we ensure every screen delivers clarity, consistency, and impact.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                            <div className="flex flex-col items-start space-y-3">
                                <div className="p-3 bg-[#1a1a1a] rounded-full">
                                    <svg className="h-6 w-6 text-[#8fdfff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold">Creative UI Design</h3>
                                <p className="text-neutral-400">Engaging, responsive designs that ensure seamless user journeys on all devices.</p>
                            </div>

                            <div className="flex flex-col items-start space-y-3">
                                <div className="p-3 bg-[#1a1a1a] rounded-full">
                                    <svg className="h-6 w-6 text-[#8fdfff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm6-1v-1a6 6 0 00-9-5.197"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold">UX Strategy</h3>
                                <p className="text-neutral-400">Data-backed user flow mapping to create intuitive and enjoyable digital experiences.</p>
                            </div>

                            <div className="flex flex-col items-start space-y-3">
                                <div className="p-3 bg-[#1a1a1a] rounded-full">
                                    <svg className="h-6 w-6 text-[#8fdfff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold">Design Systems</h3>
                                <p className="text-neutral-400">Build scalable, reusable component libraries for consistent branding across products.</p>
                            </div>

                            <div className="flex flex-col items-start space-y-3">
                                <div className="p-3 bg-[#1a1a1a] rounded-full">
                                    <svg className="h-6 w-6 text-[#8fdfff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16M4 13h6m6 0h4M4 21h16"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold">Custom Illustrations</h3>
                                <p className="text-neutral-400">Unique visual assets that elevate your digital presence and strengthen brand identity.</p>
                            </div>

                            <div className="flex flex-col items-start space-y-3">
                                <div className="p-3 bg-[#1a1a1a] rounded-full">
                                    <svg className="h-6 w-6 text-[#8fdfff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold">Real-time Collaboration</h3>
                                <p className="text-neutral-400">Work closely with our design team through live feedback and iterative design cycles.</p>
                            </div>

                            <div className="flex flex-col items-start space-y-3">
                                <div className="p-3 bg-[#1a1a1a] rounded-full">
                                    <svg className="h-6 w-6 text-[#8fdfff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 4h2a2 2 0 012 2v2m0 8v2a2 2 0 01-2 2h-2M8 20H6a2 2 0 01-2-2v-2M4 8V6a2 2 0 012-2h2"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold">Cross-platform Design</h3>
                                <p className="text-neutral-400">Designs optimized for both web and mobile, ensuring pixel-perfect experiences everywhere.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>          

        

        </>
    );
}

function OrbitingCirclesDemo() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch by ensuring the component is mounted
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Avoid rendering until mounted
    return (
        <>
            <div
                className="relative bg- flex min-h-[90vh] w-full items-center justify-center overflow-hidden"
                style={{
                    background: `radial-gradient(circle at center, #313985, ${(theme ?? 'light') === 'dark' ? '#000' : '#000'})`,
                    maskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1))`,
                    WebkitMaskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1))`
                }}
            >
                {/* Larger orbit */}
                <OrbitingCircles iconSize={40} radius={270}>
                    <Icons.whatsapp />
                    <Icons.notion />
                    <Icons.openai />
                    <Icons.googleDrive />
                    <Icons.whatsapp />
                </OrbitingCircles>

                {/* Even larger orbit */}
                <OrbitingCircles iconSize={30} radius={350} reverse speed={2}>
                    <Icons.whatsapp />
                    <Icons.notion />
                    <Icons.openai />
                    <Icons.googleDrive />
                </OrbitingCircles>

                {/* Larger orbit */}
                <OrbitingCircles iconSize={40} radius={450}>
                    <Icons.whatsapp />
                    <Icons.notion />
                    <Icons.openai />
                    <Icons.googleDrive />
                    <Icons.whatsapp />
                </OrbitingCircles>

                {/* Largest orbit */}
                <OrbitingCircles iconSize={30} radius={550} reverse speed={2}>
                    <Icons.whatsapp />
                    <Icons.notion />
                    <Icons.openai />
                    <Icons.googleDrive />
                </OrbitingCircles>

                <div className="relative z-10">
                    <AnimatedGradientTextDemo />
                </div>

            </div>


        </>
    );
}

const Icons = {
    gitHub: () => (
        <svg width="100" height="100" viewBox="0 0 438.549 438.549">
            <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            />
        </svg>
    ),
    notion: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
                fill="#ffffff"
            />
            <path
                d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
                fill="#000000"
                fillRule="evenodd"
                clipRule="evenodd"
            />
        </svg>
    ),
    openai: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-black dark:fill-white"
        >
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
        </svg>
    ),
    googleDrive: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 87.3 78"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
                fill="#0066da"
            />
            <path
                d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
                fill="#00ac47"
            />
            <path
                d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
                fill="#ea4335"
            />
            <path
                d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
                fill="#00832d"
            />
            <path
                d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
                fill="#2684fc"
            />
            <path
                d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
                fill="#ffba00"
            />
        </svg>
    ),
    whatsapp: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 175.216 175.552"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient
                    id="b"
                    x1="85.915"
                    x2="86.535"
                    y1="32.567"
                    y2="137.092"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#57d163" />
                    <stop offset="1" stopColor="#23b33a" />
                </linearGradient>
                <filter
                    id="a"
                    width="1.115"
                    height="1.114"
                    x="-.057"
                    y="-.057"
                    colorInterpolationFilters="sRGB"
                >
                    <feGaussianBlur stdDeviation="3.531" />
                </filter>
            </defs>
            <path
                d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
                fill="#b3b3b3"
                filter="url(#a)"
            />
            <path
                d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
                fill="#ffffff"
            />
            <path
                d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
                fill="url(#linearGradient1780)"
            />
            <path
                d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
                fill="url(#b)"
            />
            <path
                d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
                fill="#ffffff"
                fillRule="evenodd"
            />
        </svg>
    ),
};

const TextParallaxContentExample = () => {
    return (
        <div className="bg-white dark:bg-black">
            <TextParallaxContent
                imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subheading="Collaborate"
                heading="Built for all of us."
            >
                <ExampleContent1 />
            </TextParallaxContent>
            <TextParallaxContent
                imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subheading="Quality"
                heading="Never compromise."
            >
                <ExampleContent2 />
            </TextParallaxContent>
            <TextParallaxContent
                imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subheading="Design-forward"
heading="Style meets substance."

            >
                <ExampleContent3 />
            </TextParallaxContent>
        </div>
    );
};

const IMG_PADDING = 12;

type TextParallaxContentProps = {
    imgUrl: string;
    subheading: string;
    heading: string;
    children?: React.ReactNode;
};


const TextParallaxContent = ({ imgUrl, subheading, heading, children }: TextParallaxContentProps) => {
    return (
        <div
            style={{
                paddingLeft: IMG_PADDING,
                paddingRight: IMG_PADDING,
            }}
        >
            <div className="relative h-[150vh]">
                <StickyImage imgUrl={imgUrl} />
                <OverlayCopy heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    );
};


interface StickyImageProps {
    imgUrl: string;
}

const StickyImage = ({ imgUrl }: StickyImageProps) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(100vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden rounded-3xl"
        >
            <motion.div
                className="absolute inset-0 bg-neutral-950/70"
                style={{
                    opacity,
                }}
            />
        </motion.div>
    );
};


interface OverlayCopyProps {
    subheading: string;
    heading: string;
}

const OverlayCopy = ({ subheading, heading }: OverlayCopyProps) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            style={{
                y,
                opacity,
            }}
            ref={targetRef}
            className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
        >
            <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
                {subheading}
            </p>
            <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
        </motion.div>
    );
};



const ExampleContent1 = () => (
  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-extrabold text-black dark:text-white md:col-span-4">
      Empowering seamless collaboration
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-lg font-medium text-neutral-700 dark:text-neutral-300 md:text-xl leading-relaxed">
        Whether you're part of a startup or a global team, our platform brings
        everyone together. Work smarter, not harder, by leveraging powerful
        collaboration tools tailored for your needs.
      </p>
      <p className="mb-8 text-lg font-medium text-neutral-700 dark:text-neutral-300 md:text-xl leading-relaxed">
        Designed with flexibility and accessibility in mind, it adapts to your
        workflow. Dark or light mode — it’s your choice. Experience a new
        standard of productivity.
      </p>
    
    </div>
  </div>
);

// HOVER TO SHOW  IMAGE
const ExampleContent2 = () => (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-extrabold text-black dark:text-white md:col-span-4">
        Unmatched quality, at every level
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-lg font-medium text-neutral-700 dark:text-neutral-300 md:text-xl leading-relaxed">
          We believe quality isn’t optional—it’s essential. Every line of code, every design decision, and every feature is crafted to deliver a premium experience you can depend on.
        </p>
        <p className="mb-8 text-lg font-medium text-neutral-700 dark:text-neutral-300 md:text-xl leading-relaxed">
          Our platform is tested for performance, optimized for speed, and built to scale. Whether you're launching a product or managing complex workflows, you'll never have to compromise on excellence.
        </p>
       
      </div>
    </div>
  );
  

// HOVER TO SHOW  IMAGE

const ExampleContent3 = () => (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-extrabold text-black dark:text-white md:col-span-4">
        Modern aesthetics, timeless confidence
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-lg font-medium text-neutral-700 dark:text-neutral-300 md:text-xl leading-relaxed">
          First impressions matter. That’s why we combine clean design, intuitive layouts, and refined styling to help you present your brand with modern elegance.
        </p>
        <p className="mb-8 text-lg font-medium text-neutral-700 dark:text-neutral-300 md:text-xl leading-relaxed">
          Whether you're launching a product, designing a profile, or building a portfolio—our visual language speaks clarity and professionalism. Dress your digital presence for success.
        </p>
      
      </div>
    </div>
  );
  

// HOVER TO SHOW  IMAGE
