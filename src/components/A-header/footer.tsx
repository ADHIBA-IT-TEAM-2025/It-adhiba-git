'use client';
import * as React from 'react';
import Image from 'next/image';
import adhibalogo from '../../assets/adhiba.png';
import network from '../../assets/cardfooter.png';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'


export function Footerit() {
  return (
    <>
      <div className="container mx-auto  max-w-7xl justify-between flex justify-center  mt-12  mb-12">
        <div className="flex overflow-hidden w-full p-[30px] relative rounded-[24px] bg-[#171825] shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.15),0_1px_4px_rgba(255,237,237,0.1),0_2px_24px_rgba(0,0,0,0.1)]">
          <div className="p-6 flex flex-col justify-center space-y-4 w-[55%]">
            <h5 className="font-semibold text-[12px] text-[#9fa2b9] tracking-[.1em] uppercase mb-[12px]">
              Free Guide
            </h5>
            <h2 className="text-[28px] text-white font-medium mb-[16px]">
              Ready to Build Your Website?
            </h2>
            <p className="text-[#dfe1f4] leading-[1.75] font-normal text-[0.9rem] mb-[30px]">
              Let's create something powerful together. Get in touch to start your project.
            </p>

            <a
              href="/getintouch"
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
              &nbsp;Contact Us Today
            </a>
          </div>

          <Image
            src={network} // replace with your image variable
            alt="Website Launch Guide"
            className="absolute top-0 right-0 w-[600px] h-[350px] [mask-image:linear-gradient(90deg,transparent_10%,#000)]"
          />
        </div>
      </div>

      <section className="relative    overflow-hidden bg-gradient-to-b from-[#222] to-[#000000] dark:from-[#1a1a1a] dark:to-[#000000] group"
        style={{ borderRadius: '50px 50px 0 0' }}
      >
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-cover bg-center">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#313985] to-transparent dark:from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#313985] to-transparent dark:from-black"></div>
        </div>

        <section className=" mx-auto max-w-7xl mt-12 mb-12 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

            {/* Logo */}<div className="flex  lg:justify-start">
              <Image
                src={adhibalogo}
                alt="Adhiba Logo"
                className="h-12 sm:h-14  object-contain"
              />
            </div>

            {/* Company */}
            <div className="text-white dark:text-gray-400">
              <h4 className="mb-3 text-lg font-bold text-white dark:text-gray-200">Company</h4>
              {[
                { name: 'About Us', route: '/knowus' },
                { name: 'Careers', route: '/career' },
                { name: 'Pricing', route: '/common/Pricing' },
                { name: 'Portfolio', route: '/gallery' },
                { name: 'Contact Us', route: '/getintouch' }
              ].map((item) => (
                <Link key={item.name} href={item.route}>
                  <p className="p-1 text-sm hover:text-gray-300 dark:hover:text-white transition duration-300">{item.name}</p>
                </Link>
              ))}
            </div>

            {/* Services */}
            <div className="text-white dark:text-gray-400">
              <h4 className="mb-3 text-lg font-bold text-gray-200 dark:text-gray-200">Services</h4>
              {[
                { name: 'Website Development', route: '/services/website-development' },
                { name: 'UI/UX Design', route: '/services/design-development' },
                { name: 'Graphic Designing', route: '/services/design-development' },
                { name: 'Digital Marketing', route: '/services/digital-marketing' },
                { name: 'Application Development', route: '/services/app-development' },
                { name: 'Software Development', route: '/services/software-development' },
                { name: 'Web / Cloud Hosting', route: '/services/WEB-CLOUD-HOSTING' },
                { name: 'Branding & Identity', route: '/services/digital-marketing' },
                { name: 'E-Commerce Development', route: '/services/website-development' }
              ].map((item) => (
                <Link key={item.name} href={item.route}>
                  <p className="p-1 text-sm hover:text-white dark:hover:text-white dark:text-gray-200 transition duration-300">{item.name}</p>
                </Link>
              ))}
            </div>


            {/* Solutions */}
            <div className="text-white dark:text-gray-400">
              <h4 className="mb-3 text-lg font-bold text-white dark:text-gray-200">Solutions</h4>
              {[
                { name: 'E-Commerce Solutions', route: '/services/website-development' },
                { name: 'ERP Solutions', route: '/services/software-development' },
                { name: 'CRM Solutions', route: '/services/software-development' },
                { name: 'Cloud Solutions', route: '/services/WEB-CLOUD-HOSTING' },
                { name: 'Security Solutions', route: '/services/digital-marketing' }
              ].map((item) => (
                <Link key={item.name} href={item.route}>
                  <p className="p-1 text-sm hover:text-gray-300 dark:hover:text-white transition duration-300">{item.name}</p>
                </Link>
              ))}
            </div>

            {/* Quick Links */}
            <div className="text-white dark:text-gray-400">
              <h4 className="mb-3 text-lg font-bold text-white dark:text-gray-200">Quick Links</h4>
              {[
                { name: 'Terms of Service', route: '/getintouch' },
                { name: 'Privacy Policy', route: '/getintouch' },
                { name: 'Cookies Policy', route: '/getintouch' },
                { name: 'Refund Policy', route: '/getintouch' },
                { name: 'Support Policy', route: '/getintouch' }
              ].map((item) => (
                <Link key={item.name} href={item.route}>
                  <p className="p-1 text-sm hover:text-gray-300 dark:hover:text-white transition duration-300">{item.name}</p>
                </Link>
              ))}
            </div>

            {/* Support */}
            <div className="text-white dark:text-gray-400">
              <h4 className="mb-3 text-lg font-bold text-white dark:text-gray-200">Support</h4>
              {[
                { name: 'FAQ', route: '/getintouch' },
                { name: 'Help Center', route: '/getintouch' },
                { name: 'Technical Support', route: '/getintouch' },
                { name: 'Customer Portal', route: '/getintouch' },
                { name: 'System Status', route: '/getintouch' }
              ].map((item) => (
                <Link key={item.name} href={item.route}>
                  <p className="p-1 text-sm hover:text-gray-300 dark:hover:text-white transition duration-300">{item.name}</p>
                </Link>
              ))}
            </div>



          </div>
        </section>

        <hr className="border-t border-gray-500 dark:border-gray-700 mx-4 sm:mx-8" />

        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center container py-4 gap-4">
          <h6 className="text-white dark:text-gray-400 text-sm text-center sm:text-left">
            © 2025 Adhiba Technologies All rights reserved.
          </h6>

          {/* Social Media Icons Center */}
          <div className="flex justify-center items-center space-x-6">
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="text-gray-200 text-xl hover:scale-125 transition-transform duration-300">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>

            <a href="https://facebook.com/your-page" target="_blank" rel="noopener noreferrer" className="text-gray-200 text-xl hover:scale-125 transition-transform duration-300">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a href="https://instagram.com/your-page" target="_blank" rel="noopener noreferrer" className="text-gray-200 text-xl hover:scale-125 transition-transform duration-300">
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a href="https://youtube.com/your-channel" target="_blank" rel="noopener noreferrer" className="text-gray-200 text-xl hover:scale-125 transition-transform duration-300">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>

          <h6 className="text-white dark:text-gray-400 text-sm text-center sm:text-right">
            Built By Adhiba IT
          </h6>
        </div>

      </section>

    </>
  );
}
