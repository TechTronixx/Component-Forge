import { useThemeStore } from "../../../store/themeStore";
import { getFont, generateThemeClasses } from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

export default function RadioGroup() {
  const fontStyle = useThemeStore((s) => s.fontStyle);
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
  const font = getFont(fontStyle);
  const [selected, setSelected] = useState("monthly");

  const options = [
    { value: "monthly", label: "Monthly", desc: "$9/month" },
    { value: "yearly", label: "Yearly", desc: "$89/year — Save 18%" },
    { value: "lifetime", label: "Lifetime", desc: "$299 one-time" },
  ];

  return (
    <div className={twMerge(clsx("space-y-2 max-w-sm", font))}>
      <p className="text-sm font-medium text-[var(--color-forge-text)] mb-3">
        Choose a plan
      </p>
      {options.map((opt) => (
        <label
          key={opt.value}
          onClick={() => setSelected(opt.value)}
          className={twMerge(
            clsx(
              "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all",
              selected === opt.value
                ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5"
                : "border-[var(--color-forge-border)] hover:border-[var(--color-forge-muted)]",
            ),
          )}
        >
          <div
            className={twMerge(
              clsx(
                "w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0",
                selected === opt.value
                  ? "border-[var(--color-primary)]"
                  : "border-[var(--color-forge-border)]",
              ),
            )}
          >
            {selected === opt.value && (
              <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
            )}
          </div>
          <div>
            <p className={twMerge(clsx(classes.text, "text-sm font-medium"))}>
              {opt.label}
            </p>
            <p className={twMerge(clsx(classes.text, "text-xs opacity-60"))}>
              {opt.desc}
            </p>
          </div>
        </label>
      ))}
    </div>
  );
}
