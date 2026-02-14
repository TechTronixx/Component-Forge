import { useThemeStore } from "../../../store/themeStore";
import { generateThemeClasses } from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function SectionDivider() {
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

  return (
    <div className="w-full space-y-8">
      {/* Simple line */}
      <div className="border-t border-[var(--color-forge-border)]" />

      {/* With text */}
      <div className="flex items-center gap-4">
        <div className="flex-1 border-t border-[var(--color-forge-border)]" />
        <span
          className={twMerge(
            clsx(classes.text, "text-xs opacity-50 uppercase tracking-wider"),
          )}
        >
          or
        </span>
        <div className="flex-1 border-t border-[var(--color-forge-border)]" />
      </div>

      {/* Gradient fade */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent" />

      {/* Dotted */}
      <div className="border-t border-dashed border-[var(--color-forge-border)]" />

      {/* With icon */}
      <div className="flex items-center gap-4">
        <div className="flex-1 border-t border-[var(--color-forge-border)]" />
        <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
        <div className="flex-1 border-t border-[var(--color-forge-border)]" />
      </div>
    </div>
  );
}
