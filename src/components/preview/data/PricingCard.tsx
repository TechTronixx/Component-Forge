import { useThemeStore } from "../../../store/themeStore";
import {
  generateThemeClasses,
  getDensity,
  getFont,
} from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Check, Zap } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    price: "$9",
    period: "/month",
    desc: "For individuals",
    features: ["5 Projects", "Basic Analytics", "Email Support"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    desc: "For growing teams",
    features: [
      "Unlimited Projects",
      "Advanced Analytics",
      "Priority Support",
      "Custom Domain",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    desc: "For large orgs",
    features: [
      "Everything in Pro",
      "SSO / SAML",
      "Dedicated Account Manager",
      "SLA",
    ],
    highlighted: false,
  },
];

export default function PricingCard() {
  const archetype = useThemeStore((s) => s.archetype);
  const borderRadius = useThemeStore((s) => s.borderRadius);
  const borderWidth = useThemeStore((s) => s.borderWidth);
  const shadowDepth = useThemeStore((s) => s.shadowDepth);
  const density = useThemeStore((s) => s.density);
  const fontStyle = useThemeStore((s) => s.fontStyle);

  const classes = generateThemeClasses({
    archetype,
    borderRadius,
    borderWidth,
    shadowDepth,
  });
  const padding = getDensity(density);
  const font = getFont(fontStyle);

  return (
    <div
      className={twMerge(
        clsx("grid grid-cols-1 md:grid-cols-3 gap-4 w-full", font),
      )}
    >
      {PLANS.map((plan) => (
        <div
          key={plan.name}
          className={twMerge(
            clsx(
              classes.card,
              padding,
              "space-y-4 relative",
              plan.highlighted &&
                "border-[var(--color-primary)] ring-1 ring-[var(--color-primary)]/20",
            ),
          )}
        >
          {plan.highlighted && (
            <span
              className={twMerge(
                clsx(
                  classes.badge,
                  "absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 flex items-center gap-1",
                ),
              )}
            >
              <Zap className="w-3 h-3" /> Popular
            </span>
          )}
          <div>
            <h3 className={twMerge(clsx(classes.heading, "text-base"))}>
              {plan.name}
            </h3>
            <p className={twMerge(clsx(classes.text, "text-xs opacity-60"))}>
              {plan.desc}
            </p>
          </div>
          <div>
            <span className={twMerge(clsx(classes.heading, "text-3xl"))}>
              {plan.price}
            </span>
            <span className={twMerge(clsx(classes.text, "text-sm opacity-50"))}>
              {plan.period}
            </span>
          </div>
          <ul className="space-y-2">
            {plan.features.map((f) => (
              <li
                key={f}
                className={twMerge(
                  clsx(classes.text, "flex items-center gap-2 text-sm"),
                )}
              >
                <Check className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <button
            className={twMerge(
              clsx(
                plan.highlighted ? classes.button : classes.buttonSecondary,
                "w-full py-2.5 text-sm cursor-pointer",
              ),
            )}
          >
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
}
