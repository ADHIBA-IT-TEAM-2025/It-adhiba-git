'use client';
import * as React from 'react';
import Image from 'next/image';
import adhibalogo from '../../assets/adhiba.png'; 
import network from '../../assets/cardfooter.png';

export function Footerit() {
  return (
    <>
      <div className="flex justify-center mx-auto mt-12 max-w-[1100px] mb-12">
        <div className="flex overflow-hidden w-full p-[30px] relative rounded-[24px] bg-[#171825] shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.15),0_1px_4px_rgba(255,237,237,0.1),0_2px_24px_rgba(0,0,0,0.1)]">
          <div className="p-6 flex flex-col justify-center space-y-4 w-[55%]">
            <h5 className="font-semibold text-[12px] text-[#9fa2b9] tracking-[.1em] uppercase mb-[12px]">
              Webinar
            </h5>
            <h2 className="text-[28px] text-white font-medium mb-[16px]">
              A Practical Guide to Network Tokens
            </h2>
            <p className="text-[#dfe1f4] leading-[1.75] font-normal text-[0.9rem] mb-[30px]">
              Curious about Network Tokens but unsure how they work or how to
              get started? Watch this 1-hour webinar with our CEO Shane to get
              practical advice on Network Tokens.
            </p>

            <a
              href="/webinars/network-tokens-24"
              className="bg-white text-black min-h-[2.5rem] px-4 py-2 text-[1rem] flex items-center rounded-[25px] w-fit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <polygon points="6 3 20 12 6 21 6 3"></polygon>
              </svg>
              &nbsp;&nbsp;Watch Now
            </a>
          </div>
          <Image
            src={network}
            alt=""
            className="absolute top-0 right-0 w-[600px] h-[350px] [mask-image:linear-gradient(90deg,transparent_10%,#000)]"
          />
        </div>
      </div>

      <section
        className="relative w-full overflow-hidden  bg-gradient-to-b from-[#31398560] to-[#000000]"
        style={{ borderRadius: '50px 50px 0 0' }}
      >
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-cover bg-center">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/100 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/100 to-transparent"></div>
        </div>

        <section
          className="container mx-auto mt-20 mb-20 relative bg-cover bg-center "
          style={{ padding: '0 8%' }}
        >
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/12 footer-main-cont-one-itb">
              <Image src={adhibalogo} className="w-40 mt-4" alt="" />
            </div>

            {/* Company */}
            <div className="w-full lg:w-2/12 footer-main-cont-two-itb text-gray-500 cursor-pointer cursor-pointer">
              <h4 className="mt-5 mb-[10px] text-[14.4px] text-[#d7d7d7] font-bold">
                Company
              </h4>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300 hover:text-white duration-300">
                Blog
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Careers
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Pricing
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Customers
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Contact Us
              </p>
              <h4 className="mt-8 mb-[10px] text-[14.4px] text-[#d7d7d7] font-bold">
                Resources
              </h4>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300 hover:text-white duration-300">
                Documentation
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Papers
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Press
              </p>
            </div>

            {/* Products */}
            <div className="w-full lg:w-2/12 footer-main-cont-three-itb text-gray-500 cursor-pointer">
              <h4 className="mt-5 mb-[10px] text-[14.4px] text-[#d7d7d7] font-bold">
                Products
              </h4>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                SEO
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                SEM
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                SMM
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                School LMS
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Corporate LMS
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Content Writing
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Email Marketing
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                {' '}
                Video Marketing
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Workforce Management
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Card Collection & Display
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Fleet Management Solution
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Feedback Management System
              </p>
            </div>

            {/* Solutions */}
            <div className="w-full lg:w-2/12 footer-main-cont-four-itb text-gray-500 cursor-pointer">
              <h4 className="mt-5 mb-[10px] text-[14.4px] text-[#d7d7d7] font-bold">
                Solutions
              </h4>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Card Management
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                PCI Compliance
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Multi-PSP
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Card Issuing
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Wallet Management
              </p>
            </div>

            {/* Quick Links */}
            <div className="w-full lg:w-2/12 footer-main-cont-four-itb text-gray-500 cursor-pointer">
              <h4 className="mt-5 mb-[10px] text-[14.4px] text-[#d7d7d7] font-bold">
                Quick Links
              </h4>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Terms of Service
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Privacy Policy
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Cookies Policy
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Data Processing
              </p>
            </div>

            {/* Quick Links */}
            <div className="w-full lg:w-2/12 footer-main-cont-four-itb text-gray-500 cursor-pointer">
              <h4 className="mt-5 mb-[10px] text-[14.4px] text-[#d7d7d7] font-bold">
                Legal & Compliance
              </h4>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Terms of Service
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Privacy Policy
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Cookies Policy
              </p>
              <p className="p-[4px] pl-0 text-[14.4px] text-[#5e6077] hover:text-white duration-300">
                Data Processing
              </p>
            </div>
          </div>
        </section>
        <hr
          className=""
          style={{
            backgroundColor: '#ffffff35',
            border: 'none',
            height: '1px',
          }}
        />

        <div
          className="flex justify-between footer-down-text-itb container"
          style={{ padding: '16px 10% 16px 15%' }}
        >
          <h6 className="p-[4px] pl-0 text-[14.4px] text-[#8c8c8c]">
            © 2025 Adhiba Technologies All rights reserved.
          </h6>
          <h6 className="p-[4px] pl-0 text-[14.4px] text-[#8c8c8c]">
            Built By Adhiba IT
          </h6>
        </div>
      </section>
    </>
  );
}
