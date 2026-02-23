import type { ThemeState } from "../store/themeStore";
import { generateThemeClasses, getFont, getDensity } from "./themeUtils";

export type CodeFormat = "react" | "html";

export const TEMPLATES: Record<
  string,
  (theme: ThemeState, format: CodeFormat) => string
> = {
  /* ── Layout ── */
  HeroSection: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);
    const padding = getDensity(theme.density);

    if (format === "html") {
      return `
<!-- Hero Section -->
<div class="${classes.wrapper} ${font} ${padding} w-full text-center space-y-8 py-20">
  <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-(--color-primary)/20 bg-(--color-primary)/5 text-xs font-medium text-(--color-primary)">
    <!-- Icon: Sparkles -->
    <svg class="w-3 h-3" ...></svg> v2.0 is now live
  </div>
  
  <h1 class="${classes.heading} text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
    Build something <br />
    <span class="text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) via-(--color-secondary) to-(--color-accent)">extraordinary.</span>
  </h1>
  
  <p class="${classes.text} max-w-xl mx-auto text-base md:text-lg opacity-70 leading-relaxed font-medium">
    High-performance components for teams who refuse to settle. Skip the boilerplate and ship your best work today.
  </p>
  
  <div class="flex gap-4 justify-center flex-wrap pt-4">
    <button class="${classes.button} px-8 py-3 text-sm font-medium flex items-center gap-2 shadow-lg shadow-(--color-primary)/20">
      Start Building <!-- Icon: ArrowRight -->
    </button>
    <button class="${classes.buttonSecondary} px-8 py-3 text-sm font-medium">
      View Documentation
    </button>
  </div>
  
  <!-- Optional: Trusted By Strip -->
  <div class="pt-12 opacity-50 grayscale">
    <p class="text-xs uppercase tracking-widest mb-4">Trusted by industry leaders</p>
    <div class="flex justify-center gap-8">
      <!-- Logos -->
    </div>
  </div>
</div>`;
    }

    return `import { Icon } from "@iconify/react";

export default function HeroSection() {
  return (
    <div className="${classes.wrapper} ${font} ${padding} w-full text-center space-y-8 py-20">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-(--color-primary)/20 bg-(--color-primary)/5 text-xs font-medium text-(--color-primary)">
        <Icon icon="solar:stars-minimalistic-bold-duotone" className="w-3 h-3"  /> v2.0 is now live
      </div>
      
      <h1 className="${classes.heading} text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
        Build something <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) via-(--color-secondary) to-(--color-accent)">
          extraordinary.
        </span>
      </h1>
      
      <p className="${classes.text} max-w-xl mx-auto text-base md:text-lg opacity-70 leading-relaxed font-medium">
        High-performance components for teams who refuse to settle. Skip the boilerplate and ship your best work today.
      </p>
      
      <div className="flex gap-4 justify-center flex-wrap pt-4">
        <button className="${classes.button} px-8 py-3 cursor-pointer text-sm font-medium flex items-center gap-2 shadow-lg shadow-(--color-primary)/20">
          Start Building <Icon icon="solar:arrow-right-bold" className="w-4 h-4"  />
        </button>
        <button className="${classes.buttonSecondary} px-8 py-3 cursor-pointer text-sm font-medium">
          View Documentation
        </button>
      </div>

      <div className="pt-12 opacity-40 grayscale transition-all hover:opacity-60 hover:grayscale-0">
        <p className="${classes.text} text-[10px] uppercase tracking-widest mb-6 font-semibold">Trusted by industry leaders</p>
        <div className="flex justify-center gap-8 items-center">
           {/* Placeholder Logos */}
           <div className="h-6 w-20 bg-current rounded opacity-20" />
           <div className="h-6 w-20 bg-current rounded opacity-20" />
           <div className="h-6 w-20 bg-current rounded opacity-20" />
           <div className="h-6 w-20 bg-current rounded opacity-20" />
        </div>
      </div>
    </div>
  );
}`;
  },

  Navbar: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);

    if (format === "html") {
      return `<!-- Navbar -->
<nav class="${classes.wrapper} ${font} flex items-center justify-between px-5 py-3 w-full">
  <div class="flex items-center gap-2">
    <!-- Icon: Sparkles -->
    <span class="${classes.heading} text-sm font-bold tracking-tight">ComponentForge</span>
  </div>
  
  <div class="hidden md:flex items-center gap-6">
    <a href="#" class="${classes.text} text-sm hover:text-(--color-primary) transition-colors">Products</a>
    <a href="#" class="${classes.text} text-sm hover:text-(--color-primary) transition-colors">Solutions</a>
    <a href="#" class="${classes.text} text-sm hover:text-(--color-primary) transition-colors">Pricing</a>
    <a href="#" class="${classes.text} text-sm hover:text-(--color-primary) transition-colors">Docs</a>
  </div>

  <div class="hidden md:flex items-center gap-2">
    <button class="${classes.buttonSecondary} px-4 py-1.5 text-sm cursor-pointer">Log In</button>
    <button class="${classes.button} px-4 py-1.5 text-sm cursor-pointer">Sign Up</button>
  </div>

  <button class="${classes.text} md:hidden cursor-pointer">
    <!-- Icon: Menu -->
  </button>
</nav>`;
    }

    return `import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = ["Products", "Solutions", "Pricing", "Docs"];

  return (
    <nav className="${classes.wrapper} ${font} flex items-center justify-between px-5 py-3 w-full relative">
      <div className="flex items-center gap-2">
        <Icon icon="solar:stars-minimalistic-bold-duotone" className="w-5 h-5 text-(--color-primary)"  />
        <span className="${classes.heading} text-sm font-bold tracking-tight">ComponentForge</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="${classes.text} text-sm hover:text-(--color-primary) transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-2">
        <button className="${classes.buttonSecondary} px-4 py-1.5 text-sm cursor-pointer">
          Log In
        </button>
        <button className="${classes.button} px-4 py-1.5 text-sm cursor-pointer">
          Sign Up
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="${classes.text} md:hidden cursor-pointer"
      >
        {mobileOpen ? <Icon icon="solar:close-circle-bold" className="w-5 h-5"  /> : <Icon icon="solar:hamburger-menu-bold" className="w-5 h-5"  />}
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="${classes.wrapper} absolute top-full left-0 right-0 md:hidden p-4 space-y-3 border-t border-forge-border z-50">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="${classes.text} block text-sm py-1"
            >
              {link}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <button className="${classes.button} flex-1 py-2 text-sm cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}`;
  },

  Footer: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);

    if (format === "html") {
      return `<!-- Footer -->
<footer class="${classes.wrapper} ${font} w-full p-6">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
    <div>
      <div class="flex items-center gap-2 mb-3">
        <!-- Icon: Sparkles -->
        <span class="${classes.heading} text-sm font-bold tracking-tight">Forge</span>
      </div>
      <p class="${classes.text} text-xs opacity-60 mb-4">
        Premium components for the modern web.
      </p>
      <div class="flex gap-3">
        <!-- Social Icons -->
      </div>
    </div>
    <!-- Link Columns... -->
  </div>
  <div class="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
    <p class="${classes.text} text-xs opacity-50">© 2026 Acme Inc.</p>
    <div class="flex gap-2">
      <input type="email" placeholder="Email" class="${classes.input} px-3 py-1.5 text-xs w-48" />
      <button class="${classes.button} px-4 py-1.5 text-xs cursor-pointer">Subscribe</button>
    </div>
  </div>
</footer>`;
    }

    return `import { Icon } from "@iconify/react";

export default function Footer() {
  const columns = [
    { title: "Product", links: ["Features", "Pricing", "Changelog", "Docs"] },
    { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
    { title: "Legal", links: ["Privacy", "Terms", "License"] },
  ];

  return (
    <footer className="${classes.wrapper} ${font} w-full p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Icon icon="solar:stars-minimalistic-bold-duotone" className="w-4 h-4 text-(--color-primary)"  />
            <span className="${classes.heading} text-sm font-bold tracking-tight">Forge</span>
          </div>
          <p className="${classes.text} text-xs opacity-60 mb-4">
            Premium components for the modern web.
          </p>
          <div className="flex gap-3">
            <Github className="w-4 h-4 text-forge-muted hover:text-(--color-primary) cursor-pointer transition-colors" />
            <Twitter className="w-4 h-4 text-forge-muted hover:text-(--color-primary) cursor-pointer transition-colors" />
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="${classes.heading} text-xs mb-3">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="${classes.text} text-xs opacity-60 hover:opacity-100 transition-opacity">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-forge-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="${classes.text} text-xs opacity-50">
          © 2026 ComponentForge. All rights reserved.
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="${classes.input} px-3 py-1.5 text-xs w-48"
          />
          <button className="${classes.button} px-4 py-1.5 text-xs cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}`;
  },

  SidebarNav: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);

    if (format === "html") return "<!-- Sidebar HTML -->";

    return `import { useState } from "react";
import { Icon } from "@iconify/react";

export default function SidebarNav() {
  const [active, setActive] = useState("Dashboard");
  const navItems = [
    { icon: Home, label: "Dashboard" },
    { icon: BarChart3, label: "Analytics" },
    { icon: Users, label: "Team" },
    { icon: FileText, label: "Documents" },
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Help" },
  ];

  return (
    <div className="${classes.wrapper} ${font} w-56 p-3 space-y-1 h-full">
      {navItems.map(({ icon: Icon, label }) => (
        <button
          key={label}
          onClick={() => setActive(label)}
          className={\`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all cursor-pointer \${
            active === label
              ? "bg-(--color-primary)/15 text-(--color-primary)"
              : "${classes.text} opacity-60 hover:opacity-100 hover:bg-white/5"
          }\`}
        >
          <Icon className="w-4 h-4 shrink-0" />
          {label}
        </button>
      ))}
    </div>
  );
}`;
  },

  BentoGrid: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);
    const padding = getDensity(theme.density);

    if (format === "html") return "<!-- Bento Grid HTML -->";

    return `import { Icon } from "@iconify/react";

export default function BentoGrid() {
  const features = [
    { icon: Zap, title: "Lightning Fast", desc: "Sub-millisecond response times", span: "col-span-2" },
    { icon: Shield, title: "Secure", desc: "Enterprise-grade security", span: "" },
    { icon: Globe, title: "Global CDN", desc: "Edge-deployed worldwide", span: "" },
    { icon: Cpu, title: "AI Powered", desc: "Built-in machine learning", span: "col-span-2" },
    { icon: Palette, title: "Customizable", desc: "Fully themeable components", span: "" },
    { icon: BarChart3, title: "Analytics", desc: "Real-time metrics dashboard", span: "" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full ${font}">
      {features.map(({ icon: Icon, title, desc, span }) => (
        <div
          key={title}
          className="${classes.card} ${padding} \${span} hover:border-(--color-primary)/30 transition-colors"
        >
          <Icon className="w-6 h-6 text-(--color-primary) mb-3" />
          <h3 className="${classes.heading} text-sm mb-1">{title}</h3>
          <p className="${classes.text} text-xs opacity-60">{desc}</p>
        </div>
      ))}
    </div>
  );
}`;
  },

  SectionDivider: (theme, format) => {
    const classes = generateThemeClasses(theme);
    if (format === "html") return "<!-- Dividers HTML -->";

    return `export default function SectionDivider() {
  return (
    <div className="w-full space-y-8">
      {/* Simple line */}
      <div className="border-t border-forge-border" />

      {/* With text */}
      <div className="flex items-center gap-4">
        <div className="flex-1 border-t border-forge-border" />
        <span className="${classes.text} text-xs opacity-50 uppercase tracking-wider">or</span>
        <div className="flex-1 border-t border-forge-border" />
      </div>

      {/* Gradient fade */}
      <div className="h-px bg-linear-to-r from-transparent via-(--color-primary)/30 to-transparent" />

      {/* Dotted */}
      <div className="border-t border-dashed border-forge-border" />

      {/* With icon */}
      <div className="flex items-center gap-4">
        <div className="flex-1 border-t border-forge-border" />
        <div className="w-2 h-2 rounded-full bg-(--color-primary)" />
        <div className="flex-1 border-t border-forge-border" />
      </div>
    </div>
  );
}`;
  },

  /* ── Elements ── */
  PrimaryButton: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);
    const padding = getDensity(theme.density);

    if (format === "html") {
      return `<button class="${classes.button} ${padding} ${font}">
  Click me
</button>`;
    }

    return `export function PrimaryButton({ children, ...props }) {
  return (
    <button
      className="${classes.button} ${padding} ${font}"
      {...props}
    >
      {children}
    </button>
  );
}`;
  },

  SecondaryButton: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);
    const padding = getDensity(theme.density);

    if (format === "html") {
      return `<button class="${classes.buttonSecondary} ${padding} ${font}">
  Click me
</button>`;
    }

    return `export function SecondaryButton({ children, ...props }) {
  return (
    <button
      className="${classes.buttonSecondary} ${padding} ${font}"
      {...props}
    >
      {children}
    </button>
  );
}`;
  },

  Badge: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);

    if (format === "html") {
      return `<span class="${classes.badge} px-2.5 py-1 ${font}">
  Badge
</span>`;
    }

    return `export function Badge({ children, ...props }) {
  return (
    <span
      className="${classes.badge} px-2.5 py-1 ${font}"
      {...props}
    >
      {children}
    </span>
  );
}`;
  },

  InputField: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);
    const padding = getDensity(theme.density);

    if (format === "html") {
      return `<div class="space-y-1.5">
  <label class="${classes.text} text-sm font-medium">Label</label>
  <input
    type="text"
    class="${classes.input} ${padding} ${font} w-full"
    placeholder="Enter text..."
  />
</div>`;
    }

    return `export function InputField({ label, ...props }) {
  return (
    <div className="space-y-1.5">
      {label && <label className="${classes.text} text-sm font-medium">{label}</label>}
      <input
        className="${classes.input} ${padding} ${font} w-full"
        {...props}
      />
    </div>
  );
}`;
  },

  TextArea: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);
    const padding = getDensity(theme.density);

    if (format === "html") return "<!-- TextArea HTML -->";

    return `export function TextArea({ label, ...props }) {
  return (
    <div className="space-y-1.5 w-full">
      {label && <label className="${classes.text} text-sm font-medium">{label}</label>}
      <textarea
        className="${classes.input} ${padding} ${font} w-full min-h-[100px] resize-y"
        {...props}
      />
      <div className="flex justify-between">
        <p className="${classes.text} text-xs opacity-50">Markdown supported</p>
        <p className="${classes.text} text-xs opacity-50">0/500</p>
      </div>
    </div>
  );
}`;
  },

  Checkbox: (theme, format) => {
    const font = getFont(theme.fontStyle);

    if (format === "html") return "<!-- Checkbox HTML -->";

    return `import { useState } from "react";
import { Icon } from "@iconify/react";

export function Checkbox({ label, ...props }) {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex items-center gap-3 cursor-pointer group ${font}">
      <button
        onClick={() => setChecked(!checked)}
        className={\`w-5 h-5 flex items-center justify-center shrink-0 transition-all rounded-md \${
          checked
            ? "bg-(--color-primary) border-(--color-primary)"
            : "bg-transparent border border-forge-border group-hover:border-(--color-primary)/50"
        }\`}
      >
        {checked && <Icon icon="solar:check-read-bold" className="w-3 h-3 text-white"  />}
      </button>
      <span className="text-sm text-forge-text">{label}</span>
    </label>
  );
}`;
  },

  RadioGroup: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);

    if (format === "html") return "<!-- RadioGroup HTML -->";

    return `import { useState } from "react";

export function RadioGroup({ options }) {
  const [selected, setSelected] = useState(options[0].value);

  return (
    <div className="space-y-2 max-w-sm ${font}">
      <p className="text-sm font-medium text-forge-text mb-3">Choose a plan</p>
      {options.map((opt) => (
        <label
          key={opt.value}
          onClick={() => setSelected(opt.value)}
          className={\`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all \${
            selected === opt.value
              ? "border-(--color-primary) bg-(--color-primary)/5"
              : "border-forge-border border-forge-border"
          }\`}
        >
          <div className={\`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 \${
            selected === opt.value
              ? "border-(--color-primary)"
              : "border-forge-border"
          }\`}>
            {selected === opt.value && <div className="w-2 h-2 rounded-full bg-(--color-primary)" />}
          </div>
          <div>
            <p className="${classes.text} text-sm font-medium">{opt.label}</p>
            <p className="${classes.text} text-xs opacity-60">{opt.desc}</p>
          </div>
        </label>
      ))}
    </div>
  );
}`;
  },

  ToggleSwitch: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);

    if (format === "html") return "<!-- Toggle HTML -->";

    return `import { useState } from "react";

export function ToggleSwitch({ label, desc }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center justify-between ${font}">
      <div>
        <p className="${classes.text} text-sm font-medium">{label}</p>
        <p className="${classes.text} text-xs opacity-60">{desc}</p>
      </div>
      <button
        onClick={() => setEnabled(!enabled)}
        className={\`w-11 h-6 rounded-full transition-colors relative \${
          enabled
            ? "bg-(--color-primary)"
            : "bg-forge-border"
        }\`}
      >
        <span
          className={\`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform \${
            enabled ? "translate-x-5" : "translate-x-0"
          }\`}
        />
      </button>
    </div>
  );
}`;
  },
  LinkElement: (theme, format) => {
    const font = getFont(theme.fontStyle);

    if (format === "html") {
      return `<div class="flex flex-col gap-4 ${font}">
  <a href="#" class="text-(--color-primary) hover:underline underline-offset-4 transition-all inline-flex items-center gap-1">
    Default link style
  </a>
</div>`;
    }

    return `import { Icon } from "@iconify/react";

export function LinkElement() {
  return (
    <div className="flex flex-col gap-4 ${font}">
      <a
        href="#"
        className="text-(--color-primary) hover:underline underline-offset-4 transition-all inline-flex items-center gap-1"
      >
        Default link style
      </a>
      <a
        href="#"
        className="text-(--color-primary) hover:underline underline-offset-4 transition-all inline-flex items-center gap-1.5"
      >
        Link with icon <ExternalLink className="w-3.5 h-3.5" />
      </a>
      <a
        href="#"
        className="text-forge-muted hover:text-(--color-primary) transition-colors underline-offset-4"
      >
        Subtle link
      </a>
    </div>
  );
}`;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Avatar: (_theme, format) => {
    if (format === "html") return "<!-- Avatar HTML -->";

    return `import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function Avatar() {
  const avatars = [
    { initials: "JD", bg: "bg-(--color-primary)", online: true },
    { initials: "KL", bg: "bg-[var(--color-secondary)]", online: true },
  ];

  return (
    <div className="flex flex-wrap gap-4 items-end">
      <div className="flex -space-x-3">
        {avatars.map((a, i) => (
          <div key={i} className="relative">
            <div className={twMerge(clsx("w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white border-2 border-forge-dark", a.bg))}>
              {a.initials}
            </div>
            {a.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-forge-dark" />}
          </div>
        ))}
      </div>
    </div>
  );
}`;
  },

  IconButton: (theme, format) => {
    const classes = generateThemeClasses(theme);

    if (format === "html") return "<!-- IconButton HTML -->";

    return `import { Icon } from "@iconify/react";

export function IconButton() {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <button className="${classes.button} p-2.5 cursor-pointer">
        <Heart className="w-4 h-4" />
      </button>
      <button className="${classes.button} p-2.5 cursor-pointer">
        <Share2 className="w-4 h-4" />
      </button>
      <button className="${classes.button} p-2.5 cursor-pointer">
        <Icon icon="solar:settings-bold" className="w-4 h-4"  />
      </button>
    </div>
  );
}`;
  },

  SelectDropdown: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);
    const padding = getDensity(theme.density, "compact");

    if (format === "html") return "<!-- SelectDropdown HTML -->";

    return `import { useState } from "react";
import { Icon } from "@iconify/react";

export function SelectDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("React");
  const options = ["React", "Vue", "Angular", "Svelte", "Solid"];

  return (
    <div className="w-full max-w-xs space-y-1.5 ${font}">
      <label className="${classes.text} text-sm font-medium">Framework</label>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="${classes.input} ${padding} w-full flex items-center justify-between cursor-pointer"
        >
          <span>{selected}</span>
          <Icon icon="solar:alt-arrow-down-bold" className={\`w-4 h-4 transition-transform \${open ? "rotate-180" : ""}\`}  />
        </button>

        {open && (
          <div className="${classes.card} absolute top-full mt-1 w-full z-10 py-1 max-h-48 overflow-auto">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => { setSelected(opt); setOpen(false); }}
                className={\`w-full text-left px-3 py-2 text-sm transition-colors cursor-pointer \${
                  selected === opt
                    ? "text-(--color-primary) bg-(--color-primary)/5"
                    : "${classes.text} hover:bg-white/5"
                }\`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}`;
  },

  Slider: (theme, format) => {
    const font = getFont(theme.fontStyle);

    if (format === "html") return "<!-- Slider HTML -->";

    return `import { useState } from "react";

export function Slider() {
  const [value, setValue] = useState(60);

  return (
    <div className="w-full max-w-sm space-y-4 ${font}">
      <div className="space-y-2">
        <div className="flex justify-between">
          <label className="text-sm font-medium text-forge-text">Volume</label>
          <span className="text-sm text-(--color-primary) font-mono">{value}%</span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-(--color-primary) [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg"
          style={{
            background: \`linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) \${value}%, rgba(255,255,255,0.1) \${value}%, rgba(255,255,255,0.1) 100%)\`,
          }}
        />
      </div>
    </div>
  );
}`;
  },

  SearchBar: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);
    const padding = getDensity(theme.density, "compact");

    if (format === "html") return "<!-- SearchBar HTML -->";

    return `import { Icon } from "@iconify/react";

export function SearchBar() {
  return (
    <div className="w-full max-w-md ${font}">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-forge-muted" />
        <input
          type="search"
          placeholder="Search..."
          className="${classes.input} ${padding} w-full pl-10"
        />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-forge-muted bg-white/5 px-1.5 py-0.5 rounded border border-forge-border">
          ⌘K
        </kbd>
      </div>
    </div>
  );
}`;
  },

  /* ── Feedback ── */
  Alert: (theme, format) => {
    const font = getFont(theme.fontStyle);
    const padding = getDensity(theme.density);

    if (format === "html") {
      return `<!-- Alerts -->
<div class="w-full max-w-md space-y-3 ${font}">
  <!-- Success -->
  <div class="border rounded-lg ${padding} text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
    <div class="flex items-start gap-3">
      <!-- Icon: CheckCircle -->
      <svg class="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <div>
        <h4 class="text-sm font-semibold">Success</h4>
        <p class="text-sm opacity-90 mt-0.5">Your changes have been saved.</p>
      </div>
    </div>
  </div>

  <!-- Warning -->
  <div class="border rounded-lg ${padding} text-amber-400 bg-amber-500/10 border-amber-500/20">
    <div class="flex items-start gap-3">
      <!-- Icon: AlertTriangle -->
      <svg class="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
      <div>
        <h4 class="text-sm font-semibold">Warning</h4>
        <p class="text-sm opacity-90 mt-0.5">Your subscription is about to renew.</p>
      </div>
    </div>
  </div>
</div>`;
    }

    return `import { Icon } from "@iconify/react";

export function Alert() {
  const alerts = [
    { variant: "success", icon: CheckCircle, title: "Success", message: "Your changes have been saved.", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
    { variant: "warning", icon: AlertTriangle, title: "Warning", message: "Your subscription is about to renew.", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
    { variant: "error", icon: XCircle, title: "Error", message: "Something went wrong.", color: "text-red-400 bg-red-500/10 border-red-500/20" },
    { variant: "info", icon: Info, title: "Info", message: "A new version is available.", color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
  ];

  return (
    <div className="w-full max-w-md space-y-3 ${font}">
      {alerts.map(({ variant, icon: Icon, title, message, color }) => (
        <div
          key={variant}
          className={\`border rounded-lg ${padding} \${color}\`}
        >
          <div className="flex items-start gap-3">
            <Icon className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold">{title}</h4>
              <p className="text-sm opacity-90 mt-0.5">{message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}`;
  },

  Modal: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);
    const padding = getDensity(theme.density);

    if (format === "html") {
      return `<!-- Modal Overlay -->
<div class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"></div>

<!-- Modal Content -->
<div class="fixed inset-0 flex items-center justify-center p-4 z-50 ${font}">
  <div class="${classes.card} w-full max-w-sm ${padding} space-y-4 shadow-xl">
    <div class="flex items-center justify-between">
      <h3 class="${classes.heading} text-lg">Confirm Action</h3>
      <button class="${classes.text} opacity-50 hover:opacity-100 transition-opacity">
  
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
    <p class="${classes.text} text-sm opacity-70">
      This action is permanent and cannot be reversed. Please confirm your selection.
    </p>
    <div class="flex gap-2 justify-end pt-2">
      <button class="${classes.buttonSecondary} px-4 py-2 text-sm">Cancel</button>
      <button class="${classes.button} px-4 py-2 text-sm">Confirm</button>
    </div>
  </div>
</div>`;
    }

    return `import { useState } from "react";
import { Icon } from "@iconify/react";

export function Modal() {
  const [open, setOpen] = useState(true);

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} className="${classes.button} px-4 py-2 ${font}">
        Open Modal
      </button>
    );
  }

  return (
    <div className="relative z-50 ${font}">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="${classes.card} w-full max-w-sm ${padding} space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="${classes.heading} text-lg">Confirm Action</h3>
            <button onClick={() => setOpen(false)} className="${classes.text} opacity-50 hover:opacity-100 transition-opacity">
              <Icon icon="solar:close-circle-bold" className="w-4 h-4"  />
            </button>
          </div>
          <p className="${classes.text} text-sm opacity-70">
            This action is permanent and cannot be reversed. Please confirm your selection.
          </p>
          <div className="flex gap-2 justify-end pt-2">
            <button
              onClick={() => setOpen(false)}
              className="${classes.buttonSecondary} px-4 py-2 text-sm"
            >
              Cancel
            </button>
            <button
              onClick={() => setOpen(false)}
              className="${classes.button} px-4 py-2 text-sm"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`;
  },

  Tooltip: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);

    if (format === "html") {
      return `<!-- Tooltip -->
<div class="relative inline-block ${font} group">
  <button class="${classes.buttonSecondary} px-4 py-2 text-sm">
    Hover me
  </button>
  
  <!-- Content (Visible on group-hover) -->
  <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs text-white bg-zinc-900 rounded shadow-lg whitespace-nowrap z-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
    Tooltip content
  </div>
</div>`;
    }

    return `import { useState } from "react";

export function Tooltip() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative inline-block ${font}">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="${classes.buttonSecondary} px-4 py-2 text-sm"
      >
        Hover me
      </button>
      
      {hovered && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs text-white bg-zinc-900 rounded shadow-lg whitespace-nowrap z-50">
          Tooltip content
        </div>
      )}
    </div>
  );
}`;
  },

  Toast: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);

    if (format === "html") {
      return `<!-- Toast -->
<div class="fixed bottom-4 right-4 w-full max-w-sm ${font} z-50">
  <div class="${classes.card} flex items-center gap-3 px-4 py-3 shadow-lg border-l-4 border-emerald-500">
    <!-- Icon: CheckCircle -->
    <svg class="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <div class="flex-1">
      <h4 class="${classes.text} text-sm font-medium">Success</h4>
      <p class="${classes.text} text-xs opacity-70">Changes saved successfully</p>
    </div>
    <button class="${classes.text} opacity-50 hover:opacity-100 transition-opacity">

      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
  </div>
</div>`;
    }

    return `import { Icon } from "@iconify/react";

export function Toast() {
  return (
    <div className="fixed bottom-4 right-4 w-full max-w-sm ${font}">
      <div className="${classes.card} flex items-center gap-3 px-4 py-3 shadow-lg border-l-4 border-emerald-500">
        <Icon icon="solar:check-read-bold"Circle className="w-5 h-5 text-emerald-500 shrink-0"  />
        <div className="flex-1">
          <h4 className="${classes.text} text-sm font-medium">Success</h4>
          <p className="${classes.text} text-xs opacity-70">Changes saved successfully</p>
        </div>
        <button className="${classes.text} opacity-50 hover:opacity-100 transition-opacity">
          <Icon icon="solar:close-circle-bold" className="w-4 h-4"  />
        </button>
      </div>
    </div>
  );
}`;
  },

  ProgressBar: (theme, format) => {
    const font = getFont(theme.fontStyle);

    if (format === "html") {
      return `<!-- Progress Bar -->
<div class="w-full max-w-md space-y-1 ${font}">
  <div class="flex justify-between text-sm">
    <span class="text-forge-text">Unpacking</span>
    <span class="text-(--color-primary) font-mono">72%</span>
  </div>
  <div class="w-full h-2 bg-white/10 rounded-full overflow-hidden">
    <div class="h-full bg-(--color-primary) rounded-full transition-all duration-500" style="width: 72%"></div>
  </div>
</div>`;
    }

    return `export function ProgressBar() {
  return (
    <div className="w-full max-w-md space-y-1 ${font}">
      <div className="flex justify-between text-sm">
        <span className="text-forge-text">Unpacking</span>
        <span className="text-(--color-primary) font-mono">72%</span>
      </div>
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-(--color-primary) rounded-full transition-all duration-500"
          style={{ width: "72%" }}
        />
      </div>
    </div>
  );
}`;
  },

  Skeleton: (theme, format) => {
    const classes = generateThemeClasses(theme);

    if (format === "html") {
      return `<!-- Skeleton Loader -->
<div class="${classes.card} w-full max-w-sm p-4 space-y-4">
  <div class="flex items-center gap-3">
    <div class="w-10 h-10 rounded-full animate-pulse bg-white/6"></div>
    <div class="space-y-2 flex-1">
      <div class="h-3 w-3/4 rounded animate-pulse bg-white/6"></div>
      <div class="h-3 w-1/2 rounded animate-pulse bg-white/6"></div>
    </div>
  </div>
  <div class="w-full h-32 rounded-lg animate-pulse bg-white/6"></div>
  <div class="space-y-2">
    <div class="h-3 w-full rounded animate-pulse bg-white/6"></div>
    <div class="h-3 w-5/6 rounded animate-pulse bg-white/6"></div>
  </div>
</div>`;
    }

    return `export function Skeleton() {
  const shimmer = "animate-pulse bg-white/6";
  
  return (
    <div className="${classes.card} w-full max-w-sm p-4 space-y-4">
      <div className="flex items-center gap-3">
        <div className={\`w-10 h-10 rounded-full \${shimmer}\`} />
        <div className="space-y-2 flex-1">
          <div className={\`h-3 w-3/4 rounded \${shimmer}\`} />
          <div className={\`h-3 w-1/2 rounded \${shimmer}\`} />
        </div>
      </div>
      <div className={\`w-full h-32 rounded-lg \${shimmer}\`} />
      <div className="space-y-2">
        <div className={\`h-3 w-full rounded \${shimmer}\`} />
        <div className={\`h-3 w-5/6 rounded \${shimmer}\`} />
      </div>
    </div>
  );
}`;
  },

  /* ── Data ── */
  PricingCard: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);
    const padding = getDensity(theme.density);

    if (format === "html") {
      return `<!-- Pricing Cards -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full ${font}">
  <!-- Starter -->
  <div class="${classes.card} ${padding} space-y-4 relative">
    <div>
      <h3 class="${classes.heading} text-base">Hobby</h3>
      <p class="${classes.text} text-xs opacity-60">Per month</p>
    </div>
    <div class="flex items-baseline gap-1">
      <span class="${classes.heading} text-3xl">$9</span>
      <span class="${classes.text} text-sm opacity-50">/mo</span>
    </div>
    <ul class="space-y-2">
      <li class="${classes.text} flex items-center gap-2 text-sm">
        <!-- Icon: Check -->
        <svg class="w-4 h-4 text-(--color-primary) shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        5 Projects
      </li>
      <li class="${classes.text} flex items-center gap-2 text-sm">
        <svg class="w-4 h-4 text-(--color-primary) shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        Basic Analytics
      </li>
    </ul>
    <button class="w-full py-2.5 text-sm ${classes.buttonSecondary}">
      Get Started
    </button>
  </div>

  <!-- Pro (Highlighted) -->
  <div class="${classes.card} ${padding} space-y-4 relative border-(--color-primary) ring-1 ring-(--color-primary)/20">
    <span class="${classes.badge} absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 flex items-center gap-1">

      <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      Popular
    </span>
    <div>
      <h3 class="${classes.heading} text-base">Pro</h3>
      <p class="${classes.text} text-xs opacity-60">Per month</p>
    </div>
    <div class="flex items-baseline gap-1">
      <span class="${classes.heading} text-3xl">$29</span>
      <span class="${classes.text} text-sm opacity-50">/mo</span>
    </div>
    <ul class="space-y-2">
      <li class="${classes.text} flex items-center gap-2 text-sm">
        <svg class="w-4 h-4 text-(--color-primary) shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        Unlimited Projects
      </li>
      <li class="${classes.text} flex items-center gap-2 text-sm">
        <svg class="w-4 h-4 text-(--color-primary) shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        Advanced Analytics
      </li>
      <li class="${classes.text} flex items-center gap-2 text-sm">
        <svg class="w-4 h-4 text-(--color-primary) shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        Priority Support
      </li>
    </ul>
    <button class="w-full py-2.5 text-sm ${classes.button}">
      Get Started
    </button>
  </div>

  <!-- Enterprise -->
  <div class="${classes.card} ${padding} space-y-4 relative">
    <div>
      <h3 class="${classes.heading} text-base">Enterprise</h3>
      <p class="${classes.text} text-xs opacity-60">Per month</p>
    </div>
    <div class="flex items-baseline gap-1">
      <span class="${classes.heading} text-3xl">$99</span>
      <span class="${classes.text} text-sm opacity-50">/mo</span>
    </div>
    <ul class="space-y-2">
      <li class="${classes.text} flex items-center gap-2 text-sm">
        <svg class="w-4 h-4 text-(--color-primary) shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        Everything in Pro
      </li>
      <li class="${classes.text} flex items-center gap-2 text-sm">
        <svg class="w-4 h-4 text-(--color-primary) shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        SSO / SAML
      </li>
    </ul>
    <button class="w-full py-2.5 text-sm ${classes.buttonSecondary}">
      Get Started
    </button>
  </div>
</div>`;
    }

    return `import { Icon } from "@iconify/react";

export function PricingCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full ${font}">
      {[
        { name: "Hobby", price: "$9", features: ["5 Projects", "Basic Analytics"], highlighted: false },
        { name: "Pro", price: "$29", features: ["Unlimited Projects", "Advanced Analytics", "Priority Support"], highlighted: true },
        { name: "Enterprise", price: "$99", features: ["Everything in Pro", "SSO / SAML"], highlighted: false },
      ].map((plan) => (
        <div
          key={plan.name}
          className={\`\${"${classes.card}"} \${"${padding}"} space-y-4 relative \${plan.highlighted ? "border-(--color-primary) ring-1 ring-(--color-primary)/20" : ""}\`}
        >
          {plan.highlighted && (
            <span className="${classes.badge} absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 flex items-center gap-1">
              <Icon icon="solar:bolt-bold" className="w-3 h-3"  /> Popular
            </span>
          )}
          <div>
            <h3 className="${classes.heading} text-base">{plan.name}</h3>
            <p className="${classes.text} text-xs opacity-60">Per month</p>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="${classes.heading} text-3xl">{plan.price}</span>
            <span className="${classes.text} text-sm opacity-50">/mo</span>
          </div>
          <ul className="space-y-2">
            {plan.features.map((f) => (
              <li key={f} className="${classes.text} flex items-center gap-2 text-sm">
                <Icon icon="solar:check-read-bold" className="w-4 h-4 text-(--color-primary) shrink-0"  />
                {f}
              </li>
            ))}
          </ul>
          <button className={\`w-full py-2.5 text-sm \${plan.highlighted ? "${classes.button}" : "${classes.buttonSecondary}"}\`}>
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
}`;
  },

  TestimonialCard: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);
    const padding = getDensity(theme.density);

    if (format === "html") {
      return `<!-- Testimonials -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full ${font}">
  <!-- Card 1 -->
  <div class="${classes.card} ${padding} space-y-4">
    <div class="flex gap-1">
      <!-- 5 Stars -->
      <svg class="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
      <svg class="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
      <svg class="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
      <svg class="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
      <svg class="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
    </div>
    <p class="${classes.text} text-sm italic opacity-80">"ComponentForge saved us 40+ hours of design work."</p>
    <div class="flex items-center gap-3">
      <div class="w-9 h-9 rounded-full bg-(--color-primary) flex items-center justify-center text-white text-xs font-semibold">
        S
      </div>
      <div>
        <p class="${classes.heading} text-sm">Sarah Chen</p>
        <p class="${classes.text} text-xs opacity-50">Lead Designer</p>
      </div>
    </div>
  </div>
</div>`;
    }

    return `import { Icon } from "@iconify/react";

export function TestimonialCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full ${font}">
      {[
        { quote: "ComponentForge saved us 40+ hours of design work.", author: "Sarah Chen", role: "Lead Designer" },
        { quote: "Finally, a tool that actually understands modern design aesthetics.", author: "Marcus Rivera", role: "Frontend Engineer" },
      ].map((t) => (
        <div key={t.author} className="${classes.card} ${padding} space-y-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Icon icon="solar:star-bold" key={i} className="w-4 h-4 fill-amber-400 text-amber-400"  />
            ))}
          </div>
          <p className="${classes.text} text-sm italic opacity-80">"{t.quote}"</p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-(--color-primary) flex items-center justify-center text-white text-xs font-semibold">
              {t.author.charAt(0)}
            </div>
            <div>
              <p className="${classes.heading} text-sm">{t.author}</p>
              <p className="${classes.text} text-xs opacity-50">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}`;
  },

  StatsRow: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);
    const padding = getDensity(theme.density);

    if (format === "html") {
      return `<!-- Stats Row -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 w-full ${font}">
  <div class="${classes.card} ${padding} space-y-2">
    <div class="flex items-center justify-between">
      <!-- Icon: Users -->
      <svg class="w-5 h-5 text-(--color-primary)" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      <span class="text-xs font-medium text-emerald-400">
        +12.3%
      </span>
    </div>
    <p class="${classes.heading} text-2xl font-bold">24.5K</p>
    <p class="${classes.text} text-xs opacity-50">Total Users</p>
  </div>
  
  <div class="${classes.card} ${padding} space-y-2">
    <div class="flex items-center justify-between">
      <!-- Icon: TrendingUp -->
      <svg class="w-5 h-5 text-(--color-primary)" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
      <span class="text-xs font-medium text-emerald-400">
        +8.1%
      </span>
    </div>
    <p class="${classes.heading} text-2xl font-bold">$84.2K</p>
    <p class="${classes.text} text-xs opacity-50">Revenue</p>
  </div>
  
  <div class="${classes.card} ${padding} space-y-2">
    <div class="flex items-center justify-between">
      <!-- Icon: Eye -->
      <svg class="w-5 h-5 text-(--color-primary)" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
      <span class="text-xs font-medium text-red-400">
        -2.4%
      </span>
    </div>
    <p class="${classes.heading} text-2xl font-bold">142K</p>
    <p class="${classes.text} text-xs opacity-50">Page Views</p>
  </div>
  
  <div class="${classes.card} ${padding} space-y-2">
    <div class="flex items-center justify-between">
      <!-- Icon: DollarSign -->
      <svg class="w-5 h-5 text-(--color-primary)" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span class="text-xs font-medium text-emerald-400">
        +5.7%
      </span>
    </div>
    <p class="${classes.heading} text-2xl font-bold">$38.50</p>
    <p class="${classes.text} text-xs opacity-50">Avg. Order</p>
  </div>
</div>`;
    }

    return `import { Icon } from "@iconify/react";

export function StatsRow() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full ${font}">
      {[
        { icon: Users, label: "Total Users", value: "24.5K", change: "+12.3%", up: true },
        { icon: TrendingUp, label: "Revenue", value: "$84.2K", change: "+8.1%", up: true },
        { icon: Eye, label: "Page Views", value: "142K", change: "-2.4%", up: false },
        { icon: DollarSign, label: "Avg. Order", value: "$38.50", change: "+5.7%", up: true },
      ].map(({ icon: Icon, label, value, change, up }) => (
        <div key={label} className="${classes.card} ${padding} space-y-2">
          <div className="flex items-center justify-between">
            <Icon className="w-5 h-5 text-(--color-primary)" />
            <span className={\`text-xs font-medium \${up ? "text-emerald-400" : "text-red-400"}\`}>
              {change}
            </span>
          </div>
          <p className="${classes.heading} text-2xl font-bold">{value}</p>
          <p className="${classes.text} text-xs opacity-50">{label}</p>
        </div>
      ))}
    </div>
  );
}`;
  },

  Table: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);

    if (format === "html") {
      return `<!-- Data Table -->
<div class="${classes.card} w-full overflow-hidden ${font}">
  <table class="w-full text-sm">
    <thead>
      <tr class="border-b border-forge-border">
        <th class="${classes.heading} text-left px-4 py-3 text-xs uppercase tracking-wider opacity-70 font-medium">Name</th>
        <th class="${classes.heading} text-left px-4 py-3 text-xs uppercase tracking-wider opacity-70 font-medium">Email</th>
        <th class="${classes.heading} text-left px-4 py-3 text-xs uppercase tracking-wider opacity-70 font-medium">Role</th>
        <th class="${classes.heading} text-left px-4 py-3 text-xs uppercase tracking-wider opacity-70 font-medium">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-forge-border hover:bg-white/2 transition-colors">
        <td class="${classes.text} px-4 py-3 font-medium">Alice Johnson</td>
        <td class="${classes.text} px-4 py-3 opacity-60">alice@example.com</td>
        <td class="${classes.text} px-4 py-3">Admin</td>
        <td class="px-4 py-3">
          <span class="inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-400">
            Active
          </span>
        </td>
      </tr>
      <tr class="border-b border-forge-border hover:bg-white/2 transition-colors">
        <td class="${classes.text} px-4 py-3 font-medium">Bob Smith</td>
        <td class="${classes.text} px-4 py-3 opacity-60">bob@example.com</td>
        <td class="${classes.text} px-4 py-3">Editor</td>
        <td class="px-4 py-3">
          <span class="inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-400">
            Active
          </span>
        </td>
      </tr>
      <tr class="border-b border-forge-border last:border-b-0 hover:bg-white/2 transition-colors">
        <td class="${classes.text} px-4 py-3 font-medium">Carol White</td>
        <td class="${classes.text} px-4 py-3 opacity-60">carol@example.com</td>
        <td class="${classes.text} px-4 py-3">Viewer</td>
        <td class="px-4 py-3">
          <span class="inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-red-500/15 text-red-400">
            Inactive
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>`;
    }

    return `export function Table() {
  return (
    <div className="${classes.card} w-full overflow-hidden ${font}">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-forge-border">
            {["Name", "Email", "Role", "Status"].map((h) => (
              <th key={h} className="${classes.heading} text-left px-4 py-3 text-xs uppercase tracking-wider opacity-70 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            { name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
            { name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Active" },
            { name: "Carol White", email: "carol@example.com", role: "Viewer", status: "Inactive" },
          ].map((row, i) => (
            <tr key={i} className="border-b border-forge-border last:border-b-0 hover:bg-white/2 transition-colors">
              <td className="${classes.text} px-4 py-3 font-medium">{row.name}</td>
              <td className="${classes.text} px-4 py-3 opacity-60">{row.email}</td>
              <td className="${classes.text} px-4 py-3">{row.role}</td>
              <td className="px-4 py-3">
                <span className={\`inline-flex px-2 py-0.5 rounded-full text-xs font-medium \${row.status === "Active" ? "bg-emerald-500/15 text-emerald-400" : "bg-red-500/15 text-red-400"}\`}>
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}`;
  },

  Accordion: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);
    const padding = getDensity(theme.density, "compact");

    if (format === "html") {
      return `<!-- Accordion -->
<div class="w-full max-w-lg space-y-2 ${font}">
  <!-- Item 1 (Open) -->
  <div class="${classes.card} overflow-hidden">
    <button class="w-full flex items-center justify-between text-left cursor-pointer ${padding}">
      <span class="${classes.heading} text-sm">What is ComponentForge?</span>
      <!-- Icon: ChevronDown (rotated) -->
      <svg class="w-4 h-4 shrink-0 text-forge-muted transition-transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
    </button>
    <div class="border-t border-forge-border ${padding}">
      <p class="${classes.text} text-sm opacity-70">A free tool that generates production-ready Tailwind CSS components.</p>
    </div>
  </div>

  <!-- Item 2 (Closed) -->
  <div class="${classes.card} overflow-hidden">
    <button class="w-full flex items-center justify-between text-left cursor-pointer ${padding}">
      <span class="${classes.heading} text-sm">Can I use the code commercially?</span>
      <!-- Icon: ChevronDown -->
      <svg class="w-4 h-4 shrink-0 text-forge-muted transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
    </button>
  </div>
</div>`;
    }

    return `import { useState } from "react";
import { Icon } from "@iconify/react";

export function Accordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="w-full max-w-lg space-y-2 ${font}">
      {[
        { q: "What is ComponentForge?", a: "A free tool that generates production-ready Tailwind CSS components." },
        { q: "Can I use the code commercially?", a: "Yes, all generated code is free to use." },
        { q: "Which frameworks are supported?", a: "React (JSX) and plain HTML with Tailwind utility classes." },
      ].map((faq, i) => (
        <div key={i} className="${classes.card} overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full flex items-center justify-between text-left cursor-pointer ${padding}"
          >
            <span className="${classes.heading} text-sm">{faq.q}</span>
            <Icon icon="solar:alt-arrow-down-bold" className={\`w-4 h-4 shrink-0 text-forge-muted transition-transform \${open === i ? "rotate-180" : ""}\`}  />
          </button>
          {open === i && (
            <div className="border-t border-forge-border ${padding}">
              <p className="${classes.text} text-sm opacity-70">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}`;
  },

  NotFoundPage: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);

    if (format === "html") {
      return `<!-- 404 Page -->
<div class="w-full text-center p-10 space-y-6 ${font}">
  <p class="text-7xl font-extrabold text-(--color-primary)">404</p>
  <h2 class="${classes.heading} text-xl">Page Not Found</h2>
  <p class="${classes.text} text-sm opacity-60 max-w-sm mx-auto">
    The page you're looking for doesn't exist or has been moved.
  </p>
  <button class="${classes.button} px-6 py-2.5 text-sm inline-flex items-center gap-2">
    <!-- Icon: Home -->
    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    Back to Home
  </button>
</div>`;
    }

    return `import { Icon } from "@iconify/react";

export function NotFoundPage() {
  return (
    <div className="w-full text-center p-10 space-y-6 ${font}">
      <p className="text-7xl font-extrabold text-(--color-primary)">404</p>
      <h2 className="${classes.heading} text-xl">Page Not Found</h2>
      <p className="${classes.text} text-sm opacity-60 max-w-sm mx-auto">
        We couldn’t find the page you were looking for. It might have been moved or deleted.
      </p>
      <button className="${classes.button} px-6 py-2.5 text-sm inline-flex items-center gap-2">
        <Icon icon="solar:home-2-bold" className="w-4 h-4"  />
        Back to Home
      </button>
    </div>
  );
}`;
  },

  /* ── Global Export ── */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  GlobalCSS: (theme, _format) => {
    const primary = theme.primaryColor;
    const radius = theme.borderRadius;
    // ... generate full CSS variables based on theme state
    // This is a simplified version. Ideally we'd iterate over all semantic tokens.

    // Map numbers to values
    const radiusValue =
      radius === 0
        ? "0px"
        : radius === 1
          ? "0.3rem"
          : radius === 2
            ? "0.5rem"
            : "1rem";

    return `:root {
  /* Brand */
  --color-primary: ${primary};
  --color-primary-foreground: #ffffff;
  
  /* Surface */
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-border: #27272a;
  
  /* Validation */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #0ea5e9;

  /* Typography */
  --font-sans: "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  /* Shape */
  --radius: ${radiusValue};
  --border-width: ${theme.borderWidth}px;
  
  /* Effects */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}`;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  TailwindConfig: (_theme, _format) => {
    return `/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
};`;
  },

  /* ── Pages ── */
  LandingPage: (theme, format) => {
    // We reuse existing templates to compose the page
    // Ideally we would import them or just duplicate the string logic for simplicity in this generated output.
    // For a robust system, we might recursively call TEMPLATES[Component].
    // But for now, we'll return a scaffold with placeholders or simplified versions.
    // actually, let's just return a comment saying "Compose using above components" or
    // try to construct a full page if possible.
    // Constructing full page is better.

    // NOTE: This is a simplified version. A real implementation would recursively generate code for children.
    // Here we will output a structural template.

    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);

    if (format === "html") return "<!-- Landing Page HTML -->";

    return `import HeroSection from "./HeroSection";
import BentoGrid from "./BentoGrid";
import TestimonialCard from "./TestimonialCard";

import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="w-full bg-(--color-background) ${font}">
      <HeroSection />
      
      <div className="w-full border-y border-forge-border bg-(--color-surface) py-20">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-forge-text mb-4">
               Everything you need to ship.
             </h2>
             <p className="text-forge-muted max-w-2xl mx-auto font-medium">
               A high-performance toolkit for teams that value design engineering. Everything you need to ship world-class interfaces.
             </p>
           </div>
           <BentoGrid />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
         <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-forge-text mb-4">
             Loved by thousands of developers.
           </h2>
         </div>
         <TestimonialCard /> 
      </div>

      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to get started?</h2>
        <button className="${classes.button} px-8 py-3 rounded-lg text-sm font-medium">
          Launch your first project
        </button>
      </div>

      <Footer />
    </div>
  );
}`;
  },

  DashboardPage: (theme, format) => {
    const font = getFont(theme.fontStyle);
    if (format === "html") return "<!-- Dashboard HTML -->";

    return `import SidebarNav from "./SidebarNav";
import Navbar from "./Navbar";
import StatsRow from "./StatsRow";
import Table from "./Table";
import Alert from "./Alert";

export default function DashboardPage() {
  return (
    <div className="w-full min-h-screen flex bg-(--color-background) ${font}">
      <div className="w-64 shrink-0 hidden md:block border-r border-forge-border">
        <SidebarNav />
      </div>
      
      <div className="flex-1 flex flex-col">
        <Navbar />
        
        <main className="p-6 space-y-6 overflow-y-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-black tracking-tight text-forge-text">Dashboard</h1>
            <div className="flex gap-2">
               <button className="px-4 py-2 bg-(--color-primary) text-white rounded text-sm font-bold shadow-lg shadow-(--color-primary)/20">New Project</button>
            </div>
          </div>

          <StatsRow />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-lg font-semibold text-forge-text">Recent Activity</h3>
              <Table />
            </div>
            
            <div className="space-y-4">
               <h3 className="text-lg font-bold tracking-tight text-forge-text">Updates</h3>
               <Alert />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}`;
  },

  AuthPage: (theme, format) => {
    const classes = generateThemeClasses(theme);
    const font = getFont(theme.fontStyle);
    if (format === "html") return "<!-- Auth HTML -->";

    return `export default function AuthPage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-(--color-background) p-4 ${font}">
      <div className="${classes.card} w-full max-w-md p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="${classes.heading} text-2xl">Welcome back</h1>
          <p className="${classes.text} opacity-60">Sign in to your account</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
             <div className="space-y-1">
               <label className="text-sm font-medium text-forge-text">Email</label>
               <input type="email" placeholder="name@example.com" className="${classes.input} w-full" />
             </div>

             <div className="space-y-1">
               <div className="flex justify-between">
                 <label className="text-sm font-medium text-forge-text">Password</label>
                 <a href="#" className="text-sm text-(--color-primary) hover:underline font-medium">Forgot password?</a>
               </div>
               <input type="password" className="${classes.input} w-full" />
             </div>
          </div>

          <div className="flex items-center gap-2">
             <input type="checkbox" className="rounded border-forge-border" />
             <span className="text-sm text-forge-text opacity-80">Remember me</span>
          </div>

          <button className="${classes.button} w-full py-2.5 justify-center">
            Sign In
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-forge-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-forge-panel px-2 text-forge-muted">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <button className="${classes.buttonSecondary} w-full py-2 justify-center text-sm">
             GitHub
           </button>
           <button className="${classes.buttonSecondary} w-full py-2 justify-center text-sm">
             Google
           </button>
        </div>

        <p className="text-center text-sm text-forge-text opacity-60">
          Don't have an account? <a href="#" className="text-(--color-primary) hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}`;
  },
};
