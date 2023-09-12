import { LucideIcon } from "lucide-react";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  /**
   * It is attributed to the button content and
   * `aria-label` property.
   */
  label: string;
  /** Button icon. */
  Icon?: LucideIcon;
  /** Button width size.
   *
   * `sm = 192px` | `md = 256px` | `lg = 352px`
   *
   * If not informed, the default value is `sm`.
   */
  size?: "sm" | "md" | "lg";
}

const width = {
  sm: "w-48",
  md: "w-64",
  lg: "w-[352px]",
};

export const Button = ({ label, Icon, size = "sm", ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      aria-label={`Clique em ${label}`}
      className={`${width[size]} font-base flex justify-center gap-4 rounded border-none bg-pink-300 py-4 font-archivo font-semibold text-white outline-none transition-all hover:bg-pink-400 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400`}
    >
      {Icon && <Icon size={24} role="img" />}
      {label}
    </button>
  );
};
