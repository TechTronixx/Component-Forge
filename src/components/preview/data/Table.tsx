import { useThemeStore } from "../../../store/themeStore";
import { generateThemeClasses, getFont } from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const DATA = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    name: "Carol White",
    email: "carol@example.com",
    role: "Viewer",
    status: "Inactive",
  },
  {
    name: "Dan Brown",
    email: "dan@example.com",
    role: "Editor",
    status: "Active",
  },
];

export default function Table() {
  const archetype = useThemeStore((s) => s.archetype);
  const borderRadius = useThemeStore((s) => s.borderRadius);
  const borderWidth = useThemeStore((s) => s.borderWidth);
  const shadowDepth = useThemeStore((s) => s.shadowDepth);
  const fontStyle = useThemeStore((s) => s.fontStyle);

  const classes = generateThemeClasses({
    archetype,
    borderRadius,
    borderWidth,
    shadowDepth,
  });
  const font = getFont(fontStyle);

  return (
    <div
      className={twMerge(clsx(classes.card, font, "w-full overflow-hidden"))}
    >
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[var(--color-forge-border)]">
            {["Name", "Email", "Role", "Status"].map((h) => (
              <th
                key={h}
                className={twMerge(
                  clsx(
                    classes.heading,
                    "text-left px-4 py-3 text-xs uppercase tracking-wider opacity-70 font-medium",
                  ),
                )}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {DATA.map((row, i) => (
            <tr
              key={i}
              className="border-b border-[var(--color-forge-border)] last:border-b-0 hover:bg-white/[0.02] transition-colors"
            >
              <td
                className={twMerge(clsx(classes.text, "px-4 py-3 font-medium"))}
              >
                {row.name}
              </td>
              <td
                className={twMerge(clsx(classes.text, "px-4 py-3 opacity-60"))}
              >
                {row.email}
              </td>
              <td className={twMerge(clsx(classes.text, "px-4 py-3"))}>
                {row.role}
              </td>
              <td className="px-4 py-3">
                <span
                  className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                    row.status === "Active"
                      ? "bg-emerald-500/15 text-emerald-400"
                      : "bg-red-500/15 text-red-400"
                  }`}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
