import ForgeIcon from "../../ui/ForgeIcon";
import { useThemeStore } from "../../../store/themeStore";
import {
  generateThemeClasses,
  getDensity,
  getFont,
} from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { useState } from "react";

export default function Modal() {
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
  const [open, setOpen] = useState(true);

  return (
    <div className={twMerge(clsx("w-full", font))}>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className={twMerge(
            clsx(classes.button, "px-4 py-2 text-sm cursor-pointer"),
          )}
        >
          Open Modal
        </button>
      )}
      {open && (
        <div className="relative">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-xl" />

          {/* Dialog */}
          <div className="relative max-w-sm mx-auto mt-8 mb-8">
            <div className={twMerge(clsx(classes.card, padding, "space-y-4"))}>
              <div className="flex items-center justify-between">
                <h3 className={twMerge(clsx(classes.heading, "text-base"))}>
                  Confirm Action
                </h3>
                <button
                  onClick={() => setOpen(false)}
                  className={twMerge(
                    clsx(
                      classes.text,
                      "opacity-50 hover:opacity-100 transition-opacity cursor-pointer",
                    ),
                  )}
                >
                  <ForgeIcon icon="solar:close-circle-bold" className="w-4 h-4" />
                </button>
              </div>
              <p className={twMerge(clsx(classes.text, "text-sm opacity-70"))}>
                Are you sure you want to proceed? This action cannot be undone.
              </p>
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => setOpen(false)}
                  className={twMerge(
                    clsx(
                      classes.buttonSecondary,
                      "px-4 py-2 text-sm cursor-pointer",
                    ),
                  )}
                >
                  Cancel
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className={twMerge(
                    clsx(classes.button, "px-4 py-2 text-sm cursor-pointer"),
                  )}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
