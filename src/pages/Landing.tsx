import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Sparkles,
  Layers,
  Palette,
  Code2,
  ArrowRight,
  Zap,
  Monitor,
  Smartphone,
} from "lucide-react";

const ARCHETYPES = [
  {
    id: "glass",
    label: "Spatial Glass",
    desc: "Frosted layers, depth, luminance",
    gradient: "from-blue-500/20 via-purple-500/10 to-cyan-500/20",
    border: "border-white/15",
    preview: "backdrop-blur-xl bg-white/5",
  },
  {
    id: "brutal",
    label: "Soft Brutalism",
    desc: "Bold borders, hard shadows, pastel pops",
    gradient: "from-yellow-400/20 via-orange-500/10 to-red-500/20",
    border: "border-black",
    preview:
      "bg-yellow-100/10 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]",
  },
  {
    id: "bento",
    label: "Fluid Bento",
    desc: "Soft grids, gentle radius, modern clean",
    gradient: "from-emerald-500/20 via-teal-500/10 to-green-500/20",
    border: "border-white/10",
    preview: "bg-white/5 rounded-2xl border border-white/10",
  },
  {
    id: "swiss",
    label: "Corporate Swiss",
    desc: "Typography-driven, sharp, kinetic",
    gradient: "from-red-500/20 via-white/5 to-neutral-500/20",
    border: "border-white/10",
    preview: "bg-transparent border-b-2 border-white/30",
  },
];

const FEATURES = [
  {
    icon: Palette,
    title: "Smart Palettes",
    desc: "Pick one color. Get a full system.",
  },
  {
    icon: Layers,
    title: "32 Components",
    desc: "Forms, cards, navs, modals—all styled.",
  },
  {
    icon: Code2,
    title: "Copy & Paste",
    desc: "React or HTML. One click export.",
  },
  {
    icon: Zap,
    title: "Real-time Tuning",
    desc: "Radius, shadow, density—live preview.",
  },
  {
    icon: Monitor,
    title: "Desktop Preview",
    desc: "See your components at full width.",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    desc: "Responsive-first generated code.",
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Landing() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* ── Gradient Mesh Background ── */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[var(--color-forge-black)]" />
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[var(--color-primary)]/8 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--color-secondary)]/6 blur-[100px]" />
        <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full bg-[var(--color-accent)]/5 blur-[80px]" />
      </div>

      {/* ── Navbar ── */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-[family-name:var(--font-display)] text-lg font-bold text-white tracking-tight">
            ComponentForge
          </span>
        </div>
        <Link
          to="/studio"
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-all"
        >
          Open Studio
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </nav>

      {/* ── Hero ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20 text-center"
      >
        <motion.div variants={fadeUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-[var(--color-primary)] text-xs font-medium tracking-wider uppercase">
            <Sparkles className="w-3 h-3" />
            The 2026 Semantic UI Generator
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-800 text-white leading-[0.95] tracking-tight mb-6"
        >
          Generate UI.
          <br />
          <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] bg-clip-text text-transparent">
            Not Regret.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="max-w-xl mx-auto text-base md:text-lg text-[var(--color-forge-muted)] leading-relaxed mb-10"
        >
          Pick a vibe. Tune the details. Export 32 production-ready Tailwind
          components as React or HTML. Zero config. Full control.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Link
            to="/studio"
            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[var(--color-primary)] text-white font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-[var(--color-primary)]/25"
          >
            Start Generating
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href="#archetypes"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white/80 font-medium text-sm hover:bg-white/10 hover:text-white transition-all"
          >
            See the Vibes
          </a>
        </motion.div>
      </motion.section>

      {/* ── Archetype Cards ── */}
      <motion.section
        id="archetypes"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-20"
      >
        <motion.h2
          variants={fadeUp}
          className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white text-center mb-4"
        >
          Four Vibes. Infinite Components.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-center text-[var(--color-forge-muted)] mb-14 max-w-lg mx-auto"
        >
          Each archetype defines a complete visual language — borders, shadows,
          backgrounds, and motion patterns.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ARCHETYPES.map((arch) => (
            <motion.div key={arch.id} variants={scaleIn}>
              <Link
                to="/studio"
                className={`group block p-6 rounded-2xl bg-gradient-to-br ${arch.gradient} border ${arch.border} backdrop-blur-sm hover:scale-[1.03] transition-transform duration-300`}
              >
                <div
                  className={`w-full h-28 mb-5 ${arch.preview} rounded-lg flex items-center justify-center`}
                >
                  <div className="w-20 h-6 rounded bg-white/20" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white mb-1">
                  {arch.label}
                </h3>
                <p className="text-sm text-white/50">{arch.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Features Grid ── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 max-w-5xl mx-auto px-6 py-20"
      >
        <motion.h2
          variants={fadeUp}
          className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white text-center mb-14"
        >
          Everything You Need
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <motion.div
              key={f.title}
              variants={scaleIn}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/10 transition-colors"
            >
              <f.icon className="w-8 h-8 text-[var(--color-primary)] mb-4" />
              <h3 className="font-[family-name:var(--font-display)] text-white font-semibold mb-1.5">
                {f.title}
              </h3>
              <p className="text-sm text-[var(--color-forge-muted)]">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center">
        <p className="text-sm text-[var(--color-forge-muted)]">
          ComponentForge © 2026 · Built with React, Tailwind CSS, and Framer
          Motion
        </p>
      </footer>
    </div>
  );
}
