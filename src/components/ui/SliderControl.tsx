interface SliderControlProps {
  label: string;
  value: number;
  min: number;
  max: number;
  labels: string[];
  onChange: (value: number) => void;
}

export default function SliderControl({
  label,
  value,
  min,
  max,
  labels,
  onChange,
}: SliderControlProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-[var(--color-forge-text)]">{label}</span>
        <span className="text-[10px] text-[var(--color-brand)] font-medium bg-[var(--color-brand)]/10 px-1.5 py-0.5 rounded">
          {labels[value] ?? value}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-white/10
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-[var(--color-brand)]
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-[var(--color-forge-dark)]
            [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:transition-transform
            [&::-webkit-slider-thumb]:hover:scale-110
            [&::-moz-range-thumb]:w-4
            [&::-moz-range-thumb]:h-4
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-[var(--color-brand)]
            [&::-moz-range-thumb]:border-2
            [&::-moz-range-thumb]:border-[var(--color-forge-dark)]"
          style={{
            background: `linear-gradient(to right, var(--color-brand) 0%, var(--color-brand) ${percentage}%, rgba(255,255,255,0.1) ${percentage}%, rgba(255,255,255,0.1) 100%)`,
          }}
        />
      </div>
      {labels.length > 2 && (
        <div className="flex justify-between mt-1.5">
          {labels.map((lbl, i) => (
            <span
              key={i}
              className={`text-[9px] ${
                i === value
                  ? "text-[var(--color-brand)]"
                  : "text-[var(--color-forge-muted)]"
              }`}
            >
              {lbl}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
