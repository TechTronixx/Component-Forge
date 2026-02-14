import { useThemeStore } from "../../../store/themeStore";
import {
  generateThemeClasses,
  getDensity,
  getFont,
} from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function InputField() {
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

  return (
    <div className={twMerge(clsx("w-full max-w-sm space-y-4", font))}>
      <div className="space-y-1.5">
        <label className={twMerge(clsx(classes.text, "text-sm font-medium"))}>
          Email Address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          className={twMerge(clsx(classes.input, padding, "w-full"))}
        />
      </div>
      <div className="space-y-1.5">
        <label className={twMerge(clsx(classes.text, "text-sm font-medium"))}>
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className={twMerge(clsx(classes.input, padding, "w-full"))}
        />
        <p className={twMerge(clsx(classes.text, "text-xs opacity-50"))}>
          Must be at least 8 characters
        </p>
      </div>
    </div>
  );
}
