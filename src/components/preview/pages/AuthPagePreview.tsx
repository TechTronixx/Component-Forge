import { useThemeStore } from "../../../store/themeStore";
import { generateThemeClasses, getFont } from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function AuthPagePreview() {
  const archetype = useThemeStore((s) => s.archetype);
  const fontStyle = useThemeStore((s) => s.fontStyle);

  const classes = generateThemeClasses({
    archetype,
    borderRadius: useThemeStore((s) => s.borderRadius),
    borderWidth: useThemeStore((s) => s.borderWidth),
    shadowDepth: useThemeStore((s) => s.shadowDepth),
  });

  const font = getFont(fontStyle);

  return (
    <div
      className={twMerge(
        clsx(
          "w-full min-h-[600px] flex items-center justify-center bg-[var(--color-background)] p-4",
          font,
        ),
      )}
    >
      <div
        className={twMerge(clsx(classes.card, "w-full max-w-md p-8 space-y-6"))}
      >
        <div className="text-center space-y-2">
          <h1 className={twMerge(clsx(classes.heading, "text-2xl"))}>
            Welcome back
          </h1>
          <p className={twMerge(clsx(classes.text, "opacity-60"))}>
            Sign in to your account
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            {/* We manually compose Inputs since InputField is self-contained. 
                 Ideally InputField should accept props for label/placeholder override.
                 Assuming InputField renders a demo, we might need to implement a 'Prop-driven' version or just use the demo as is for now.
                 Actually, looking at InputField source, it likely has hardcoded labels "Email" etc.
                 Let's check InputField source. If hardcoded, we might just render it directly.
             */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-[var(--color-forge-text)]">
                Email
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className={classes.input + " w-full"}
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-[var(--color-forge-text)]">
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm text-[var(--color-primary)] hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <input type="password" className={classes.input + " w-full"} />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="rounded border-[var(--color-forge-border)]"
            />
            <span className="text-sm text-[var(--color-forge-text)] opacity-80">
              Remember me
            </span>
          </div>

          <button
            className={twMerge(
              clsx(classes.button, "w-full py-2.5 justify-center"),
            )}
          >
            Sign In
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-[var(--color-forge-border)]" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[var(--color-forge-panel)] px-2 text-[var(--color-forge-muted)]">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            className={twMerge(
              clsx(
                classes.buttonSecondary,
                "w-full py-2 justify-center text-sm",
              ),
            )}
          >
            GitHub
          </button>
          <button
            className={twMerge(
              clsx(
                classes.buttonSecondary,
                "w-full py-2 justify-center text-sm",
              ),
            )}
          >
            Google
          </button>
        </div>

        <p className="text-center text-sm text-[var(--color-forge-text)] opacity-60">
          Don't have an account?{" "}
          <a href="#" className="text-[var(--color-primary)] hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
