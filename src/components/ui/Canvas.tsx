import ForgeIcon from "../ui/ForgeIcon";
import { Suspense, useState } from "react";
import { useThemeStore } from "../../store/themeStore";
import { getComponentById } from "../../lib/componentRegistry";

import { motion, AnimatePresence } from "framer-motion";
import CodeViewer from "./CodeViewer";

const contentVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -8,
    filter: "blur(4px)",
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] as const },
  },
};

export default function Canvas(): React.ReactElement {
  const activeComponent = useThemeStore((s) => s.activeComponent);
  const viewMode = useThemeStore((s) => s.viewMode);
  const setViewMode = useThemeStore((s) => s.setViewMode);
  const codeTab = useThemeStore((s) => s.codeTab);
  const setCodeTab = useThemeStore((s) => s.setCodeTab);

  const entry = getComponentById(activeComponent);
  const [previewError, setPreviewError] = useState(false);

  if (!entry) {
    return (
      <div className="flex-1 flex items-center justify-center text-forge-muted text-sm">
        Select a component from the sidebar
      </div>
    );
  }

  const PreviewComponent = entry.component;

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* ── Canvas Header ── */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-forge-border bg-forge-dark/50 shrink-0">
        <div className="flex items-center gap-3">
          <h2 className="text-sm font-semibold text-white">{entry.name}</h2>
          <span className="text-[10px] text-forge-muted bg-white/5 px-1.5 py-0.5 rounded capitalize">
            {entry.category}
          </span>
        </div>

        <div className="flex items-center gap-1">
          {/* View Tabs */}
          <div className="flex bg-white/5 rounded-lg p-0.5 mr-3 relative">
            {(["preview", "react", "html"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setCodeTab(tab)}
                className={`relative z-10 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  codeTab === tab
                    ? "text-[var(--color-brand)]"
                    : "text-[var(--color-forge-muted)] hover:text-white/70"
                }`}
              >
                {codeTab === tab && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 rounded-md bg-(--color-brand)/15"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">
                  {tab === "preview"
                    ? "Preview"
                    : tab === "react"
                      ? "React"
                      : "HTML"}
                </span>
              </button>
            ))}
          </div>

          {/* Viewport Toggle */}
          <div className="flex bg-white/5 rounded-lg p-0.5">
            <button
              onClick={() => setViewMode("desktop")}
              className={`p-1.5 rounded-md transition-colors ${
                viewMode === "desktop"
                  ? "bg-white/10 text-white"
                  : "text-[var(--color-forge-muted)]"
              }`}
            >
              <ForgeIcon icon="solar:monitor-bold" className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode("mobile")}
              className={`p-1.5 rounded-md transition-colors ${
                viewMode === "mobile"
                  ? "bg-white/10 text-white"
                  : "text-[var(--color-forge-muted)]"
              }`}
            >
              <ForgeIcon icon="solar:smartphone-bold" className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Preview / Code Area ── */}
      <div className="flex-1 overflow-auto p-6 bg-forge-black">
        <AnimatePresence mode="wait">
          {codeTab === "preview" ? (
            <motion.div
              key={`preview-${activeComponent}`}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="mx-auto"
                animate={{
                  maxWidth: viewMode === "mobile" ? 375 : 9999,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <div className="rounded-xl border border-forge-border bg-forge-dark/30 p-8 min-h-[300px] flex items-center justify-center">
                  <Suspense
                    fallback={
                      <div className="w-5 h-5 border-2 border-(--color-brand) border-t-transparent rounded-full animate-spin" />
                    }
                  >
                    {previewError ? (
                      <p className="text-[var(--color-forge-muted)] text-sm">
                        Component preview coming soon
                      </p>
                    ) : (
                      <ErrorBoundary onError={() => setPreviewError(true)}>
                        <PreviewComponent />
                      </ErrorBoundary>
                    )}
                  </Suspense>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key={`code-${activeComponent}-${codeTab}`}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <CodeViewer componentId={activeComponent} format={codeTab} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ── Inline Error Boundary ── */
import { Component, type ReactNode, type ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  onError: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidCatch(_error: Error, _info: ErrorInfo): void {
    this.props.onError();
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <p className="text-[var(--color-forge-muted)] text-sm">
          Component preview coming soon
        </p>
      );
    }
    return this.props.children;
  }
}
