// src/app/common/Pricing/PricingHeadings/content.ts

export const TIERS = [
    {
        name: "Starter",
        price: { monthly: 10, yearly: 100 },
        description: "Essential features to get started.",
        features: [
            "Basic analytics",
            "Up to 3 team members",
            "Email support"
        ],
        highlighted: false,
        popular: false,
        cta: "Start Now"
    },
    {
        name: "Pro",
        price: { monthly: 29, yearly: 290 },
        description: "Advanced features for growing teams.",
        features: [
            "Advanced analytics",
            "Up to 10 team members",
            "Priority email support"
        ],
        highlighted: true,
        popular: true,
        cta: "Go Pro"
    },
    {
        name: "Enterprise",
        price: { monthly: "Custom", yearly: "Custom" },
        description: "Custom solutions for large teams.",
        features: [
            "Custom analytics",
            "Unlimited team members",
            "Dedicated support"
        ],
        highlighted: false,
        popular: false,
        cta: "Contact Sales"
    }
];
