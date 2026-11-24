import { socialLinks, type SocialName } from "@/data/site";
import { cn } from "@/lib/utils";

function Icon({ name }: { name: SocialName }) {
  const common = {
    className: "h-4 w-4",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  } as const;

  switch (name) {
    case "X":
      return (
        <svg {...common}>
          <path d="M18.9 2H22l-6.8 7.8L23 22h-6.4l-5-6.6L6 22H2.1l7.3-8.4L1 2h6.6l4.5 6L18.9 2Zm-1.1 18.2h1.8L6.3 3.7H4.4l13.4 16.5Z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...common}>
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.98H4.8V24H.22V8.98zM8.34 8.98h4.36v2.05h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v8.35h-4.58v-7.4c0-1.77-.03-4.04-2.46-4.04-2.46 0-2.84 1.92-2.84 3.9V24H8.34V8.98z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...common}>
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm11.2 1.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM12 7.2A4.8 4.8 0 1 1 12 16.8 4.8 4.8 0 0 1 12 7.2zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg {...common}>
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
        </svg>
      );
    case "Pinterest":
      return (
        <svg {...common}>
          <path d="M12 0C5.4 0 0 5.4 0 12c0 5 3.1 9.2 7.5 10.9-.1-.9-.2-2.3 0-3.3.2-.9 1.4-6 1.4-6s-.4-.7-.4-1.8c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.2 0 3.8-2.3 3.8-5.6 0-2.9-2.1-5-5.2-5-3.5 0-5.6 2.6-5.6 5.4 0 1.1.4 2.2 1 2.8a.4.4 0 0 1 .1.4l-.4 1.5c-.1.3-.2.4-.5.2-1.8-.8-2.9-3.4-2.9-5.5C2.6 6.8 6.3 3.2 11.1 3.2c4 0 7.1 2.8 7.1 6.6 0 3.9-2.5 7.1-5.9 7.1-1.2 0-2.2-.6-2.6-1.3l-.7 2.7c-.3 1-1 2.2-1.4 3A12 12 0 0 0 12 24c6.6 0 12-5.4 12-12S18.6 0 12 0z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg {...common}>
          <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SocialWidget({
  variant = "default",
  className,
}: {
  variant?: "default" | "light" | "compact" | "float";
  className?: string;
}) {
  const isLight = variant === "light";
  const isFloat = variant === "float";

  return (
    <div className={cn(isFloat && "hidden lg:flex", className)}>
      {variant !== "compact" && variant !== "float" ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
            isLight ? "text-white/70" : "text-muted",
          )}
        >
          Follow the desk
        </p>
      ) : null}
      <ul
        className={cn(
          "flex items-center gap-2",
          isFloat && "flex-col",
        )}
      >
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.name}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300",
                isLight
                  ? "border-white/20 text-white hover:border-white hover:bg-white hover:text-forest"
                  : "border-line bg-card text-ink hover:border-forest hover:bg-forest hover:text-paper",
                isFloat &&
                  "h-11 w-11 border-line/80 bg-card/95 shadow-sm backdrop-blur",
              )}
            >
              <Icon name={link.name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
