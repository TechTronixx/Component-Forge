import { useState, useRef, useCallback } from "react";

interface ColorPickerProps {
  value: string;
  onChange: (hex: string) => void;
}

const PRESETS = [
  "#14b8a6", // Teal
  "#10b981", // Emerald
  "#059669", // Dark Emerald
  "#22c55e", // Green
  "#16a34a", // Dark Green
  "#84cc16", // Lime
  "#eab308", // Yellow
  "#f59e0b", // Amber
  "#f97316", // Orange
  "#ea580c", // Dark Orange
  "#3b82f6", // Blue
  "#2563eb", // Dark Blue
  "#6366f1", // Indigo
  "#0ea5e9", // Sky
  "#06b6d4", // Cyan
  "#64748b", // Slate
];

export default function ColorPicker({ value, onChange }: ColorPickerProps) {
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleHexInput = useCallback(
    (hex: string) => {
      setInputValue(hex);
      if (/^#[0-9a-fA-F]{6}$/.test(hex)) {
        onChange(hex);
      }
    },
    [onChange],
  );

  return (
    <div className="space-y-3">
      {/* ── Hex Input + Native Picker ── */}
      <div className="flex gap-2">
        <button
          onClick={() => inputRef.current?.click()}
          className="w-10 h-10 rounded-lg border-2 border-white/10 shrink-0 cursor-pointer transition-transform hover:scale-105"
          style={{ backgroundColor: value }}
        >
          <input
            ref={inputRef}
            type="color"
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
              setInputValue(e.target.value);
            }}
            className="sr-only"
          />
        </button>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleHexInput(e.target.value)}
          onBlur={() => setInputValue(value)}
          className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-forge-border text-white text-xs font-mono focus:border-(--color-primary) outline-none transition-colors"
          placeholder="#14b8a6"
          maxLength={7}
        />
      </div>

      {/* ── Preset Swatches ── */}
      <div className="grid grid-cols-8 gap-1.5">
        {PRESETS.map((hex) => (
          <button
            key={hex}
            onClick={() => {
              onChange(hex);
              setInputValue(hex);
            }}
            className={`w-full aspect-square rounded-md transition-transform hover:scale-110 ${
              value === hex
                ? "ring-2 ring-white ring-offset-1 ring-offset-forge-dark"
                : ""
            }`}
            style={{ backgroundColor: hex }}
          />
        ))}
      </div>
    </div>
  );
}
