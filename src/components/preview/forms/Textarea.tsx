import { useThemeStore } from "../../../store/themeStore";
import {
  generateThemeClasses,
  getDensity,
  getFont,
} from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function Textarea() {
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
    <div className={twMerge(clsx("w-full max-w-sm space-y-1.5", font))}>
      <label className={twMerge(clsx(classes.text, "text-sm font-medium"))}>
        Message
      </label>
      <textarea
        rows={4}
        placeholder="Write your message here..."
        className={twMerge(
          clsx(classes.input, padding, "w-full resize-y min-h-[100px]"),
        )}
      />
      <div className="flex justify-between">
        <p className={twMerge(clsx(classes.text, "text-xs opacity-50"))}>
          Markdown supported
        </p>
        <p className={twMerge(clsx(classes.text, "text-xs opacity-50"))}>
          0/500
        </p>
      </div>
    </div>
  );
}
