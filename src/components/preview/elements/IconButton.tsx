import { useThemeStore } from "../../../store/themeStore";
import { generateThemeClasses } from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Heart, Share2, Settings, Plus, Trash2, Download } from "lucide-react";

export default function IconButton() {
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

  const icons = [
    { icon: Heart, label: "Like" },
    { icon: Share2, label: "Share" },
    { icon: Settings, label: "Settings" },
    { icon: Plus, label: "Add" },
    { icon: Trash2, label: "Delete" },
    { icon: Download, label: "Download" },
  ];

  return (
    <div className="flex flex-wrap gap-3 items-center">
      {icons.map(({ icon: Icon, label }) => (
        <button
          key={label}
          title={label}
          className={twMerge(clsx(classes.button, "p-2.5 cursor-pointer"))}
        >
          <Icon className="w-4 h-4" />
        </button>
      ))}
    </div>
  );
}
