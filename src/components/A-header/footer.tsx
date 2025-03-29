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
        className="relative w-full overflow-hidden bg-gradient-to-b from-[#222] to-[#000000] dark:from-[#1a1a1a] dark:to-[#000000] group"
        style={{ borderRadius: '50px 50px 0 0' }}
      >
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-cover bg-center">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#313985] to-transparent dark:from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#313985] to-transparent dark:from-black"></div>
        </div>

        <section className="container mx-auto mt-20 mb-20 relative bg-cover bg-center" style={{ padding: '0 8%' }}>
          <div className="flex flex-wrap">

            {/* Company */}
            <div className="w-full lg:w-2/12">
              <Image src={adhibalogo} className="w-40 mt-4" alt="" />
            </div>

            <div className="w-full lg:w-2/12 text-white dark:text-gray-400 cursor-pointer">
              <h4 className="mt-5 mb-3 text-lg font-bold text-white dark:text-gray-200">Company</h4>
              {['Blog', 'Careers', 'Pricing', 'Customers', 'Contact Us'].map((item) => (
                <p key={item} className="p-1 pl-0 text-sm hover:text-gray-300 dark:hover:text-white transition duration-300">
                  {item}
                </p>
              ))}
            </div>

            {/* Products */}
            <div className="w-full lg:w-2/12 text-white dark:text-gray-400 cursor-pointer">
              <h4 className="mt-5 mb-3 text-lg font-bold text-white dark:text-gray-200">Products</h4>
              {[
                'SEO', 'SEM', 'SMM', 'School LMS', 'Corporate LMS',
                'Content Writing', 'Email Marketing', 'Video Marketing',
                'Workforce Management', 'Card Collection & Display',
                'Fleet Management Solution', 'Feedback Management System'
              ].map((item) => (
                <p key={item} className="p-1 pl-0 text-sm hover:text-gray-300 dark:hover:text-white transition duration-300">
                  {item}
                </p>
              ))}
            </div>

            {/* Solutions */}
            <div className="w-full lg:w-2/12 text-white dark:text-gray-400 cursor-pointer">
              <h4 className="mt-5 mb-3 text-lg font-bold text-white dark:text-gray-200">Solutions</h4>
              {['Card Management', 'PCI Compliance', 'Multi-PSP', 'Card Issuing', 'Wallet Management'].map((item) => (
                <p key={item} className="p-1 pl-0 text-sm hover:text-gray-300 dark:hover:text-white transition duration-300">
                  {item}
                </p>
              ))}
            </div>

            {/* Quick Links */}
            <div className="w-full lg:w-2/12 text-white dark:text-gray-400 cursor-pointer">
              <h4 className="mt-5 mb-3 text-lg font-bold text-white dark:text-gray-200">Quick Links</h4>
              {['Terms of Service', 'Privacy Policy', 'Cookies Policy', 'Data Processing'].map((item) => (
                <p key={item} className="p-1 pl-0 text-sm hover:text-gray-300 dark:hover:text-white transition duration-300">
                  {item}
                </p>
              ))}
            </div>

            {/* Legal & Compliance */}
            <div className="w-full lg:w-2/12 text-white dark:text-gray-400 cursor-pointer">
              <h4 className="mt-5 mb-3 text-lg font-bold text-white dark:text-gray-200">Legal & Compliance</h4>
              {['Terms of Service', 'Privacy Policy', 'Cookies Policy', 'Data Processing'].map((item) => (
                <p key={item} className="p-1 pl-0 text-sm hover:text-gray-300 dark:hover:text-white transition duration-300">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-500 dark:border-gray-700" />

        <div className="flex justify-between items-center container" style={{ padding: '16px 10% 16px 15%' }}>
          <h6 className="text-white dark:text-gray-400 text-sm">© 2025 Adhiba Technologies All rights reserved.</h6>
          <h6 className="text-white dark:text-gray-400 text-sm">Built By Adhiba IT</h6>
        </div>
      </section>


    </>
  );
}
