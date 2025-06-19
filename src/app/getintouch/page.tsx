'use client';
import '../../styles/home.css';
import { motion } from 'framer-motion';
import React from 'react';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { cn } from '@/lib/utils';
import {
  HandshakeIcon,
  Instagram,
  Linkedin,
  MailsIcon,
  PhoneOutgoingIcon,
  Twitter,
  Youtube,
} from 'lucide-react';
import dynamic from 'next/dynamic';


export default function GetInTouch() {
  return (
    <>
      {/* <GlobeDemo /> */}
      <Supportleft />
    </>
  );
}


function Supportleft() {
  return (
    <>
      <section className="flex flex-col lg:flex-row container mx-auto">
        <div className="relative  w-full lg:w-2/4 mx-4 sm:mx-8 md:mx-12 lg:mx-28 xl:mx-32 my-6 sm:my-8 md:my-10 lg:my-12 xl:my-14 
  before:content-[''] 
  before:absolute 
  before:w-full 
  before:h-full 
  before:-z-10 
  rounded-[25px] 
  bg-[#313985]">

          <div className="p-7 ">
            <h2 className="uppercase text-[55px] text-white text-gray-900 dark:text-white" >
              Contact info
            </h2>
            <h4 className="text-[20px] text-white/80 dark:text-gray-400">
              Let's Controverse
            </h4>

            <div className="flex mt-[35px]">
              {/* Icon container */}
              <div className="h-[50px] w-[50px] rounded-[10px] flex items-center justify-center text-white/80 ">
                <PhoneOutgoingIcon />
              </div>

              {/* Text container */}
              <div className="ms-4">
                <h6 className="text-[15px] font-bold text-white dark:text-gray-300">
                  Contact Number
                </h6>
                <p className="text-white/80 dark:text-gray-400">90253 28763</p>
              </div>
            </div>

            <div className="flex mt-[35px]">
              {/* Icon container */}
              <div className="h-[50px] w-[50px] rounded-[10px] flex items-center justify-center text-white/80 ">
                <HandshakeIcon />
              </div>

              {/* Text container */}
              <div className="ms-4">
                <h6 className="text-[15px] font-bold text-white dark:text-gray-300">
                  Technical Support
                </h6>
                <p className="text-white/80 dark:text-gray-400">99455 25896</p>
              </div>
            </div>

            <div className="flex mt-[35px]">
              {/* Icon container */}
              <div className="h-[50px] w-[50px] rounded-[10px] flex items-center justify-center text-white/80 ">
                <MailsIcon />
              </div>

              {/* Text container */}
              <div className="ms-4">
                <h6 className="text-[15px] font-bold text-white dark:text-gray-300">
                  E-Mail
                </h6>
                <p className="text-white/80 dark:text-gray-400">
                  info@adhiba.com
                </p>
              </div>
            </div>

            {/* part-two */}
            <div className="mt-[35px]">
              <h4 className="text-[20px] text-white/80 dark:text-gray-400">
                Where to Find Us
              </h4>
              <p className="mt-[14px] text-white/50 dark:text-gray-400 italic">
                ADHIBA TECHNOLOGIES PRIVATE LIMITED
                <br />
                #2/153, Padamalaya Nagar, Narasimhanaikenpalayam, <br />
                Coimbatore - 641031
              </p>
            </div>

            {/* part-three */}
            <div className="mt-[35px]">
              <h4 className="text-[20px] text-white/80 dark:text-gray-400">
                Follow Us
              </h4>
              <div className="flex mt-[15px]">
                {/* Social Media Icons */}
                <div className="h-[50px] w-[50px] flex items-center justify-center rounded-[10px] text-white/65 border border-white/15 cursor-pointer transition-all  ">
                  <Instagram />
                </div>
                <div className="h-[50px] w-[50px] flex items-center justify-center rounded-[10px] text-white/65 border border-white/15 cursor-pointer transition-all  ">
                  <Twitter />
                </div>
                <div className="h-[50px] w-[50px] flex items-center justify-center rounded-[10px] text-white/65 border border-white/15 cursor-pointer transition-all  ">
                  <Youtube />
                </div>
                <div className="h-[50px] w-[50px] flex items-center justify-center rounded-[10px] text-white/65 border border-white/15 cursor-pointer transition-all  ">
                  <Linkedin />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/4 flex items-center justify-center mt-8 lg:mt-0">
          <SignupFormDemo />
        </div>
      </section>

    </>
  );
}

function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };
  return (
    <div className="max-w-md w-fit mx-auto rounded-none md:rounded-2xl p-7  shadow-input bg-white dark:bg-black">
      <h2 className="uppercase text-[55px] text-gray-900 dark:text-white">
        Let's Connect
      </h2>
      <h4 className="text-[20px] text-white/80 dark:text-gray-400">
        Fill out the form, and we'll get back to you shortly
      </h4>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              className="placeholder-gray-900 dark:placeholder-gray-600"
              placeholder="First name"
              type="text"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Last name"
              type="text"
              className="placeholder-gray-900 dark:placeholder-gray-600"
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            className="placeholder-gray-900 dark:placeholder-gray-600"
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="mobile">Mobile Number</Label>
          <Input
            id="mobile"
            className="placeholder-gray-900 dark:placeholder-gray-600"
            placeholder="+1234567890"
            type="tel"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="services">Services looking for?*</Label>
          <Input
            id="services"
            className="placeholder-gray-900 dark:placeholder-gray-600"
            placeholder="Website, Digital marketing, etc."
            type="text"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Enter your message*</Label>
          <Input
            id="message"
            className="placeholder-gray-900 dark:placeholder-gray-600"
            placeholder="Type your message here..."
            type="text"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};
