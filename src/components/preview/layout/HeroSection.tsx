import ForgeIcon from "../../ui/ForgeIcon";
import { useThemeStore } from "../../../store/themeStore";
import {
  generateThemeClasses,
  getDensity,
  getFont,
} from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export default function HeroSection() {
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
        clsx(classes.wrapper, padding, font, "w-full text-center space-y-6"),
      )}
    >
      <span
        className={twMerge(
          clsx(classes.badge, "inline-flex items-center gap-1.5 px-3 py-1"),
        )}
      >
        <ForgeIcon icon="solar:stars-minimalistic-bold-duotone" className="w-3 h-3" /> New Release
      </span>
      <h1 className={twMerge(clsx(classes.heading, "text-3xl md:text-4xl"))}>
        Build Faster.
        <br />
        <span className="text-[var(--color-primary)]">Ship Sooner.</span>
      </h1>
      <p
        className={twMerge(
          clsx(classes.text, "max-w-md mx-auto text-sm opacity-70"),
        )}
      >
        The modern toolkit for developers who care about design.
        Production-ready components that look stunning out of the box.
      </p>
      <div className="flex gap-3 justify-center flex-wrap">
        <button
          className={twMerge(
            clsx(
              classes.button,
              "px-6 py-2.5 cursor-pointer flex items-center gap-2",
            ),
          )}
        >
          Get Started <ForgeIcon icon="solar:arrow-right-bold" className="w-4 h-4" />
        </button>
        <button
          className={twMerge(
            clsx(classes.buttonSecondary, "px-6 py-2.5 cursor-pointer"),
          )}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
