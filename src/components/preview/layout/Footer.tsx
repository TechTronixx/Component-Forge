import { useThemeStore } from "../../../store/themeStore";
import { generateThemeClasses, getFont } from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Github, Twitter, Sparkles } from "lucide-react";

export default function Footer() {
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

  const columns = [
    { title: "Product", links: ["Features", "Pricing", "Changelog", "Docs"] },
    { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
    { title: "Legal", links: ["Privacy", "Terms", "License"] },
  ];

  return (
    <footer className={twMerge(clsx(classes.wrapper, font, "w-full p-6"))}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[var(--color-primary)]" />
            <span className={twMerge(clsx(classes.heading, "text-sm"))}>
              Acme
            </span>
          </div>
          <p className={twMerge(clsx(classes.text, "text-xs opacity-60 mb-4"))}>
            Building the future, one component at a time.
          </p>
          <div className="flex gap-3">
            <Github className="w-4 h-4 text-[var(--color-forge-muted)] hover:text-[var(--color-primary)] cursor-pointer transition-colors" />
            <Twitter className="w-4 h-4 text-[var(--color-forge-muted)] hover:text-[var(--color-primary)] cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Link Columns */}
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className={twMerge(clsx(classes.heading, "text-xs mb-3"))}>
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className={twMerge(
                      clsx(
                        classes.text,
                        "text-xs opacity-60 hover:opacity-100 transition-opacity",
                      ),
                    )}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className={twMerge(clsx(classes.text, "text-xs opacity-50"))}>
          © 2026 Acme Inc. All rights reserved.
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className={twMerge(clsx(classes.input, "px-3 py-1.5 text-xs w-48"))}
          />
          <button
            className={twMerge(
              clsx(classes.button, "px-4 py-1.5 text-xs cursor-pointer"),
            )}
          >
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}
