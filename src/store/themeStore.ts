import { create } from "zustand";
import { generatePalette, injectCSSVariables } from "../lib/colorUtils";
import type { ArchetypeId } from "../lib/themeRegistry";

export type Archetype = ArchetypeId;
export type FontStyle =
  | "sans"
  | "mono"
  | "serif"
  | "retro"
  | "cyber"
  | "spatial"
  | "academic"
  | "round";
export type ViewMode = "desktop" | "mobile";
export type CodeTab = "preview" | "react" | "html";
export type ComponentCategory =
  | "layout"
  | "elements"
  | "forms"
  | "feedback"
  | "data";

export interface ThemeState {
  /* ── Archetype ── */
  archetype: Archetype;

  /* ── Fine Tuning ── */
  primaryColor: string;
  borderRadius: number; // 0-4
  borderWidth: number; // 0-3
  shadowDepth: number; // 0-4
  density: number; // 0-2 (compact / normal / spacious)
  fontStyle: FontStyle;

  /* ── UI State ── */
  activeComponent: string;
  activeCategory: ComponentCategory;
  viewMode: ViewMode;
  codeTab: CodeTab;
  wizardOpen: boolean;
}

export interface ThemeActions {
  setArchetype: (archetype: Archetype) => void;
  setPrimaryColor: (color: string) => void;
  setBorderRadius: (value: number) => void;
  setBorderWidth: (value: number) => void;
  setShadowDepth: (value: number) => void;
  setDensity: (value: number) => void;
  setFontStyle: (style: FontStyle) => void;
  setActiveComponent: (id: string) => void;
  setActiveCategory: (category: ComponentCategory) => void;
  setViewMode: (mode: ViewMode) => void;
  setCodeTab: (tab: CodeTab) => void;
  setWizardOpen: (open: boolean) => void;
}

export const useThemeStore = create<ThemeState & ThemeActions>((set) => ({
  /* ── Defaults ── */
  archetype: "bento",
  primaryColor: "#6366f1",
  borderRadius: 2,
  borderWidth: 1,
  shadowDepth: 2,
  density: 1,
  fontStyle: "sans",
  activeComponent: "PrimaryButton",
  activeCategory: "elements",
  viewMode: "desktop",
  codeTab: "preview",
  wizardOpen: true,

  /* ── Actions (functional setState per vercel-react-best-practices) ── */
  setArchetype: (archetype) => set(() => ({ archetype })),

  setPrimaryColor: (color) => {
    const palette = generatePalette(color);
    injectCSSVariables(palette);
    set(() => ({ primaryColor: color }));
  },

  setBorderRadius: (value) => set(() => ({ borderRadius: value })),
  setBorderWidth: (value) => set(() => ({ borderWidth: value })),
  setShadowDepth: (value) => set(() => ({ shadowDepth: value })),
  setDensity: (value) => set(() => ({ density: value })),
  setFontStyle: (style) => set(() => ({ fontStyle: style })),
  setActiveComponent: (id) => set(() => ({ activeComponent: id })),
  setActiveCategory: (category) => set(() => ({ activeCategory: category })),
  setViewMode: (mode) => set(() => ({ viewMode: mode })),
  setCodeTab: (tab) => set(() => ({ codeTab: tab })),
  setWizardOpen: (open) => set(() => ({ wizardOpen: open })),
}));
