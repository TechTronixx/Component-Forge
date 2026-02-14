import { useThemeStore } from "../../../store/themeStore";
import { generateThemeClasses, getFont } from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = ["Products", "Solutions", "Pricing", "Docs"];

  return (
    <div className={twMerge(clsx(font, "w-full"))}>
      <nav
        className={twMerge(
          clsx(classes.wrapper, "flex items-center justify-between px-5 py-3"),
        )}
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[var(--color-primary)]" />
          <span className={twMerge(clsx(classes.heading, "text-sm"))}>
            Acme Inc
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className={twMerge(
                clsx(
                  classes.text,
                  "text-sm hover:text-[var(--color-primary)] transition-colors",
                ),
              )}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <button
            className={twMerge(
              clsx(
                classes.buttonSecondary,
                "px-4 py-1.5 text-sm cursor-pointer",
              ),
            )}
          >
            Log In
          </button>
          <button
            className={twMerge(
              clsx(classes.button, "px-4 py-1.5 text-sm cursor-pointer"),
            )}
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={twMerge(clsx(classes.text, "md:hidden cursor-pointer"))}
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className={twMerge(
            clsx(classes.wrapper, "md:hidden p-4 space-y-3 border-t-0"),
          )}
        >
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className={twMerge(clsx(classes.text, "block text-sm py-1"))}
            >
              {link}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <button
              className={twMerge(
                clsx(classes.button, "flex-1 py-2 text-sm cursor-pointer"),
              )}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
