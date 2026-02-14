import { colord, extend } from "colord";
import harmoniesPlugin from "colord/plugins/harmonies";

extend([harmoniesPlugin]);

export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  surface: string;
  surfaceDark: string;
}

/**
 * Generates a full color palette from a single hex color.
 * Uses complementary and triadic harmonies for secondary/accent.
 */
export function generatePalette(hex: string): ColorPalette {
  const base = colord(hex);

  // Secondary: rotate hue 180° (complementary), desaturate slightly
  const secondary = base.rotate(180).desaturate(0.1).toHex();

  // Accent: rotate hue 120° (triadic), boost saturation
  const accent = base.rotate(120).saturate(0.15).lighten(0.05).toHex();

  // Surface: very dark desaturated tint of the primary
  const surface = base.desaturate(0.6).darken(0.35).toHex();

  // Surface dark: even darker for deep backgrounds
  const surfaceDark = base.desaturate(0.7).darken(0.42).toHex();

  return {
    primary: hex,
    secondary,
    accent,
    surface,
    surfaceDark,
  };
}

/**
 * Injects the color palette as CSS custom properties on :root.
 */
export function injectCSSVariables(palette: ColorPalette): void {
  const root = document.documentElement;
  root.style.setProperty("--color-primary", palette.primary);
  root.style.setProperty("--color-secondary", palette.secondary);
  root.style.setProperty("--color-accent", palette.accent);
  root.style.setProperty("--color-surface", palette.surface);
  root.style.setProperty("--color-surface-dark", palette.surfaceDark);
}
