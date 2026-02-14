import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function Avatar() {
  const avatars = [
    { initials: "JD", bg: "bg-[var(--color-primary)]", online: true },
    { initials: "KL", bg: "bg-[var(--color-secondary)]", online: true },
    { initials: "MR", bg: "bg-[var(--color-accent)]", online: false },
    { initials: "AS", bg: "bg-amber-500", online: false },
  ];

  return (
    <div className="flex flex-wrap gap-4 items-end">
      {/* Avatar circles */}
      <div className="flex -space-x-3">
        {avatars.map((a, i) => (
          <div key={i} className="relative">
            <div
              className={twMerge(
                clsx(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white border-2 border-[var(--color-forge-dark)]",
                  a.bg,
                ),
              )}
            >
              {a.initials}
            </div>
            {a.online && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[var(--color-forge-dark)]" />
            )}
          </div>
        ))}
      </div>

      {/* Larger avatar */}
      <div className="relative">
        <div
          className={twMerge(
            clsx(
              "w-14 h-14 rounded-full flex items-center justify-center text-lg font-semibold text-white bg-[var(--color-primary)]",
            ),
          )}
        >
          CF
        </div>
        <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[var(--color-forge-dark)]" />
      </div>
    </div>
  );
}
