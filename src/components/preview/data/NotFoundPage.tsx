import { useThemeStore } from "../../../store/themeStore";
import { generateThemeClasses, getFont } from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Home } from "lucide-react";

export default function NotFoundPage() {
  const archetype = useThemeStore((s) => s.archetype);
  const borderRadius = useThemeStore((s) => s.borderRadius);
  const borderWidth = useThemeStore((s) => s.borderWidth);
  const shadowDepth = useThemeStore((s) => s.shadowDepth);
  const fontStyle = useThemeStore((s) => s.fontStyle);

  const classes = generateThemeClasses({
    archetype,
    borderRadius,
    borderWidth,
    shadowDepth,
  });
  const font = getFont(fontStyle);

  return (
    <div
      className={twMerge(
        clsx(classes.wrapper, font, "w-full text-center p-10 space-y-6"),
      )}
    >
      <p className="text-7xl font-extrabold text-[var(--color-primary)]">404</p>
      <h2 className={twMerge(clsx(classes.heading, "text-xl"))}>
        Page Not Found
      </h2>
      <p
        className={twMerge(
          clsx(classes.text, "text-sm opacity-60 max-w-sm mx-auto"),
        )}
      >
        The page you're looking for doesn't exist or has been moved. Let's get
        you back on track.
      </p>
      <button
        className={twMerge(
          clsx(
            classes.button,
            "px-6 py-2.5 text-sm cursor-pointer inline-flex items-center gap-2",
          ),
        )}
      >
        <Home className="w-4 h-4" />
        Back to Home
      </button>
    </div>
  );
}
