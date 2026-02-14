import { useThemeStore } from "../../../store/themeStore";
import {
  generateThemeClasses,
  getDensity,
  getFont,
} from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "ComponentForge saved us 40+ hours of design work. The generated components are production-ready out of the box.",
    author: "Sarah Chen",
    role: "Lead Designer, TechCorp",
    initials: "SC",
  },
  {
    quote:
      "Finally, a tool that understands modern design trends. The Glassmorphism output is absolutely stunning.",
    author: "Marcus Rivera",
    role: "Frontend Engineer, StartupX",
    initials: "MR",
  },
];

export default function TestimonialCard() {
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
        clsx("grid grid-cols-1 md:grid-cols-2 gap-4 w-full", font),
      )}
    >
      {TESTIMONIALS.map((t) => (
        <div
          key={t.author}
          className={twMerge(clsx(classes.card, padding, "space-y-4"))}
        >
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p
            className={twMerge(clsx(classes.text, "text-sm italic opacity-80"))}
          >
            "{t.quote}"
          </p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-xs font-semibold">
              {t.initials}
            </div>
            <div>
              <p className={twMerge(clsx(classes.heading, "text-sm"))}>
                {t.author}
              </p>
              <p className={twMerge(clsx(classes.text, "text-xs opacity-50"))}>
                {t.role}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
