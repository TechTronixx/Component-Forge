import { useThemeStore } from "../../../store/themeStore";
import { generateThemeClasses } from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ForgeIcon from "../../ui/ForgeIcon";

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
    { icon: "solar:heart-bold", label: "Like" },
    { icon: "solar:share-bold", label: "Share" },
    { icon: "solar:settings-bold", label: "Settings" },
    { icon: "solar:plus-math-bold", label: "Add" },
    { icon: "solar:trash-bin-trash-bold", label: "Delete" },
    { icon: "solar:download-bold", label: "Download" },
  ];

  return (
    <div className="flex flex-wrap gap-3 items-center">
      {icons.map(({ icon, label }) => (
        <button
          key={label}
          title={label}
          className={twMerge(clsx(classes.button, "p-2.5 cursor-pointer"))}
        >
          <ForgeIcon icon={icon} className="w-4 h-4" />
        </button>
      ))}
    </div>
  );
}
