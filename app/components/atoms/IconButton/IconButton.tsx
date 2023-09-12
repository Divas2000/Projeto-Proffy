import { LucideIcon } from "lucide-react";
import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
  /** An short description for the button. */
  ariaLabel: string;
  /** Button icon. */
  Icon: LucideIcon;
}

export const IconButton = ({ Icon, ariaLabel, ...props }: IconButtonProps) => {
  return (
    <button
      {...props}
      aria-label={ariaLabel}
      className="h-fit w-fit rounded-full bg-pink-300 p-4 text-white transition-all hover:bg-pink-400 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
    >
      {<Icon size={24} role="img" />}
    </button>
  );
};
