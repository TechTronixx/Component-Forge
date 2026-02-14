import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

const Landing = lazy(() => import("./pages/Landing"));
const Studio = lazy(() => import("./pages/Studio"));
import ArchetypeToast from "./components/ui/ArchetypeToast";

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

function App(): React.ReactElement {
  const location = useLocation();

  return (
    <div className="noise-overlay">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-[var(--color-forge-black)]">
            <div className="w-8 h-8 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen"
          >
            <Routes location={location}>
              <Route path="/" element={<Landing />} />
              <Route path="/studio" element={<Studio />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </Suspense>
      <ArchetypeToast />
    </div>
  );
}

export default App;
