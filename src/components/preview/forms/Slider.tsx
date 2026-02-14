import { useThemeStore } from "../../../store/themeStore";
import { getFont } from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

export default function Slider() {
  const fontStyle = useThemeStore((s) => s.fontStyle);
  const font = getFont(fontStyle);
  const [value, setValue] = useState(60);
  const percentage = value;

  return (
    <div className={twMerge(clsx("w-full max-w-sm space-y-4", font))}>
      <div className="space-y-2">
        <div className="flex justify-between">
          <label className="text-sm font-medium text-[var(--color-forge-text)]">
            Volume
          </label>
          <span className="text-sm text-[var(--color-primary)] font-mono">
            {value}%
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-[var(--color-primary)]
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-white
            [&::-webkit-slider-thumb]:shadow-lg
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-[var(--color-primary)]
            [&::-moz-range-thumb]:border-2
            [&::-moz-range-thumb]:border-white"
          style={{
            background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${percentage}%, rgba(255,255,255,0.1) ${percentage}%, rgba(255,255,255,0.1) 100%)`,
          }}
        />
        <div className="flex justify-between text-[10px] text-[var(--color-forge-muted)]">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
}
