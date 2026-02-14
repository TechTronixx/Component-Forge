# ComponentForge

ComponentForge is a tool for generating and customizing Tailwind CSS design systems in real-time.
It lets you toggle between different archetypes (like Neo-Brutalism or Glassmorphism) and tweak global tokens for density, radius, and color.
Changes are instantly reflected across a library of interactive preview components, from buttons to full page layouts.
Once you're happy with the design, you can export the exact React components and Tailwind configuration needed to reproduce it.
It's just a fast way to prototype UI styles and get the code you need without setting up a new project.

## Tech Stack

- **Runtime:** Bun
- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Animation:** Framer Motion
- **Icons:** Lucide React

## Features

- **Dynamic Theming:** Switch between multiple archetypes (Modern, Retro, Brutalist, etc.).
- **Component Library:** Pre-built, customizable UI components (Buttons, Inputs, Cards).
- **Live Preview:** Real-time visualization of theme changes.
- **Interactive Controls:** Fine-tune border radius, density, and colors.

## Getting Started

### Installation

```bash
bun install
```

### Development

```bash
bun run dev
```

### Build

```bash
bun run build
```
