import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";

interface ForgeIconProps {
  icon: string;
  className?: string;
}

/**
 * Universal Icon component for Forge.
 * Uses Solar, Fluent, and Glyphs sets via Iconify.
 */
export default function ForgeIcon({ icon, className }: ForgeIconProps) {
  return <Icon icon={icon} className={twMerge("w-auto h-auto", className)} />;
}
