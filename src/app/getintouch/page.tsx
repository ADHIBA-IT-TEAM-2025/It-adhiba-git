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

const World = dynamic(
  () => import('../../components/ui/globe').then(m => m.World),
  {
    ssr: false,
  }
);

export default function GetInTouch() {
  return (
    <>
      <GlobeDemo />
      <Supportleft />
    </>
  );
}

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: '#062056',
    showAtmosphere: true,
    atmosphereColor: '#FFFFFF',
    atmosphereAltitude: 0.1,
    emissive: '#062056',
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: 'rgba(255,255,255,0.7)',
    ambientLight: '#38bdf8',
    directionalLeftLight: '#ffffff',
    directionalTopLight: '#ffffff',
    pointLight: '#ffffff',
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ['#06b6d4', '#3b82f6', '#6366f1'];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <div className="mb-2 text-center">
            <div className="text-gray font-medium">How can we help?</div>
            <h2 className="text-[3.25rem] mb-6 leading-none pb-1">
              Let's Build Something Great Together
            </h2>
          </div>
        </motion.div>
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}

//
function Supportleft() {
  return (
    <>
      <section className="flex container">
        <div className="relative w-full lg:w-2/4 mx-4 sm:mx-8 md:mx-12 lg:mx-28 xl:mx-32 my-6 sm:my-8 md:my-10 lg:my-12 xl:my-14 before:content-[''] before:absolute before:w-full before:h-[100%] before:-z-10 before:rounded-[25px] before:bg-[radial-gradient(170%_130%_at_50%_100%,transparent_0%,#6633ee_100%,#ffffff_0px)] dark:before:bg-[radial-gradient(170%_130%_at_50%_100%,transparent_0%,#4422cc_100%,#222222_0px)]">
          <div className="p-7 xs:p-[70px] sm:p-[70px] md:p-[70px] lg:p-[70px] xl:p-[70px]">
            <h2 className="uppercase text-[55px] text-white text-gray-900 dark:text-white">
              Contact info
            </h2>
            <h4 className="text-[20px] text-white/80 dark:text-gray-400">
              Let's Controverse
            </h4>

            <div className="flex mt-[35px]">
              {/* Icon container */}
              <div className="h-[50px] w-[50px] rounded-[10px] flex items-center justify-center text-white/80 bg-[radial-gradient(130%_130%_at_100%_50%,#ffffff25_40%,#6633ee_100%,#ffffff_0px)] dark:bg-[radial-gradient(130%_130%_at_100%_50%,#ffffff15_40%,#4422cc_100%,#222222_0px)]">
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
              <div className="h-[50px] w-[50px] rounded-[10px] flex items-center justify-center text-white/80 bg-[radial-gradient(130%_130%_at_100%_50%,#ffffff25_40%,#6633ee_100%,#ffffff_0px)] dark:bg-[radial-gradient(130%_130%_at_100%_50%,#ffffff15_40%,#4422cc_100%,#222222_0px)]">
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
              <div className="h-[50px] w-[50px] rounded-[10px] flex items-center justify-center text-white/80 bg-[radial-gradient(130%_130%_at_100%_50%,#ffffff25_40%,#6633ee_100%,#ffffff_0px)] dark:bg-[radial-gradient(130%_130%_at_100%_50%,#ffffff15_40%,#4422cc_100%,#222222_0px)]">
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
                Registered Office
              </h4>
              <p className="mt-[14px] text-white/50 dark:text-gray-500 italic">
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
                <div className="h-[50px] w-[50px] flex items-center justify-center rounded-[10px] text-white/65 border border-white/15 cursor-pointer transition-all hover:bg-[radial-gradient(130%_130%_at_100%_50%,#ffffff25_40%,#6633ee_100%,#ffffff_0px)] hover:border-none dark:hover:bg-[radial-gradient(130%_130%_at_100%_50%,#ffffff15_40%,#4422cc_100%,#222222_0px)] me-[15px]">
                  <Instagram />
                </div>
                <div className="h-[50px] w-[50px] flex items-center justify-center rounded-[10px] text-white/65 border border-white/15 cursor-pointer transition-all hover:bg-[radial-gradient(130%_130%_at_100%_50%,#ffffff25_40%,#6633ee_100%,#ffffff_0px)] hover:border-none dark:hover:bg-[radial-gradient(130%_130%_at_100%_50%,#ffffff15_40%,#4422cc_100%,#222222_0px)] me-[15px]">
                  <Twitter />
                </div>
                <div className="h-[50px] w-[50px] flex items-center justify-center rounded-[10px] text-white/65 border border-white/15 cursor-pointer transition-all hover:bg-[radial-gradient(130%_130%_at_100%_50%,#ffffff25_40%,#6633ee_100%,#ffffff_0px)] hover:border-none dark:hover:bg-[radial-gradient(130%_130%_at_100%_50%,#ffffff15_40%,#4422cc_100%,#222222_0px)] me-[15px]">
                  <Youtube />
                </div>
                <div className="h-[50px] w-[50px] flex items-center justify-center rounded-[10px] text-white/65 border border-white/15 cursor-pointer transition-all hover:bg-[radial-gradient(130%_130%_at_100%_50%,#ffffff25_40%,#6633ee_100%,#ffffff_0px)] hover:border-none dark:hover:bg-[radial-gradient(130%_130%_at_100%_50%,#ffffff15_40%,#4422cc_100%,#222222_0px)]">
                  <Linkedin />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/4 flex  items-center justify-center">
          <SignupFormDemo />
        </div>
      </section>
    </>
  );
}

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl   shadow-input bg-white dark:bg-black">
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
