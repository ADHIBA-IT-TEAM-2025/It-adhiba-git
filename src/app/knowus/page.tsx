'use client';
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";
import galler10 from '../../assets/GALLERY (10).png';
import galler11 from '../../assets/GALLERY (11).png';
import galler12 from '../../assets/GALLERY (12).png';
import galler13 from '../../assets/GALLERY (13).png';
import galler14 from '../../assets/GALLERY (14).png';
import * as THREE from 'three';
import { FC } from 'react';
import { useEffect } from 'react';

export default function Knowus() {
    return (
        <>
            <TimelineDemo />
        </>
    )
}

 function TimelineDemo() {
    const data = [
        {
            title: "2024",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Built and launched Aceternity UI and Aceternity UI Pro from scratch
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src={galler10}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={galler11}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={galler12}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={galler14}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Early 2023",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        I usually run out of copy, but when I see content this big, I try to
                        integrate lorem ipsum.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Lorem ipsum is for people who are too lazy to write copy. But we are
                        not. Here are some more example of beautiful designs I built.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src={galler11}
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={galler12}
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={galler13}
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={galler14}
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Changelog",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Deployed 5 new components on Aceternity today
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Card grid component
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Startup template Aceternity
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Random file upload lol
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Himesh Reshammiya Music CD
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Salman Bhai Fan Club registrations open
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src={galler10}
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={galler11}
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={galler12}
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={galler14}
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
    ];
     return (
         <>
             
             <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
                 <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                     <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                         <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                             <div className="w-full flex-col justify-center items-start gap-8 flex">
                                 <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                     <h6 className="text-gray-400 text-base font-normal leading-relaxed">About Us</h6>
                                     <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                         <h2
                                             className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                             The Tale of Our Achievement Story</h2>
                                         <p
                                             className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                             Our achievement story is a testament to teamwork and perseverance. Together, we've
                                             overcome challenges, celebrated victories, and created a narrative of progress and
                                             success.</p>
                                     </div>
                                 </div>
                                 <div className="w-full flex-col justify-center items-start gap-6 flex">
                                     <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                         <div
                                             className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                             <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">33+ Years</h4>
                                             <p className="text-gray-500 text-base font-normal leading-relaxed">Influencing Digital
                                                 Landscapes Together</p>
                                         </div>
                                         <div
                                             className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                             <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">125+ Projects
                                             </h4>
                                             <p className="text-gray-500 text-base font-normal leading-relaxed">Excellence Achieved
                                                 Through Success</p>
                                         </div>
                                     </div>
                                     <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                         <div
                                             className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                             <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">26+ Awards</h4>
                                             <p className="text-gray-500 text-base font-normal leading-relaxed">Our Dedication to
                                                 Innovation Wins Understanding</p>
                                         </div>
                                         <div
                                             className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                             <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">99% Happy
                                                 Clients</h4>
                                             <p className="text-gray-500 text-base font-normal leading-relaxed">Mirrors our Focus on
                                                 Client Satisfaction.</p>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                             <button
                                 className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                                 <span
                                     className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">Read
                                     More</span>
                                 <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                                     xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                     <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" strokeWidth="1.6"
                                         strokeLinecap="round" strokeLinejoin="round" />
                                 </svg>
                             </button>
                         </div>
                         <div className="w-full lg:justify-start justify-center items-start flex">
                             <div
                                 className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                                 <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                     src="https://pagedone.io/asset/uploads/1717742431.png" alt="about Us image" />
                             </div>
                         </div>
                     </div>
                 </div>
             </section>

             
             
        <div className="w-full">
            <Timeline data={data} />
             </div>

             <section className="mb-5">
                 <div className="py-12 bg-white">
                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                         <div className="lg:text-center">
                             <h2
                                 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                                 Why choose us?
                             </h2>
                             <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                                 We know tech, we know finance. We are fintech experts.
                             </p>
                             <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                                 We know how to handle taxation for all the
                                 countried we operate in. We care for our customers and help them manage cashflows.
                             </p>
                         </div>

                         <div className="mt-10">
                             <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                 <div className="relative">
                                     <dt>
                                         <div
                                             className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                             <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                                         </div>
                                         <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Powerful API</p>
                                     </dt>
                                     <dd className="mt-2 ml-16 text-base text-gray-500">
                                         Lorem ipsum, dolor sit amet consectetur
                                         adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                                         blanditiis ratione.
                                     </dd>
                                 </div>
                                 <div className="relative">
                                     <dt>
                                         <div
                                             className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                             <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                                         </div>
                                         <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Easy to integrate
                                             SDK
                                         </p>
                                     </dt>
                                     <dd className="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
                                         adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                                         blanditiis ratione.
                                     </dd>
                                 </div>
                                 <div className="relative">
                                     <dt>
                                         <div
                                             className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                             <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />

                                         </div>
                                         <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Low Transaction Cost
                                         </p>
                                     </dt>
                                     <dd className="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
                                         adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                                         blanditiis ratione.
                                     </dd>
                                 </div>
                                 <div className="relative">
                                     <dt>
                                         <div
                                             className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                             <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />

                                         </div>
                                         <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Powerful Dashboard
                                         </p>
                                     </dt>
                                     <dd className="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
                                         adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                                         blanditiis ratione.
                                     </dd>
                                 </div>
                             </dl>
                         </div>

                     </div>
                 </div>
             </section>

             <BlogSlider/>
         </>
    );
}

 function BlogSlider() {

    return (
        <>
          
            <section className="py-24 ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">

                        <div className="w-full flex justify-between flex-col lg:w-2/5">
                            <div className="block lg:text-left text-center">
                                <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">Our latest <span className=" text-indigo-600">blogs</span></h2>
                                <p className="text-gray-500 mb-10  max-lg:max-w-xl max-lg:mx-auto">Welcome to our blog section, where knowledge meets inspiration. Explore insightful articles, expert tips, and the latest trends in our field.</p>
                                <a href="javascript:;" className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto flex justify-center text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100">View All</a>
                            </div>
                            {/* <div className="flex items-center lg:justify-start justify-center lg:mt-0 mt-8 gap-8 mb-4">
                                <button id="slider-button-left" className="swiper-button-prev group flex justify-center items-center border border-solid border-indigo-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-indigo-600" data-carousel-prev>
                                    <svg className="h-6 w-6 text-indigo-600 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </button>
                                <button id="slider-button-right" className="swiper-button-next group flex justify-center items-center border border-solid border-indigo-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-indigo-600" data-carousel-next>
                                    <svg className="h-6 w-6 text-indigo-600 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </button>
                            </div> */}
                        </div>

                        
                        <div className="w-full overflow-x-auto">
                            <div className="flex gap-6 w-max px-4 py-6">
                      
                                <div className="w-80 shrink-0 group">
                                    <div className="flex items-center mb-4">
                                        <img src="https://pagedone.io/asset/uploads/1696244059.png" alt="blog" className="rounded-2xl w-full object-cover" />
                                    </div>
                                    <h3 className="text-xl text-gray-900 font-medium leading-8 mb-3 group-hover:text-indigo-600">
                                        Clever ways to invest in product to organize your portfolio
                                    </h3>
                                    <p className="text-gray-500 leading-6 mb-6">
                                        Discover smart investment strategies to streamline and organize your portfolio...
                                    </p>
                                    <a href="#" className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 font-semibold">
                                        Read more
                                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                                                stroke="#4338CA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>

                                <div className="w-80 shrink-0 group">
                                    <div className="flex items-center mb-4">
                                        <img src="https://pagedone.io/asset/uploads/1696244074.png" alt="blog" className="rounded-2xl w-full object-cover" />
                                    </div>
                                    <h3 className="text-xl text-gray-900 font-medium leading-8 mb-3 group-hover:text-indigo-600">
                                        How to grow your profit through systematic investment
                                    </h3>
                                    <p className="text-gray-500 leading-6 mb-6">
                                        Unlock the power of systematic investment with us and watch your profits soar...
                                    </p>
                                    <a href="#" className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 font-semibold">
                                        Read more
                                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                                                stroke="#4338CA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
