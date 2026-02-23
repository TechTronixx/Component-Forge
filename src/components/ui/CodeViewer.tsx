import ForgeIcon from "../ui/ForgeIcon";
import { useState, useCallback } from "react";
import { useThemeStore } from "../../store/themeStore";
import type { ThemeState } from "../../store/themeStore";
import { TEMPLATES } from "../../lib/codeTemplates";
import {
  generateThemeClasses,
  getRadius,
  getShadow,
  getBorder,
  getDensity,
  getFont,
} from "../../lib/themeUtils";


interface CodeViewerProps {
  componentId: string;
  format: "react" | "html";
}

export default function CodeViewer({ componentId, format }: CodeViewerProps) {
  const [copied, setCopied] = useState(false);

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
  const radius = getRadius(borderRadius);
  const shadow = getShadow(shadowDepth);
  const border = getBorder(borderWidth);
  const padding = getDensity(density);
  const font = getFont(fontStyle);

  const theme = useThemeStore((s) => s);

  const code = generateCode(componentId, format, theme, classes, {
    radius,
    shadow,
    border,
    padding,
    font,
  });

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  return (
    <div className="relative rounded-xl border border-[var(--color-forge-border)] bg-[var(--color-forge-dark)] overflow-hidden">
      {/* Copy Button */}
      <div className="absolute top-3 right-3 z-10">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-[var(--color-forge-border)] text-xs text-[var(--color-forge-muted)] hover:bg-white/10 hover:text-white transition-all"
        >
          {copied ? (
            <>
              <ForgeIcon icon="solar:check-read-bold" className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <ForgeIcon icon="solar:copy-bold" className="w-3 h-3" />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code Block */}
      <pre className="p-5 pt-12 overflow-auto text-xs leading-relaxed font-[family-name:var(--font-mono)] text-[var(--color-forge-text)] max-h-[600px]">
        <code>{code}</code>
      </pre>
    </div>
  );
}

/**
 * Generates component code string based on format and current theme.
 */
function generateCode(
  componentId: string,
  format: "react" | "html",
  theme: ThemeState,
  classes: ReturnType<typeof generateThemeClasses>,
  tokens: {
    radius: string;
    shadow: string;
    border: string;
    padding: string;
    font: string;
  },
): string {
  if (TEMPLATES[componentId]) {
    return TEMPLATES[componentId](theme, format);
  }

  if (format === "react") {
    return generateReactCode(componentId, classes, tokens);
  }
  return generateHtmlCode(componentId, classes, tokens);
}

function generateReactCode(
  componentId: string,
  classes: ReturnType<typeof generateThemeClasses>,
  tokens: {
    radius: string;
    shadow: string;
    border: string;
    padding: string;
    font: string;
  },
): string {
  switch (componentId) {
    case "PrimaryButton":
      return `export function PrimaryButton({ children, ...props }) {
  return (
    <button
      className="${classes.button} ${tokens.padding} ${tokens.font}"
      {...props}
    >
      {children}
    </button>
  );
}`;
    case "SecondaryButton":
      return `export function SecondaryButton({ children, ...props }) {
  return (
    <button
      className="${classes.buttonSecondary} ${tokens.padding} ${tokens.font}"
      {...props}
    >
      {children}
    </button>
  );
}`;
    case "InputField":
      return `export function InputField({ label, ...props }) {
  return (
    <div className="space-y-1.5">
      {label && <label className="${classes.text} text-sm font-medium">{label}</label>}
      <input
        className="${classes.input} ${tokens.padding} ${tokens.font} w-full"
        {...props}
      />
    </div>
  );
}`;
    case "Badge":
      return `export function Badge({ children, ...props }) {
  return (
    <span
      className="${classes.badge} px-2.5 py-1 ${tokens.font}"
      {...props}
    >
      {children}
    </span>
  );
}`;
    case "Alert":
      return `export function Alert({ title, message, variant = "info" }) {
  return (
    <div className="${classes.card} ${tokens.padding} ${tokens.font}">
      <h4 className="${classes.heading} text-sm mb-1">{title}</h4>
      <p className="${classes.text} text-sm opacity-80">{message}</p>
    </div>
  );
}`;
    default:
      return `// Code generation for ${componentId}
export function ${componentId}(props) {
  return (
    <div className="${classes.card} ${tokens.padding} ${tokens.font}">
      <h3 className="${classes.heading}">${componentId}</h3>
      <p className="${classes.text}">Component content</p>
    </div>
  );
}`;
  }
}

function generateHtmlCode(
  componentId: string,
  classes: ReturnType<typeof generateThemeClasses>,
  tokens: {
    radius: string;
    shadow: string;
    border: string;
    padding: string;
    font: string;
  },
): string {
  switch (componentId) {
    case "PrimaryButton":
      return `<button class="${classes.button} ${tokens.padding} ${tokens.font}">
  Click me
</button>`;
    case "SecondaryButton":
      return `<button class="${classes.buttonSecondary} ${tokens.padding} ${tokens.font}">
  Click me
</button>`;
    case "InputField":
      return `<div class="space-y-1.5">
  <label class="${classes.text} text-sm font-medium">Label</label>
  <input
    type="text"
    class="${classes.input} ${tokens.padding} ${tokens.font} w-full"
    placeholder="Enter text..."
  />
</div>`;
    default:
      return `<!-- ${componentId} -->
<div class="${classes.card} ${tokens.padding} ${tokens.font}">
  <h3 class="${classes.heading}">${componentId}</h3>
  <p class="${classes.text}">Component content</p>
</div>`;
  }
}
