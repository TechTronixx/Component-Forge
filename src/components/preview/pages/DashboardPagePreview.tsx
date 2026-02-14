import { useThemeStore } from "../../../store/themeStore";
import { getFont } from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import SidebarNav from "../layout/SidebarNav";
import Navbar from "../layout/Navbar";
import StatsRow from "../data/StatsRow";
import Table from "../data/Table";
import Alert from "../feedback/Alert";

export default function DashboardPagePreview() {
  const fontStyle = useThemeStore((s) => s.fontStyle);
  const font = getFont(fontStyle);

  return (
    <div
      className={twMerge(
        clsx("w-full min-h-[600px] flex bg-[var(--color-background)]", font),
      )}
    >
      <div className="w-64 shrink-0 hidden md:block border-r border-[var(--color-forge-border)]">
        <SidebarNav />
      </div>

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6 space-y-6 overflow-y-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[var(--color-forge-text)]">
              Dashboard
            </h1>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-[var(--color-primary)] text-white rounded text-sm font-medium">
                New Project
              </button>
            </div>
          </div>

          <StatsRow />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-lg font-semibold text-[var(--color-forge-text)]">
                Recent Activity
              </h3>
              <Table />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[var(--color-forge-text)]">
                Notifications
              </h3>
              <Alert />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
