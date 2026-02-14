import { useThemeStore } from "../../../store/themeStore";
import { getFont } from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { Check } from "lucide-react";

export default function Checkbox() {
  const fontStyle = useThemeStore((s) => s.fontStyle);
  const archetype = useThemeStore((s) => s.archetype);
  const font = getFont(fontStyle);

  const [checked, setChecked] = useState<Record<string, boolean>>({
    terms: true,
    newsletter: false,
    updates: true,
  });

  const toggle = (key: string) =>
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));

  const items = [
    { key: "terms", label: "I agree to the Terms of Service" },
    { key: "newsletter", label: "Subscribe to newsletter" },
    { key: "updates", label: "Receive product updates" },
  ];

  return (
    <div className={twMerge(clsx("space-y-3", font))}>
      {items.map(({ key, label }) => (
        <label
          key={key}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <button
            onClick={() => toggle(key)}
            className={twMerge(
              clsx(
                "w-5 h-5 flex items-center justify-center shrink-0 transition-all",
                archetype === "swiss" ? "rounded-none" : "rounded-md",
                checked[key]
                  ? "bg-[var(--color-primary)] border-[var(--color-primary)]"
                  : "bg-transparent border border-[var(--color-forge-border)] group-hover:border-[var(--color-primary)]/50",
              ),
            )}
          >
            {checked[key] && <Check className="w-3 h-3 text-white" />}
          </button>
          <span className="text-sm text-[var(--color-forge-text)]">
            {label}
          </span>
        </label>
      ))}
    </div>
  );
}
