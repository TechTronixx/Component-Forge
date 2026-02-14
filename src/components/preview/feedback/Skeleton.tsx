import { useThemeStore } from "../../../store/themeStore";
import { generateThemeClasses } from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function Skeleton() {
  const archetype = useThemeStore((s) => s.archetype);
  const borderRadius = useThemeStore((s) => s.borderRadius);
  const borderWidth = useThemeStore((s) => s.borderWidth);
  const shadowDepth = useThemeStore((s) => s.shadowDepth);

  const classes = generateThemeClasses({
    archetype,
    borderRadius,
    borderWidth,
    shadowDepth,
  });

  const shimmer = "animate-pulse bg-white/[0.06]";

  return (
    <div
      className={twMerge(clsx(classes.card, "w-full max-w-sm p-5 space-y-4"))}
    >
      {/* Avatar + Text */}
      <div className="flex items-center gap-3">
        <div className={twMerge(clsx("w-10 h-10 rounded-full", shimmer))} />
        <div className="flex-1 space-y-2">
          <div className={twMerge(clsx("h-3 w-32 rounded", shimmer))} />
          <div className={twMerge(clsx("h-2.5 w-20 rounded", shimmer))} />
        </div>
      </div>

      {/* Image placeholder */}
      <div className={twMerge(clsx("w-full h-36 rounded-lg", shimmer))} />

      {/* Text lines */}
      <div className="space-y-2">
        <div className={twMerge(clsx("h-3 w-full rounded", shimmer))} />
        <div className={twMerge(clsx("h-3 w-4/5 rounded", shimmer))} />
        <div className={twMerge(clsx("h-3 w-3/5 rounded", shimmer))} />
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <div className={twMerge(clsx("h-8 flex-1 rounded", shimmer))} />
        <div className={twMerge(clsx("h-8 w-20 rounded", shimmer))} />
      </div>
    </div>
  );
}
