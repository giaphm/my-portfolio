import { cn } from "~/lib/utils";

type AppProps = {
  children: string;
  className?: string;
};

export function Badge({ children, className }: AppProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10",
        className,
      )}
    >
      {children}
    </span>
  );
}