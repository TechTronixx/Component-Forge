import { useThemeStore } from "../../../store/themeStore";
import { generateThemeClasses, getFont } from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ForgeIcon from "../../ui/ForgeIcon";
import { useState } from "react";

const NAV_ITEMS = [
  { icon: "solar:home-2-bold-duotone", label: "Dashboard", active: true },
  { icon: "solar:graph-bold-duotone", label: "Analytics" },
  { icon: "solar:users-group-rounded-bold-duotone", label: "Team" },
  { icon: "solar:document-text-bold-duotone", label: "Documents" },
  { icon: "solar:settings-bold-duotone", label: "Settings" },
  { icon: "solar:question-square-bold-duotone", label: "Help" },
];

export default function SidebarNav() {
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
  const [active, setActive] = useState("Dashboard");

  return (
    <div className={twMerge(clsx(classes.wrapper, font, "w-56 p-3 space-y-1"))}>
      {NAV_ITEMS.map(({ icon, label }) => (
        <button
          key={label}
          onClick={() => setActive(label)}
          className={twMerge(
            clsx(
              "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all cursor-pointer",
              active === label
                ? "bg-(--color-primary)/15 text-(--color-primary)"
                : clsx(
                    classes.text,
                    "opacity-60 hover:opacity-100 hover:bg-white/5",
                  ),
            ),
          )}
        >
          <ForgeIcon icon={icon} className="w-4 h-4 shrink-0" />
          {label}
        </button>
      ))}
    </div>
  );
}
