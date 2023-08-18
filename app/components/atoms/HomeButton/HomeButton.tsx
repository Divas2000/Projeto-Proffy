import { LucideIcon } from "lucide-react";

interface HomeButtonProps {
  /**
   * What background color to use
   */
  backgroundColor: "bg-pink-300" | "bg-purple-500";
  /** icon*/
  Icon: LucideIcon;
  /**
   * Button contents
   */
  label: string;
  /**
   * click handler
   */
  onClick: () => void;
}

export const HomeButton = ({
  backgroundColor,
  label,
  onClick,
  Icon,
}: HomeButtonProps) => {
  return (
    <button
      className={`w-[220px] ${backgroundColor} flex justify-center gap-6 rounded-lg px-10 py-6 font-semibold text-white shadow-sm`}
      onClick={onClick}
      aria-label={`Clique em ${label}`}
    >
      <Icon color="#fff" />
      {label}
    </button>
  );
};
