import ForgeIcon from "../../ui/ForgeIcon";
import { useThemeStore } from "../../../store/themeStore";
import {
  generateThemeClasses,
  getDensity,
  getFont,
} from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export default function SecondaryButton() {
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
    <div className="flex flex-wrap gap-4 items-center">
      <button
        className={twMerge(
          clsx(classes.buttonSecondary, padding, font, "cursor-pointer"),
        )}
      >
        Learn More
      </button>
      <button
        className={twMerge(
          clsx(
            classes.buttonSecondary,
            padding,
            font,
            "cursor-pointer flex items-center gap-2",
          ),
        )}
      >
        View Docs <ForgeIcon icon="solar:stars-bold" className="w-3.5 h-3.5" />
      </button>
      <button
        className={twMerge(
          clsx(
            classes.buttonSecondary,
            padding,
            font,
            "cursor-pointer opacity-50 pointer-events-none",
          ),
        )}
      >
        Disabled
      </button>
    </div>
  );
}
