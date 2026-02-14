import { lazy } from "react";
import type { ComponentCategory } from "../store/themeStore";

export interface ComponentRegistryEntry {
  id: string;
  name: string;
  category: ComponentCategory;
  component: React.LazyExoticComponent<React.ComponentType>;
}

/* ── Category metadata ── */
export const CATEGORIES: {
  id: ComponentCategory;
  label: string;
  icon: string;
}[] = [
  { id: "layout", label: "Layout", icon: "Layout" },
  { id: "elements", label: "Elements", icon: "MousePointerClick" },
  { id: "forms", label: "Forms", icon: "FormInput" },
  { id: "feedback", label: "Feedback", icon: "MessageCircle" },
  { id: "data", label: "Data", icon: "BarChart3" },
];

/* ── Component Registry (lazy imports — no barrel files) ── */
export const COMPONENT_REGISTRY: ComponentRegistryEntry[] = [
  /* ── Layout ── */
  {
    id: "HeroSection",
    name: "Hero Section",
    category: "layout",
    component: lazy(() => import("../components/preview/layout/HeroSection")),
  },
  {
    id: "Navbar",
    name: "Navbar",
    category: "layout",
    component: lazy(() => import("../components/preview/layout/Navbar")),
  },
  {
    id: "Footer",
    name: "Footer",
    category: "layout",
    component: lazy(() => import("../components/preview/layout/Footer")),
  },
  {
    id: "SidebarNav",
    name: "Sidebar Nav",
    category: "layout",
    component: lazy(() => import("../components/preview/layout/SidebarNav")),
  },
  {
    id: "BentoGrid",
    name: "Bento Grid",
    category: "layout",
    component: lazy(() => import("../components/preview/layout/BentoGrid")),
  },
  {
    id: "SectionDivider",
    name: "Section Divider",
    category: "layout",
    component: lazy(
      () => import("../components/preview/layout/SectionDivider"),
    ),
  },

  /* ── Elements ── */
  {
    id: "PrimaryButton",
    name: "Primary Button",
    category: "elements",
    component: lazy(
      () => import("../components/preview/elements/PrimaryButton"),
    ),
  },
  {
    id: "SecondaryButton",
    name: "Secondary Button",
    category: "elements",
    component: lazy(
      () => import("../components/preview/elements/SecondaryButton"),
    ),
  },
  {
    id: "IconButton",
    name: "Icon Button",
    category: "elements",
    component: lazy(() => import("../components/preview/elements/IconButton")),
  },
  {
    id: "LinkElement",
    name: "Link",
    category: "elements",
    component: lazy(() => import("../components/preview/elements/LinkElement")),
  },
  {
    id: "Badge",
    name: "Badge",
    category: "elements",
    component: lazy(() => import("../components/preview/elements/Badge")),
  },
  {
    id: "Avatar",
    name: "Avatar",
    category: "elements",
    component: lazy(() => import("../components/preview/elements/Avatar")),
  },

  /* ── Forms ── */
  {
    id: "InputField",
    name: "Input Field",
    category: "forms",
    component: lazy(() => import("../components/preview/forms/InputField")),
  },
  {
    id: "Textarea",
    name: "Textarea",
    category: "forms",
    component: lazy(() => import("../components/preview/forms/Textarea")),
  },
  {
    id: "Checkbox",
    name: "Checkbox",
    category: "forms",
    component: lazy(() => import("../components/preview/forms/Checkbox")),
  },
  {
    id: "RadioGroup",
    name: "Radio Group",
    category: "forms",
    component: lazy(() => import("../components/preview/forms/RadioGroup")),
  },
  {
    id: "ToggleSwitch",
    name: "Toggle Switch",
    category: "forms",
    component: lazy(() => import("../components/preview/forms/ToggleSwitch")),
  },
  {
    id: "SelectDropdown",
    name: "Select Dropdown",
    category: "forms",
    component: lazy(() => import("../components/preview/forms/SelectDropdown")),
  },
  {
    id: "Slider",
    name: "Slider",
    category: "forms",
    component: lazy(() => import("../components/preview/forms/Slider")),
  },
  {
    id: "SearchBar",
    name: "Search Bar",
    category: "forms",
    component: lazy(() => import("../components/preview/forms/SearchBar")),
  },

  /* ── Feedback ── */
  {
    id: "Alert",
    name: "Alert",
    category: "feedback",
    component: lazy(() => import("../components/preview/feedback/Alert")),
  },
  {
    id: "Modal",
    name: "Modal",
    category: "feedback",
    component: lazy(() => import("../components/preview/feedback/Modal")),
  },
  {
    id: "Tooltip",
    name: "Tooltip",
    category: "feedback",
    component: lazy(() => import("../components/preview/feedback/Tooltip")),
  },
  {
    id: "Toast",
    name: "Toast",
    category: "feedback",
    component: lazy(() => import("../components/preview/feedback/Toast")),
  },
  {
    id: "ProgressBar",
    name: "Progress Bar",
    category: "feedback",
    component: lazy(() => import("../components/preview/feedback/ProgressBar")),
  },
  {
    id: "Skeleton",
    name: "Skeleton",
    category: "feedback",
    component: lazy(() => import("../components/preview/feedback/Skeleton")),
  },

  /* ── Data ── */
  {
    id: "PricingCard",
    name: "Pricing Card",
    category: "data",
    component: lazy(() => import("../components/preview/data/PricingCard")),
  },
  {
    id: "TestimonialCard",
    name: "Testimonial Card",
    category: "data",
    component: lazy(() => import("../components/preview/data/TestimonialCard")),
  },
  {
    id: "StatsRow",
    name: "Stats Row",
    category: "data",
    component: lazy(() => import("../components/preview/data/StatsRow")),
  },
  {
    id: "Table",
    name: "Table",
    category: "data",
    component: lazy(() => import("../components/preview/data/Table")),
  },
  {
    id: "Accordion",
    name: "Accordion",
    category: "data",
    component: lazy(() => import("../components/preview/data/Accordion")),
  },
  {
    id: "NotFoundPage",
    name: "404 Page",
    category: "data",
    component: lazy(() => import("../components/preview/data/NotFoundPage")),
  },

  /* ── Pages ── */
  {
    id: "LandingPage",
    name: "Landing Page",
    category: "layout", // Reusing layout category or create new 'pages' category? Registry type likely restricts category strings.
    // Let's check types/component.ts if 'pages' is allowed.
    // If not, 'layout' is fine.
    // Actually, I should probably add 'pages' category if it's not strictly typed enum.
    // Assuming string.
    component: lazy(
      () => import("../components/preview/pages/LandingPagePreview"),
    ),
  },
  {
    id: "DashboardPage",
    name: "Dashboard",
    category: "layout",
    component: lazy(
      () => import("../components/preview/pages/DashboardPagePreview"),
    ),
  },
  {
    id: "AuthPage",
    name: "Authentication",
    category: "forms",
    component: lazy(
      () => import("../components/preview/pages/AuthPagePreview"),
    ),
  },
];

/**
 * Get components filtered by category.
 */
export function getComponentsByCategory(
  category: ComponentCategory,
): ComponentRegistryEntry[] {
  return COMPONENT_REGISTRY.filter((c) => c.category === category);
}

/**
 * Find a component by ID.
 */
export function getComponentById(
  id: string,
): ComponentRegistryEntry | undefined {
  return COMPONENT_REGISTRY.find((c) => c.id === id);
}
