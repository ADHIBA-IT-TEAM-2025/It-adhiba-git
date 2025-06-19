'use client';

import React from 'react';
import Image from "next/image";
import parraloppimg1 from '../../../assets/features-split-image-01.b4363cde.png';

export default function DigitalMarketingPage() {
  return (
    <>
      {/* Design 1 */}
      <section className="bg-gray-950 pt-16 px-4 sm:px-6 lg:px-8">
  <div>
    <h2 className="title sm:text-4xl md:text-5xl text-white text-center font-bold mb-6">
      Digital Marketing That Drives Results
    </h2>
    <p className="mb-16 mx-auto intro sm:max-w-xl text-center text-gray-400 text-lg">
      We combine creativity, data, and strategy to deliver high-impact digital marketing
      solutions that elevate your brand, attract the right audience, and accelerate growth.
    </p>

    <ul className="flex flex-col flex-wrap justify-center pt-15 mb-20 text-center border-b border-gray-900 sm:flex-row">
      {[
        {
          title: "SEO Optimization",
          desc:
            "Boost your visibility on search engines with targeted strategies that drive organic traffic and improve your rankings.",
        },
        {
          title: "Social Media Marketing",
          desc:
            "Engage and grow your audience across platforms with compelling content, campaigns, and community management.",
        },
        {
          title: "Content Strategy",
          desc:
            "Craft valuable and consistent content that educates, informs, and converts your audience into loyal customers.",
        },
        {
          title: "Paid Advertising (PPC)",
          desc:
            "Maximize ROI through data-driven ad campaigns on Google, Meta, and more with precise audience targeting.",
        },
        {
          title: "Email Marketing",
          desc:
            "Nurture leads and retain customers with personalized, automated email journeys that drive action.",
        },
        {
          title: "Analytics & Reporting",
          desc:
            "Track performance with real-time analytics, measure ROI, and continuously optimize for better outcomes.",
        },
      ].map((item, i) => (
        <li key={i} className="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
          <span className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full">
            {i + 1}
          </span>
          <h3 className="mb-2 text-2xl font-bold text-white">{item.title}</h3>
          <p className="max-w-xs mx-auto text-lg text-gray-500">{item.desc}</p>
        </li>
      ))}
    </ul>
  </div>
</section>


      {/* Design 2 */}
      <section>
        <h2 className="title sm:text-4xl md:text-5xl text-white text-center font-bold mb-6">
          Build up the whole picture
        </h2>

        <div className="relative overflow-hidden pt-16 pb-32 space-y-24">
          {[
            {
                title: "Audience Insights & Behavior Analysis",
                text: "Leverage AI-powered tools to analyze customer conversations, website behavior, and campaign interactions. Understand your audience like never before with data-backed insights that fuel smarter marketing decisions.",
                imgPosition: "left"
            },
            {
                title: "Sentiment Analysis for Brand Health",
                text: "Monitor how customers feel about your brand across social media, reviews, and campaigns. Our sentiment analysis tools detect positive, negative, or neutral tones in real-time — helping you adapt your messaging proactively.",
                imgPosition: "right"
            },
            {
                title: "AI-Generated Content & Copywriting",
                text: "Scale your content creation with AI-driven writing tools that craft engaging blog posts, ad copies, product descriptions, and email content—tailored to your brand voice and optimized for conversions.",
                imgPosition: "left"
            },
          ].map((feature, index) => (
            <div key={index} className="relative">
              <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                <div
                  className={`mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ${feature.imgPosition === "right" ? "lg:col-start-2" : ""
                    }`}
                >
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#313985]"></span>
                    <div className="mt-6">
                      <h2 className="text-3xl font-bold tracking-tight text-white">{feature.title}</h2>
                      <p className="mt-4 text-lg text-gray-300">{feature.text}</p>
                      <div className="mt-6">
                        <p className="inline-flex rounded-lg bg-[#313985] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm">
                          Learn More
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0">
                  <div
                    className={`${feature.imgPosition === "right"
                        ? "-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0"
                        : "-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0"
                      }`}
                  >
                    <Image
                      loading="lazy"
                      width="647"
                      height="486"
                      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                      src={parraloppimg1}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </>
  );
}