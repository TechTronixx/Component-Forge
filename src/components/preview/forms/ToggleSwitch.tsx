import { useThemeStore } from "../../../store/themeStore";
import { generateThemeClasses, getFont } from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

export default function ToggleSwitch() {
  const fontStyle = useThemeStore((s) => s.fontStyle);
  const archetype = useThemeStore((s) => s.archetype);
  const borderRadius = useThemeStore((s) => s.borderRadius);
  const borderWidth = useThemeStore((s) => s.borderWidth);
  const shadowDepth = useThemeStore((s) => s.shadowDepth);

  const font = getFont(fontStyle);

  const classes = generateThemeClasses({
    archetype,
    borderRadius,
    borderWidth,
    shadowDepth,
  });

  const [toggles, setToggles] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
  });

  const toggle = (key: keyof typeof toggles) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const items = [
    {
      key: "notifications" as const,
      label: "Push Notifications",
      desc: "Receive alerts on your device",
    },
    { key: "darkMode" as const, label: "Dark Mode", desc: "Use dark theme" },
    {
      key: "autoSave" as const,
      label: "Auto-save",
      desc: "Automatically save changes",
    },
  ];

  return (
    <div className={twMerge(clsx("space-y-4 max-w-sm", font))}>
      {items.map(({ key, label, desc }) => (
        <div key={key} className="flex items-center justify-between">
          <div>
            <p className={twMerge(clsx(classes.text, "text-sm font-medium"))}>
              {label}
            </p>
            <p className={twMerge(clsx(classes.text, "text-xs opacity-60"))}>
              {desc}
            </p>
          </div>
          <button
            onClick={() => toggle(key)}
            className={twMerge(
              clsx(
                "w-11 h-6 rounded-full relative transition-colors cursor-pointer",
                archetype === "brutal" ? "border-2 border-black" : "",
                toggles[key]
                  ? "bg-[var(--color-primary)]"
                  : "bg-[var(--color-forge-border)]",
              ),
            )}
          >
            <span
              className={twMerge(
                clsx(
                  "absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform",
                  toggles[key] ? "translate-x-[22px]" : "translate-x-0.5",
                ),
              )}
            />
          </button>
        </div>
      ))}
    </div>
  );
}
