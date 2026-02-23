import ForgeIcon from "../../ui/ForgeIcon";
import { useThemeStore } from "../../../store/themeStore";
import { generateThemeClasses, getFont } from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";


const TOASTS = [
  {
    icon: CheckCircle,
    message: "Changes saved successfully",
    color: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  {
    icon: AlertTriangle,
    message: "Connection is unstable",
    color: "text-amber-400",
    border: "border-amber-500/20",
  },
  {
    icon: Info,
    message: "New update available",
    color: "text-sky-400",
    border: "border-sky-500/20",
  },
];

export default function Toast() {
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

  return (
    <div className={twMerge(clsx("w-full max-w-sm space-y-3", font))}>
      {TOASTS.map(({ icon: Icon, message, color, border }, i) => (
        <div
          key={i}
          className={twMerge(
            clsx(
              classes.card,
              "flex items-center gap-3 px-4 py-3 shadow-lg",
              archetype !== "brutal" && border,
            ),
          )}
        >
          <Icon className={twMerge(clsx("w-4 h-4 shrink-0", color))} />
          <span className={twMerge(clsx(classes.text, "text-sm flex-1"))}>
            {message}
          </span>
          <button className="text-[var(--color-forge-muted)] hover:text-white cursor-pointer transition-colors">
            <ForgeIcon icon="solar:close-circle-bold" className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
}
