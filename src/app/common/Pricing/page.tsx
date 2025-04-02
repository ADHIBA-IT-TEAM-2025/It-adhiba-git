"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
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
export default function PricingPlans() {
    const [selectedPaymentFreq, setSelectedPaymentFreq] = useState(
        PAYMENT_FREQUENCIES[0],
    );
    return (
        <>

            <div className="relative mt-15">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    disableTransitionOnChange
                >
                    <div className="inset-0 bg-dark">
                        <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_35px] opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
                    </div>
                    <div className="relative">
                        <div className="container mx-auto px-4">
                            <section className="flex flex-col items-center gap-10 py-10 ">
                                {/* Section Header */}
                                <PricingHeader
                                    title="Level up with Adhiba IT Solution"
                                    subtitle="Use the core product for free, forever."
                                    frequencies={PAYMENT_FREQUENCIES}
                                    selectedFrequency={selectedPaymentFreq}
                                    onFrequencyChange={setSelectedPaymentFreq}
                                />

                                {/* Pricing Cards */}
                                <div className="grid w-[1300px] max-w-6xl mx-auto gap-6 sm:grid-cols-3 xl:grid-cols-3">
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
                <div className="container">
                    <h2>Individual Service<br />Pricing</h2>
                    <div className="full-table table">
                        <div className="tr">
                            <div className="td price"></div>
                            <div className="td price">
                                <p>Free</p>
                            </div>
                            <div className="td price">
                                <p>Pro</p>
                            </div>
                            <div className="td price">
                                <p>Team</p>
                            </div>
                            <div className="td price">
                                <p>Team Pro</p>
                            </div>
                        </div>
                        <div className="tr">
                            <div className="td feature">Full Acess Library
                            </div>
                            <div className="td cross"></div>
                            <div className="td cross"></div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                        </div>
                        <div className="tr">
                            <div className="td feature">Multiple User</div>
                            <div className="td cross"></div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                        </div>
                        <div className="tr">
                            <div className="td feature">Multiple Order</div>
                            <div className="td cross"></div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                        </div>
                        <div className="tr">
                            <div className="td feature">24/7 Support</div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                        </div>
                        <div className="tr">
                            <div className="td feature">Full Acess Library
                            </div>
                            <div className="td cross"></div>
                            <div className="td cross"></div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                        </div>
                        <div className="tr">
                            <div className="td feature">Multiple User</div>
                            <div className="td cross"></div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                        </div>
                        <div className="tr">
                            <div className="td feature">Multiple Order</div>
                            <div className="td cross"></div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                        </div>
                        <div className="tr">
                            <div className="td feature">24/7 Support</div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                        </div>
                        <div className="tr">
                            <div className="td feature">Full Acess Library
                            </div>
                            <div className="td cross"></div>
                            <div className="td cross"></div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                        </div>
                        <div className="tr">
                            <div className="td feature">Multiple User</div>
                            <div className="td cross"></div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                        </div>
                        <div className="tr">
                            <div className="td feature">Multiple Order</div>
                            <div className="td cross"></div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                        </div>
                        <div className="tr">
                            <div className="td feature">24/7 Support</div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
                            <div className="td correct"></div>
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
            </section>

        </>
    )
}