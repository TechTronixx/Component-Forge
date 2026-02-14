import { useState, useRef, useCallback } from "react";

interface ColorPickerProps {
  value: string;
  onChange: (hex: string) => void;
}

const PRESETS = [
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#d946ef",
  "#ec4899",
  "#f43f5e",
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#14b8a6",
  "#06b6d4",
  "#3b82f6",
  "#2563eb",
  "#0ea5e9",
  "#64748b",
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
          className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-[var(--color-forge-border)] text-white text-xs font-mono focus:border-[var(--color-primary)] outline-none transition-colors"
          placeholder="#6366f1"
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
                ? "ring-2 ring-white ring-offset-1 ring-offset-[var(--color-forge-dark)]"
                : ""
            }`}
            style={{ backgroundColor: hex }}
          />
        ))}
      </div>
    </div>
  );
}
