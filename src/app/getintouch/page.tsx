'use client';
import '../../styles/home.css';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
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
import emailjs from 'emailjs-com';


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
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    services: '',
    message: ''
  });

  // Store validation error messages per field
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Live prevent numbers for firstname/lastname
    if ((id === 'firstname' || id === 'lastname') && /[^A-Za-z]/.test(value)) {
      return; // Ignore invalid input
    }

    setFormData({ ...formData, [id]: id === 'email' ? value.toLowerCase() : value });
  };

  const validateForm = () => {
    const nameRegex = /^[A-Za-z]{2,30}$/;
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const mobileRegex = /^[0-9]{10,15}$/;

    const newErrors = {};

    if (!nameRegex.test(formData.firstname)) {
      newErrors.firstname = 'First name should be 2-30 alphabets.';
    }
    if (!nameRegex.test(formData.lastname)) {
      newErrors.lastname = 'Last name should be 2-30 alphabets.';
    }
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number should be 10-15 digits.';
    }
    if (formData.services.length < 3 || formData.services.length > 50) {
      newErrors.services = 'Service field must be 3-50 characters.';
    }
    if (formData.message.length < 5 || formData.message.length > 200) {
      newErrors.message = 'Message should be 5-200 characters.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

 


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Replace these with your actual EmailJS IDs
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    const templateParams = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      mobile: formData.mobile,
      services: formData.services,
      message: formData.message,
      to_email: 'sanjeev@adhiba.com' // Recipient email for your template
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      alert("Form submitted and email sent successfully!");
      setFormData({
        firstname: '', lastname: '', email: '', mobile: '', services: '', message: ''
      });
      setErrors({});
    } catch (err) {
      console.error('EmailJS error:', err);
      alert("Failed to send email. Please try again later.");
    }
  };

  return (
    <div className="max-w-md w-fit mx-auto rounded-none md:rounded-2xl p-7 shadow-input bg-white dark:bg-black">
      <h2 className="uppercase text-[55px] text-gray-900 dark:text-white">Let's Connect</h2>
      <h4 className="text-[20px] text-white/80 dark:text-gray-400">Fill out the form, and we'll get back to you shortly</h4>

      <form className="my-8" onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className="flex-1">
            <label htmlFor="firstname" className="block mb-1 font-medium text-gray-900 dark:text-gray-200">
              First Name
            </label>
            <input
              id="firstname"
              value={formData.firstname}
              onChange={handleChange}
              type="text"
              placeholder="First name"
              className={`w-full p-2 rounded border placeholder-gray-400 dark:placeholder-gray-600
                ${errors.firstname ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>}
          </div>
          <div className="flex-1">
            <label htmlFor="lastname" className="block mb-1 font-medium text-gray-900 dark:text-gray-200">
              Last Name
            </label>
            <input
              id="lastname"
              value={formData.lastname}
              onChange={handleChange}
              type="text"
              placeholder="Last name"
              className={`w-full p-2 rounded border placeholder-gray-400 dark:placeholder-gray-600
                ${errors.lastname ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium text-gray-900 dark:text-gray-200">Email Address</label>
          <input
            id="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="projectmayhem@fc.com"
            className={`w-full p-2 rounded border placeholder-gray-400 dark:placeholder-gray-600
              ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="block mb-1 font-medium text-gray-900 dark:text-gray-200">Mobile Number</label>
          <input
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
            onKeyDown={(e) => {
              // Allow control keys: backspace, delete, arrows, tab
              if (
                e.key === 'Backspace' ||
                e.key === 'Delete' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === 'Tab'
              ) {
                return;
              }
              // Allow digits only (0-9)
              if (!/^\d$/.test(e.key)) {
                e.preventDefault();
              }
            }}
            type="tel"
            placeholder="1234567890"
            className={`w-full p-2 rounded border placeholder-gray-400 dark:placeholder-gray-600
              ${errors.mobile ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="services" className="block mb-1 font-medium text-gray-900 dark:text-gray-200">Services Looking For</label>
          <input
            id="services"
            value={formData.services}
            onChange={handleChange}
            type="text"
            placeholder="Website, Digital Marketing, etc."
            className={`w-full p-2 rounded border placeholder-gray-400 dark:placeholder-gray-600
              ${errors.services ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.services && <p className="text-red-500 text-sm mt-1">{errors.services}</p>}
        </div>

        <div className="mb-8">
          <label htmlFor="message" className="block mb-1 font-medium text-gray-900 dark:text-gray-200">Your Message</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            className={`w-full p-2 rounded border placeholder-gray-400 dark:placeholder-gray-600
              ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
            rows="4"
            required
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-br from-black to-neutral-700 dark:from-zinc-900 dark:to-zinc-900 text-white rounded-md h-10 font-medium shadow-md transition-transform duration-300 hover:scale-105"
        >
          Sign Up →
        </button>
      </form>

      <div className="flex justify-center space-x-4">
        <button onClick={() => window.location.href = '/signup'} className="text-blue-600 underline">Signup</button>
        <button onClick={() => window.location.href = '/login'} className="text-blue-600 underline">Login</button>
      </div>
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
