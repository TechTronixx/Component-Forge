import type { ThemeDefinition } from "../types/theme";
import { glass } from "./themes/glass";
import { brutal } from "./themes/brutal";
import { bento } from "./themes/bento";
import { swiss } from "./themes/swiss";
import { tinker } from "./themes/tinker";
import { fauxOS } from "./themes/faux-os";
import { eInk } from "./themes/e-ink";
import { cartographer } from "./themes/cartographer";
import { scholar } from "./themes/scholar";
import { publisher } from "./themes/publisher";
import { ascetic } from "./themes/ascetic";
import { neoclassical } from "./themes/neoclassical";
import { navigator } from "./themes/navigator";
import { indexical } from "./themes/indexical";
import { punk } from "./themes/punk";
import { hyperChrome } from "./themes/hyper-chrome";
import { refractive } from "./themes/refractive";
import { zAxis } from "./themes/z-axis";
import { biomorphic } from "./themes/biomorphic";
import { datamosh } from "./themes/datamosh";
import { typographic } from "./themes/typographic";
import { scenographer } from "./themes/scenographer";
import { topologist } from "./themes/topologist";
import { chrono } from "./themes/chrono";
import { cinematic } from "./themes/cinematic";

// Register all themes here
export const themes: Record<string, ThemeDefinition> = {
  glass,
  brutal,
  bento,
  swiss,
  tinker,
  "faux-os": fauxOS,
  "e-ink": eInk,
  cartographer,
  scholar,
  publisher,
  ascetic,
  neoclassical,
  navigator,
  indexical,
  punk,
  "hyper-chrome": hyperChrome,
  refractive,
  "z-axis": zAxis,
  biomorphic,
  datamosh,
  typographic,
  scenographer,
  topologist,
  chrono,
  cinematic,
};

export type ArchetypeId = keyof typeof themes;

export function getTheme(id: string): ThemeDefinition {
  return themes[id] ?? themes.bento;
}

export function getAllThemes(): ThemeDefinition[] {
  return Object.values(themes);
}
