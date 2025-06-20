"use client";
import React, { useState } from "react";
import { Check, ChevronRightIcon, LinkIcon } from "lucide-react";
import { OrbitingCircles } from "@/components/ui/OrbitingCircles";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useTheme } from "next-themes";
import { PricingCard } from './PricingHeadings/PricingCard';
import { PricingHeader } from './PricingHeadings/PricingHeadings';
import { PAYMENT_FREQUENCIES, TIERS } from './PricingHeadings/pricingcontents';
import { ThemeProvider } from 'next-themes';
import './Pricing.css'

const CrossIcon = () => (
    <svg
        className="w-3 h-3 text-gray-400 dark:text-gray-500 mx-auto"
        viewBox="0 0 8 8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="4" cy="4" r="4" />
    </svg>
);

const CorrectIcon = () => (
    <svg
        className="w-6 h-6 text-black dark:text-white mx-auto"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M16.59 7.58L10 14.17L6.41 10.59L5 12L10 17L18 9L16.59 7.58Z"
            fill="currentColor"
        />
    </svg>
);

export default function PricingPlans() {
    const [selectedPaymentFreq, setSelectedPaymentFreq] = useState(
        PAYMENT_FREQUENCIES[0],
    );
    return (
        <>
            {/* Pricing */}
            <div className="relative mt-10">
                <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
                    <div className="absolute inset-0 z-0 bg-dark">
                        <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_35px] opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
                    </div>

                    <div className="relative z-10">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <section className="flex flex-col items-center gap-10 py-10">
                                {/* Section Header */}
                                <PricingHeader
                                    title="Level up with Adhiba IT Solution"
                                    subtitle="Use the core product for free, forever."
                                    frequencies={PAYMENT_FREQUENCIES}
                                    selectedFrequency={selectedPaymentFreq}
                                    onFrequencyChange={setSelectedPaymentFreq}
                                />

                                {/* Pricing Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
                                    {TIERS.map((tier, i) => (
                                        <PricingCard
                                            key={i}
                                            tier={tier}
                                            paymentFrequency={selectedPaymentFreq}
                                        />
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </ThemeProvider>
            </div>

            {/* Pricing Table */}
            <section className="section-2">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-black dark:text-white">Individual Service<br />Pricing</h2>

                    <div className="table-wrapper">
                        <div className="full-table table">
                            {/* <!-- Header Row --> */}
                            <div className="tr">
                                <div className="td price"></div>
                                <div className="td price bg-white dark:bg-[#0e0e0e] text-black dark:text-white">
                                    <h4>Basic</h4>
                                </div>
                                <div className="td price bg-white dark:bg-[#0e0e0e] text-black dark:text-white">
                                    <h4>Standard</h4>
                                </div>
                                <div className="td price bg-white dark:bg-[#0e0e0e] text-black dark:text-white">
                                    <h4>Premium</h4>
                                </div>
                                <div className="td price bg-white dark:bg-[#0e0e0e] text-black dark:text-white">
                                    <h4>Team</h4>
                                </div>
                            </div>

                            {/* <!-- Feature Row 1 --> */}
                            <div className="tr">
                                <div className="td feature">Installation</div>
                                <div className="td "><CrossIcon /></div>
                                <div className="td "><CorrectIcon /></div>
                                <div className="td "><CorrectIcon /></div>
                                <div className="td "><CrossIcon /></div>
                            </div>

                            {/* <!-- Feature Row 2 --> */}
                            <div className="tr">
                                <div className="td feature">Maintenance</div>
                                <div className="td "><CrossIcon /></div>
                                <div className="td "><CorrectIcon /></div>
                                <div className="td "><CorrectIcon /></div>
                                <div className="td "><CrossIcon /></div>
                            </div>

                            {/* <!-- Feature Row 3 --> */}
                            <div className="tr">
                                <div className="td feature">Warranty</div>
                                <div className="td "><CrossIcon /></div>
                                <div className="td "><CorrectIcon /></div>
                                <div className="td "><CorrectIcon /></div>
                                <div className="td "><CrossIcon /></div>
                            </div>

                            {/* <!-- Feature Row 4 --> */}
                            <div className="tr">
                                <div className="td feature"> 24/7 Support</div>
                                <div className="td "><CrossIcon /></div>
                                <div className="td "><CorrectIcon /></div>
                                <div className="td "><CorrectIcon /></div>
                                <div className="td "><CrossIcon /></div>
                            </div>

                            {/* <!-- Feature Row 5 --> */}
                            <div className="tr">
                                <div className="td feature">Full Access Library</div>
                                <div className="td "><CrossIcon /></div>
                                <div className="td "><CorrectIcon /></div>
                                <div className="td "><CorrectIcon /></div>
                                <div className="td "><CrossIcon /></div>
                            </div>

                            {/* <!-- Feature Row 6 --> */}
                            <div className="tr">
                                <div className="td feature">Multiple User</div>
                                <div className="td "><CrossIcon /></div>
                                <div className="td "><CorrectIcon /></div>
                                <div className="td "><CorrectIcon /></div>
                                <div className="td "><CrossIcon /></div>
                            </div>

                            {/* <!-- Feature Row 7 --> */}
                            <div className="tr">
                                <div className="td feature">Multiple Order</div>
                                <div className="td "><CrossIcon /></div>
                                <div className="td "><CorrectIcon /></div>
                                <div className="td "><CorrectIcon /></div>
                                <div className="td "><CrossIcon /></div>
                            </div>

                            {/* <!-- Feature Row 8 --> */}
                            <div className="tr">
                                <div className="td feature">Warranty</div>
                                <div className="td "><CrossIcon /></div>
                                <div className="td "><CorrectIcon /></div>
                                <div className="td "><CorrectIcon /></div>
                                <div className="td "><CrossIcon /></div>
                            </div>

                            {/* <!-- Feature Row 9 --> */}
                            <div className="tr">
                                <div className="td feature">Warranty</div>
                                <div className="td "><CrossIcon /></div>
                                <div className="td "><CorrectIcon /></div>
                                <div className="td "><CorrectIcon /></div>
                                <div className="td "><CrossIcon /></div>
                            </div>

                            {/* <!-- Feature Row 10 --> */}
                            <div className="tr">
                                <div className="td feature">Warranty</div>
                                <div className="td "><CrossIcon /></div>
                                <div className="td "><CorrectIcon /></div>
                                <div className="td "><CorrectIcon /></div>
                                <div className="td "><CrossIcon /></div>
                            </div>

                            <div className="tr">
                                <div className="td"></div>
                                <div className="td action" style={{ cursor: "pointer" }}>
                                    <button className="w-full">Choose Plan</button>
                                    <p>Get your 30 day free trial</p>
                                </div>
                                <div className="td action" style={{ cursor: "pointer" }}>
                                    <button className="w-full">Choose Plan</button>
                                    <p>Get your 30 day free trial</p>
                                </div>
                                <div className="td action" style={{ cursor: "pointer" }}>
                                    <button className="w-full">Choose Plan</button>
                                    <p>Get your 30 day free trial</p>
                                </div>
                                <div className="td action" style={{ cursor: "pointer" }}>
                                    <button className="w-full">Choose Plan</button>
                                    <p>Get your 30 day free trial</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
