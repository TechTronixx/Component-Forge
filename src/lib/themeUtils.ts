import type { ThemeState } from "../store/themeStore";

export interface ThemeClasses {
  wrapper: string;
  button: string;
  buttonSecondary: string;
  input: string;
  card: string;
  badge: string;
  text: string;
  heading: string;
}

/* ── Radius mapping ── */
const RADIUS_MAP: Record<number, string> = {
  0: "rounded-none",
  1: "rounded-sm",
  2: "rounded-lg",
  3: "rounded-2xl",
  4: "rounded-full",
};

/* ── Shadow mapping ── */
const SHADOW_MAP: Record<number, string> = {
  0: "shadow-none",
  1: "shadow-sm",
  2: "shadow-md",
  3: "shadow-xl",
  4: "shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]",
};

/* ── Border mapping ── */
const BORDER_MAP: Record<number, string> = {
  0: "border-0",
  1: "border",
  2: "border-2",
  3: "border-4",
};

/* ── Density (padding) mapping ── */
const DENSITY_MAP: Record<number, { compact: string; normal: string }> = {
  0: { compact: "px-2 py-1", normal: "p-2" },
  1: { compact: "px-4 py-2", normal: "p-4" },
  2: { compact: "px-6 py-3", normal: "p-6" },
};

/* ── Font family mapping ── */
const FONT_MAP: Record<string, string> = {
  sans: "font-[family-name:var(--font-body)]",
  mono: "font-[family-name:var(--font-mono)]",
  serif: "font-[family-name:var(--font-serif)]",
  retro: "font-[family-name:var(--font-retro)]",
  cyber: "font-[family-name:var(--font-cyber)]",
  spatial: "font-[family-name:var(--font-spatial)]",
  academic: "font-[family-name:var(--font-academic)]",
  round: "font-[family-name:var(--font-round)]",
};

/**
 * Returns the resolved Tailwind utility strings for each token.
 */
export function getRadius(level: number): string {
  return RADIUS_MAP[level] ?? "rounded-lg";
}

export function getShadow(level: number): string {
  return SHADOW_MAP[level] ?? "shadow-md";
}

export function getBorder(level: number): string {
  return BORDER_MAP[level] ?? "border";
}

export function getDensity(
  level: number,
  mode: "compact" | "normal" = "normal",
): string {
  return DENSITY_MAP[level]?.[mode] ?? "p-4";
}

export function getFont(style: string): string {
  return FONT_MAP[style] ?? FONT_MAP.sans;
}

/**
 * Main theme class generator.
 * Maps the full ThemeState to archetype-specific Tailwind classes.
 */
import { getTheme } from "./themeRegistry";

/**
 * Main theme class generator.
 * Maps the full ThemeState to archetype-specific Tailwind classes.
 */
export function generateThemeClasses(
  state: Pick<
    ThemeState,
    "archetype" | "borderRadius" | "borderWidth" | "shadowDepth"
  >,
): ThemeClasses {
  const radius = getRadius(state.borderRadius);
  const shadow = getShadow(state.shadowDepth);
  const border = getBorder(state.borderWidth);

  const theme = getTheme(state.archetype);

  return theme.generate({
    radius,
    shadow,
    border,
  });
}

/**
 * Returns CSS class string for the selected font.
 */
export function getThemeFont(fontStyle: string): string {
  return getFont(fontStyle);
}
