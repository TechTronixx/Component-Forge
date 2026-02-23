import { useThemeStore } from "../../../store/themeStore";
import {
  generateThemeClasses,
  getDensity,
  getFont,
} from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ForgeIcon from "../../ui/ForgeIcon";

const ALERTS = [
  {
    variant: "success",
    icon: "solar:check-circle-bold",
    title: "Success",
    message: "Your changes have been saved.",
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    variant: "warning",
    icon: "solar:danger-bold",
    title: "Warning",
    message: "Your trial expires in 3 days.",
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    variant: "error",
    icon: "solar:close-circle-bold",
    title: "Error",
    message: "Something went wrong. Try again.",
    color: "text-red-400 bg-red-500/10 border-red-500/20",
  },
  {
    variant: "info",
    icon: "solar:info-circle-bold",
    title: "Info",
    message: "A new version is available.",
    color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  },
];

export default function Alert() {
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
  const padding = getDensity(density);
  const font = getFont(fontStyle);

  return (
    <div className={twMerge(clsx("w-full max-w-md space-y-3", font))}>
      {ALERTS.map(({ variant, icon, title, message, color }) => (
        <div
          key={variant}
          className={twMerge(
            clsx(
              archetype === "brutal"
                ? clsx(classes.card, padding)
                : clsx("border rounded-lg", padding, color),
            ),
          )}
        >
          <div className="flex items-start gap-3">
            <ForgeIcon icon={icon} className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold">{title}</h4>
              <p className="text-xs opacity-80 mt-0.5">{message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
