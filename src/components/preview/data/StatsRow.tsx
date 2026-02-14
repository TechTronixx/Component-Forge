import { useThemeStore } from "../../../store/themeStore";
import {
  generateThemeClasses,
  getDensity,
  getFont,
} from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Users, TrendingUp, Eye, DollarSign } from "lucide-react";

const STATS = [
  {
    icon: Users,
    label: "Total Users",
    value: "24.5K",
    change: "+12.3%",
    up: true,
  },
  {
    icon: TrendingUp,
    label: "Revenue",
    value: "$84.2K",
    change: "+8.1%",
    up: true,
  },
  { icon: Eye, label: "Page Views", value: "142K", change: "-2.4%", up: false },
  {
    icon: DollarSign,
    label: "Avg. Order",
    value: "$38.50",
    change: "+5.7%",
    up: true,
  },
];

export default function StatsRow() {
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
        clsx("grid grid-cols-2 md:grid-cols-4 gap-3 w-full", font),
      )}
    >
      {STATS.map(({ icon: Icon, label, value, change, up }) => (
        <div
          key={label}
          className={twMerge(clsx(classes.card, padding, "space-y-2"))}
        >
          <div className="flex items-center justify-between">
            <Icon className="w-5 h-5 text-[var(--color-primary)]" />
            <span
              className={`text-xs font-medium ${up ? "text-emerald-400" : "text-red-400"}`}
            >
              {change}
            </span>
          </div>
          <p className={twMerge(clsx(classes.heading, "text-2xl font-bold"))}>
            {value}
          </p>
          <p className={twMerge(clsx(classes.text, "text-xs opacity-50"))}>
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
