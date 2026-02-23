import ForgeIcon from "../../ui/ForgeIcon";
import { useThemeStore } from "../../../store/themeStore";
import {
  generateThemeClasses,
  getDensity,
  getFont,
} from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { useState } from "react";

const FAQS = [
  {
    q: "What is ComponentForge?",
    a: "ComponentForge is a free tool that generates production-ready Tailwind CSS components in multiple visual styles.",
  },
  {
    q: "Can I use the generated code commercially?",
    a: "Yes, all generated code is free to use in personal and commercial projects. No attribution required.",
  },
  {
    q: "Which frameworks are supported?",
    a: "We generate both React (JSX) and plain HTML with Tailwind utility classes. Both are copy-paste ready.",
  },
  {
    q: "How do archetypes work?",
    a: "Each archetype applies a distinct visual language — Glass uses backdrop-blur, Brutal uses hard shadows, Bento uses clean grids, and Swiss uses typography-first design.",
  },
];

export default function Accordion() {
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
  const padding = getDensity(density, "compact");
  const font = getFont(fontStyle);
  const [open, setOpen] = useState(0);

  return (
    <div className={twMerge(clsx("w-full max-w-lg space-y-2", font))}>
      {FAQS.map((faq, i) => (
        <div key={i} className={twMerge(clsx(classes.card, "overflow-hidden"))}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className={twMerge(
              clsx(
                "w-full flex items-center justify-between text-left cursor-pointer",
                padding,
              ),
            )}
          >
            <span className={twMerge(clsx(classes.heading, "text-sm"))}>
              {faq.q}
            </span>
            <ForgeIcon icon="solar:alt-arrow-down-bold"
              className={twMerge(
                clsx(
                  "w-4 h-4 shrink-0 text-[var(--color-forge-muted)] transition-transform",
                  open === i && "rotate-180",
                ),
              )}
            />
          </button>
          {open === i && (
            <div
              className={twMerge(
                clsx("border-t border-[var(--color-forge-border)]", padding),
              )}
            >
              <p className={twMerge(clsx(classes.text, "text-sm opacity-70"))}>
                {faq.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
