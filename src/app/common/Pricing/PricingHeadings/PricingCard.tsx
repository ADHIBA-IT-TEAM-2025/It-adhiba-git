import { TIERS } from './content';
import { cn } from "@/lib/utils";
import { Badge } from '../../../../components/ui/badge';
import { Button } from '../../../../components/ui/button';
import NumberFlow from "@number-flow/react";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { AnimatedGradientText } from "../../../../components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { Icon } from '@/components/ui/evervault-card';


// Highlighted Background Component
const HighlightedBackground = () => (
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:45px_45px] opacity-100 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:opacity-30" />
);

// Popular Background Component
const PopularBackground = () => (
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
);


export const PricingCard = ({
  tier,
  paymentFrequency,
}: {
  tier: (typeof TIERS)[0];
  paymentFrequency: string;
}) => {
  const price = tier.price[paymentFrequency];
  const isHighlighted = tier.highlighted;
  const isPopular = tier.popular;

  return (
    <>

      <div
        className={cn(
          "relative flex flex-col gap-8 overflow-hidden rounded-2xl border p-6 shadow",
          isHighlighted
            ? "bg-foreground text-background"
            : "bg-dark text-foreground",
          isPopular && "outline outline-[rgba(120,119,198)]",
        )}
      >

        {/* Background Decoration */}
        {isHighlighted && <HighlightedBackground />}
        {isPopular && <PopularBackground />}

        {/* Card Header */}
        <h2 className="flex items-center gap-3 text-[30px] font-medium capitalize">
          {tier.name}
          {isPopular && (
            <Badge className="mt-1 bg-orange-900 px-1 py-0 text-white hover:bg-orange-900">
              🔥 Most Popular
            </Badge>
          )}
        </h2>

        {/* Price Section */}
        <div className="relative">
          {typeof price === "number" ? (
            <>
              <NumberFlow
                format={{
                  style: "currency",
                  currency: "USD",
                  trailingZeroDisplay: "stripIfInteger",
                }}
                value={price}
                className="text-5xl pb-5 font-medium"
              />
              <p className="-mt-6 text-xs font-medium">Per month/user</p>
            </>
          ) : (
            <h1 className="text-6xl pt-5 pb-5 font-medium">{price}</h1>
          )}
        </div>

        {/* Features */}

        <div className="flex-1 space-y-2">
          <h3 className="text-xl pt-5 pb-3 font-medium">{tier.description}</h3>
          <ul className="space-y-2">
            {tier.features.map((feature, index) => (
              <li
                key={index}
                className={cn(
                  "flex items-center gap-5 pt- pb-3 text-sm font-medium",
                  isHighlighted ? "text-background" : "text-foreground/60",
                )}
              >
                <BadgeCheck strokeWidth={1} size={16} />
                {feature}
              </li>
            ))}
          </ul>
        </div>



        <div className="gradient-animation group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] mb-8 ">
          <span
            className={cn(
              "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
            )}
            style={{
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "subtract",
              WebkitClipPath: "padding-box",
            }}
          />
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
          <AnimatedGradientText className="text-sm font-medium">
            {tier.cta}
          </AnimatedGradientText>
          <ChevronRight
            className="ml-1 size-4 stroke-neutral-500 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5"
          />
        </div>

      </div>
    </>
  );
};



