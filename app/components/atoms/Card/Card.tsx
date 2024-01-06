import { cn } from "@/utils";
import { ComponentProps } from "react";

interface CardRootProps extends ComponentProps<"div"> {}

function Root({ children, className, ...props }: CardRootProps) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-lg border border-gray-200 bg-white",
        className,
      )}
      {...props}
    >
      {children}
    </article>
  );
}

interface CardContentProps extends ComponentProps<"section"> {
  padding?: "md" | "lg";
}

export function Content({
  padding = "md",
  children,
  className,
}: CardContentProps) {
  return (
    <section
      className={cn(className, padding === "md" ? "p-8" : "px-16 py-14")}
    >
      {children}
    </section>
  );
}

interface CardFooterProps extends ComponentProps<"div"> {
  padding?: "md" | "lg";
}

export function Footer({
  padding = "md",
  children,
  className,
}: CardFooterProps) {
  return (
    <div
      className={cn(
        "border-t border-gray-200 bg-gray-50 p-8",
        className,
        padding === "md" ? "p-8" : "px-16 py-14",
      )}
    >
      {children}
    </div>
  );
}

export const Card = {
  Root,
  Content,
  Footer,
};
