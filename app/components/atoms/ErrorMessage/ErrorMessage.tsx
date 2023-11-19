import { cn } from "@/utils";

interface ErrorMessageProps {
  /** The error content. */
  message: string;
  /**
   * An option to add more styles using
   * Tailwind utility classes.
   */
  className?: string;
}

export const ErrorMessage = ({ message, className }: ErrorMessageProps) => {
  return (
    <span role="alert" className={cn("ml-1 text-xs text-red-400", className)}>
      {message}
    </span>
  );
};
