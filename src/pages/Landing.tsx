import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Star,
  ArrowRight,
  Sparkles,
  Layers,
  Palette,
  Code2,
  Zap,
  Monitor,
  Smartphone,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Styles", href: "#archetypes" },
  { label: "Docs", href: "#" },
];

const ARCHETYPES = [
  {
    id: "glass",
    label: "Spatial Glass",
    desc: "Frosted layers, depth, luminance",
    gradient: "from-blue-500/20 via-indigo-500/10 to-blue-400/20",
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
    gradient: "from-slate-500/20 via-blue-500/10 to-slate-400/20",
    border: "border-white/10",
    preview: "bg-white/5 rounded-2xl border border-white/10",
  },
  {
    id: "swiss",
    label: "Corporate Swiss",
    desc: "Typography-driven, sharp, kinetic",
    gradient: "from-neutral-500/20 via-white/5 to-slate-500/20",
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

/* ─────────────────────────────────────────────
   Motion Variants
───────────────────────────────────────────── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export default function Landing() {
  return (
    <div className="min-h-screen bg-forge-black text-white overflow-x-hidden">
      {/* ══════════════════════════════════════
          HERO  (full-viewport)
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* ── Abstract blob background ── */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-forge-black" />

          {/* Luminous Aurora blob — right side */}
          <div
            className="absolute -right-[10%] top-[5%] w-[70%] h-[90%] opacity-80"
            style={{
              background: `
                radial-gradient(ellipse 60% 80% at 65% 40%,
                  oklch(0.8 0.12 180) 0%,
                  oklch(0.8 0.15 150) 30%,
                  oklch(0.7 0.2 30) 65%,
                  transparent 100%)
              `,
              filter: "blur(48px)",
              borderRadius: "40% 60% 55% 45% / 50% 40% 60% 50%",
              transform: "rotate(-15deg)",
            }}
          />
          {/* secondary depth layer — Emerald glow */}
          <div
            className="absolute right-[8%] top-[20%] w-[50%] h-[60%] mix-blend-screen opacity-50"
            style={{
              background: `
                radial-gradient(ellipse 50% 70% at 55% 45%,
                  oklch(0.8 0.15 150) 0%,
                  oklch(0.7 0.2 30) 40%,
                  transparent 80%)
              `,
              filter: "blur(64px)",
              borderRadius: "55% 45% 40% 60% / 45% 55% 50% 50%",
              transform: "rotate(10deg)",
            }}
          />
          {/* Vignette — left-to-right so headline stays legible */}
          <div className="absolute inset-0 bg-linear-to-r from-forge-black via-forge-black/75 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-forge-black via-transparent to-forge-black/30" />
        </div>

        {/* ── Pill Navbar ── */}
        <nav className="relative z-10 flex items-center justify-between px-6 md:px-10 py-5">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-(--color-primary) to-(--color-secondary) flex items-center justify-center shadow-lg shadow-(--color-primary)/30">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span
              className="text-base font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ComponentForge
            </span>
          </div>

          {/* Center nav */}
          <div className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/6 border border-white/10 backdrop-blur-md">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/studio"
              className="hidden sm:block text-sm text-white/65 hover:text-white transition-colors"
            >
              Sign up
            </Link>
            <Link
              to="/studio"
              className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-white text-forge-black text-sm font-semibold hover:bg-white/90 transition-all shadow-lg"
            >
              Open Studio
            </Link>
          </div>
        </nav>

        {/* ── Hero Content ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center pb-24 pt-8"
        >
          {/* Trust badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/8 border border-white/15 text-white/75 text-xs font-medium backdrop-blur-sm">
              <Star className="w-3.5 h-3.5 fill-(--color-primary) text-(--color-primary)" />
              Trusted by designers &amp; developers globally
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="max-w-4xl leading-none tracking-tight mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
          >
            <span
              className="block font-black text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Design Beautiful.
            </span>
            <span className="block">
              <span
                className="font-black text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ship{" "}
              </span>
              <span
                className="italic font-bold bg-linear-to-r from-(--color-primary) via-(--color-secondary) to-(--color-accent) bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Faster.
              </span>
            </span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={fadeUp}
            className="max-w-md text-base md:text-lg text-white/50 leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-body)" }}
          >
            ComponentForge helps teams craft production-ready UI select an
            aesthetic, tune the parameters, export clean code.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 flex-wrap justify-center"
          >
            <Link
              to="/studio"
              className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-forge-black font-semibold text-sm hover:bg-white/90 transition-all shadow-xl"
            >
              Start Generating
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="#archetypes"
              className="text-sm text-white/45 hover:text-white/75 transition-colors underline underline-offset-4"
            >
              See the styles
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          ARCHETYPE CARDS
      ══════════════════════════════════════ */}
      <motion.section
        id="archetypes"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-24"
      >
        <motion.h2
          variants={fadeUp}
          className="font-black text-white text-center mb-4 text-3xl md:text-5xl tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Four Vibes.{" "}
          <span
            className="italic font-bold bg-linear-to-r from-(--color-primary) via-(--color-secondary) to-(--color-accent) bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Infinite
          </span>{" "}
          Components.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-center text-forge-muted mb-14 max-w-lg mx-auto text-base"
        >
          Each archetype defines a complete visual language — borders, shadows,
          backgrounds, and motion patterns.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ARCHETYPES.map((arch) => (
            <motion.div key={arch.id} variants={scaleIn}>
              <Link
                to="/studio"
                className={`group block p-6 rounded-2xl bg-linear-to-br ${arch.gradient} border ${arch.border} backdrop-blur-sm hover:scale-[1.03] transition-transform duration-300`}
              >
                <div
                  className={`w-full h-28 mb-5 ${arch.preview} rounded-lg flex items-center justify-center`}
                >
                  <div className="w-20 h-6 rounded bg-white/20" />
                </div>
                <h3
                  className="text-lg font-semibold text-white mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {arch.label}
                </h3>
                <p className="text-sm text-white/50">{arch.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ══════════════════════════════════════
          FEATURES GRID
      ══════════════════════════════════════ */}
      <motion.section
        id="features"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 max-w-5xl mx-auto px-6 py-24"
      >
        <motion.h2
          variants={fadeUp}
          className="font-black text-white text-center mb-14 text-3xl md:text-5xl tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Everything You Need
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <motion.div
              key={f.title}
              variants={scaleIn}
              className="p-6 rounded-2xl bg-white/3 border border-white/6 hover:border-white/10 hover:bg-white/5 transition-all duration-300"
            >
              <f.icon className="w-7 h-7 text-(--color-primary) mb-4" />
              <h3
                className="text-white font-semibold mb-1.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {f.title}
              </h3>
              <p className="text-sm text-forge-muted">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center">
        <p className="text-sm text-forge-muted">
          ComponentForge © 2026 · Built with React, Tailwind CSS &amp; Framer
          Motion
        </p>
      </footer>
    </div>
  );
}
