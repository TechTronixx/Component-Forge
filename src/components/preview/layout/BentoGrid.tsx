import { useThemeStore } from "../../../store/themeStore";
import {
  generateThemeClasses,
  getDensity,
  getFont,
} from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ForgeIcon from "../../ui/ForgeIcon";

const FEATURES = [
  {
    icon: "solar:bolt-bold-duotone",
    title: "Lightning Fast",
    desc: "Sub-millisecond response times",
    span: "col-span-2",
  },
  {
    icon: "solar:shield-check-bold-duotone",
    title: "Secure",
    desc: "Enterprise-grade security",
    span: "",
  },
  {
    icon: "solar:global-bold-duotone",
    title: "Global CDN",
    desc: "Edge-deployed worldwide",
    span: "",
  },
  {
    icon: "solar:cpu-bold-duotone",
    title: "AI Powered",
    desc: "Built-in machine learning",
    span: "col-span-2",
  },
  {
    icon: "solar:palette-bold-duotone",
    title: "Customizable",
    desc: "Fully themeable components",
    span: "",
  },
  {
    icon: "solar:graph-bold-duotone",
    title: "Analytics",
    desc: "Real-time metrics dashboard",
    span: "",
  },
];

export default function BentoGrid() {
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
        clsx("grid grid-cols-2 md:grid-cols-3 gap-3 w-full", font),
      )}
    >
      {FEATURES.map(({ icon, title, desc, span }) => (
        <div
          key={title}
          className={twMerge(
            clsx(
              classes.card,
              padding,
              span,
              "hover:border-(--color-primary)/30 transition-colors",
            ),
          )}
        >
          <ForgeIcon
            icon={icon}
            className="w-6 h-6 text-(--color-primary) mb-3"
          />
          <h3 className={twMerge(clsx(classes.heading, "text-sm mb-1"))}>
            {title}
          </h3>
          <p className={twMerge(clsx(classes.text, "text-xs opacity-60"))}>
            {desc}
          </p>
        </div>
      ))}
    </div>
  );
}
