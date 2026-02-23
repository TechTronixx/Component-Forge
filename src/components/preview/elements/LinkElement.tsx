import ForgeIcon from "../../ui/ForgeIcon";
import { useThemeStore } from "../../../store/themeStore";
import { getFont } from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export default function LinkElement() {
  const fontStyle = useThemeStore((s) => s.fontStyle);
  const font = getFont(fontStyle);

  return (
    <div className={twMerge(clsx("flex flex-col gap-4", font))}>
      <a
        href="#"
        className="text-[var(--color-primary)] hover:underline underline-offset-4 transition-all inline-flex items-center gap-1"
      >
        Default link style
      </a>
      <a
        href="#"
        className="text-[var(--color-primary)] hover:underline underline-offset-4 transition-all inline-flex items-center gap-1.5"
      >
        Link with icon <ForgeIcon icon="solar:stars-bold" className="w-3.5 h-3.5" />
      </a>
      <a
        href="#"
        className="text-[var(--color-forge-muted)] hover:text-[var(--color-primary)] transition-colors underline-offset-4"
      >
        Subtle link
      </a>
    </div>
  );
}
