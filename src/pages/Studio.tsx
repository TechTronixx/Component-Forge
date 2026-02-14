import { Suspense, useEffect } from "react";
import { useThemeStore } from "../store/themeStore";
import { generatePalette, injectCSSVariables } from "../lib/colorUtils";
import Sidebar from "../components/ui/Sidebar";
import ControlPanel from "../components/ui/ControlPanel";
import Canvas from "../components/ui/Canvas";
import VibeWizard from "../components/ui/VibeWizard";

export default function Studio() {
  const primaryColor = useThemeStore((s) => s.primaryColor);

  // Inject CSS variables on mount & when color changes
  useEffect(() => {
    const palette = generatePalette(primaryColor);
    injectCSSVariables(palette);
  }, [primaryColor]);

  return (
    <div className="h-screen flex flex-col bg-[var(--color-forge-black)] overflow-hidden">
      {/* ── Studio Header ── */}
      <header className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--color-forge-border)] bg-[var(--color-forge-dark)]/80 backdrop-blur-sm shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-secondary)] flex items-center justify-center">
            <span className="text-white text-xs font-bold">CF</span>
          </div>
          <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-white tracking-tight">
            ComponentForge
          </span>
          <span className="text-[10px] text-[var(--color-forge-muted)] bg-white/5 px-1.5 py-0.5 rounded">
            Studio
          </span>
        </div>
      </header>

      {/* ── Main Layout ── */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Center Canvas */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <Suspense
            fallback={
              <div className="flex-1 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-[var(--color-brand)] border-t-transparent rounded-full animate-spin" />
              </div>
            }
          >
            <Canvas />
          </Suspense>
        </main>

        {/* Right Control Panel */}
        <ControlPanel />
      </div>

      {/* ── Onboarding Wizard ── */}
      <VibeWizard />
    </div>
  );
}
