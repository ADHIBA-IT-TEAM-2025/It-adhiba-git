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
import Link from 'next/link';

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

            <section className="py-12 relative xl:mr-0 lg:mr-5 mr-0 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">

                        {/* Text Content */}
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                    <h6 className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
                                        Get to Know Us
                                    </h6>
                                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                        <h2 className="text-indigo-700 dark:text-indigo-400 text-4xl font-bold leading-normal lg:text-start text-center">
                                            Our Story of Growth & Innovation
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                                            At ADHIBA, we believe in the power of innovation, collaboration, and consistent effort. From humble beginnings
                                            to impactful achievements, our journey has been driven by vision, purpose, and people.
                                        </p>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="w-full flex-col justify-center items-start gap-6 flex">
                                    <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 dark:text-white text-2xl font-bold leading-9">3+ Years</h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed">
                                                Empowering Digital Journeys Together
                                            </p>
                                        </div>
                                        <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 dark:text-white text-2xl font-bold leading-9">25+ Projects</h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed">
                                                Delivering Solutions with Excellence
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div className="w-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 dark:text-white text-2xl font-bold leading-9">26+ Awards</h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed">
                                                Recognized for Innovation & Impact
                                            </p>
                                        </div>
                                        <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 dark:text-white text-2xl font-bold leading-9">99% Happy Clients</h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed">
                                                Committed to Customer Satisfaction
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Button */}
                                                     <Link href="/gallery" passHref>
                                <button className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 dark:bg-indigo-900 hover:bg-indigo-100 dark:hover:bg-indigo-800 rounded-lg shadow transition-all duration-700 ease-in-out justify-center items-center flex">
                                    <span className="px-1.5 text-indigo-600 dark:text-indigo-300 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                                        Read More
                                    </span>
                                    <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </Link>

                        </div>

                        {/* Image */}
                        <div className="w-full lg:justify-start justify-center items-start flex">
                            <div className="sm:w-[564px] w-full sm:h-[646px] h-full bg-gray-100 dark:bg-gray-800 rounded-3xl sm:border border-gray-200 dark:border-gray-700 relative">
                                <img
                                    className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                    src="https://pagedone.io/asset/uploads/1717742431.png"
                                    alt="About Us image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full">
                <Timeline data={data} />
            </div>

            <section className="mb-12 mt-12">
                <div className=" bg-white dark:bg-black">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center">
                            <h2 className="font-heading mb-4 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase">
                                Why Choose Us?
                            </h2>
                            <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                We blend innovation with experience — your reliable fintech partner.
                            </p>
                            <p className="mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-300 lg:mx-auto">
                                At ADHIBA, we deliver tailor-made IT solutions and financial technologies that simplify taxation, compliance, and digital transformation for businesses of all sizes. Our team is committed to innovation, transparency, and excellence.
                            </p>
                        </div>

                        <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md  text-white">
                                            <img src="https://www.svgrepo.com/show/503163/api-settings.svg" alt="API Icon" />
                                        </div>
                                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-white">
                                            Robust API Infrastructure
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                                        Our secure APIs allow seamless integration with your platforms, enabling fast and reliable financial services with minimal effort.
                                    </dd>
                                </div>

                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md  text-white">
                                            <img src="https://www.svgrepo.com/show/503138/webpack.svg" alt="SDK Icon" />
                                        </div>
                                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-white">
                                            Developer-Friendly SDKs
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                                        Our SDKs are lightweight, scalable, and easy to integrate — built to accelerate your go-to-market strategy.
                                    </dd>
                                </div>

                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md  text-white">
                                            <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" alt="Transaction Icon" />
                                        </div>
                                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-white">
                                            Optimized Transaction Costs
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                                        We ensure cost-effective transaction processing to help your business scale without financial strain.
                                    </dd>
                                </div>

                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md  text-white">
                                            <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" alt="Dashboard Icon" />
                                        </div>
                                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-white">
                                            Smart Admin Dashboards
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                                        Get real-time insights and powerful management tools with our customizable dashboards for better decision-making.
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>


            <BlogSlider />
            
        </>
    );
}

function BlogSlider() {

    return (
        <>

<section className="mt-12 mb-12 bg-white dark:bg-black">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">

      {/* Left Text Section */}
      <div className="w-full flex justify-between flex-col lg:w-2/5 mt-12">
        <div className="block lg:text-left text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-[3.25rem] mb-5">
            Our latest <span className="text-indigo-600 dark:text-indigo-400">blogs</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10 max-lg:max-w-xl max-lg:mx-auto">
            Welcome to our blog section, where knowledge meets inspiration. Explore insightful articles, expert tips, and the latest trends in our field.
          </p>
          {/* <a href="javascript:;" className="cursor-pointer border border-gray-300 dark:border-gray-600 shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto flex justify-center text-gray-900 dark:text-white font-semibold transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            View All
          </a> */}
        </div>
      </div>

      {/* Blog Cards */}
      <div className="w-full overflow-x-auto">
        <div className="flex gap-6 w-max px-4 py-6">
          
          {/* Blog Card 1 */}
          <div className="w-80 shrink-0 group">
            <div className="flex items-center mb-4">
              <img src="https://pagedone.io/asset/uploads/1696244059.png" alt="blog" className="rounded-2xl w-full object-cover" />
            </div>
            <h3 className="text-xl text-gray-900 dark:text-white font-medium leading-8 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
              Clever ways to invest in product to organize your portfolio
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-6 mb-6">
              Discover smart investment strategies to streamline and organize your portfolio...
            </p>
            {/* <a href="#" className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 dark:text-indigo-400 font-semibold">
              Read more
              <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a> */}
          </div>

          {/* Blog Card 2 */}
          <div className="w-80 shrink-0 group">
            <div className="flex items-center mb-4">
              <img src="https://pagedone.io/asset/uploads/1696244074.png" alt="blog" className="rounded-2xl w-full object-cover" />
            </div>
            <h3 className="text-xl text-gray-900 dark:text-white font-medium leading-8 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
              How to grow your profit through systematic investment
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-6 mb-6">
              Unlock the power of systematic investment with us and watch your profits soar...
            </p>
            {/* <a href="#" className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 dark:text-indigo-400 font-semibold">
              Read more
              <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a> */}
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

        </>
    );
}
