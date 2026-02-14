import { useThemeStore } from "../../../store/themeStore";
import {
  generateThemeClasses,
  getDensity,
  getFont,
} from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Search } from "lucide-react";

export default function SearchBar() {
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
    <div className={twMerge(clsx("w-full max-w-md", font))}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-forge-muted)]" />
        <input
          type="search"
          placeholder="Search components, docs, or anything..."
          className={twMerge(clsx(classes.input, padding, "w-full pl-10"))}
        />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[var(--color-forge-muted)] bg-white/5 px-1.5 py-0.5 rounded border border-[var(--color-forge-border)]">
          ⌘K
        </kbd>
      </div>
    </div>
  );
}
