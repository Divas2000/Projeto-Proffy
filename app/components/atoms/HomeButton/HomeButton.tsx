import { LucideIcon } from "lucide-react";

interface HomeButtonProps {
  /**
   * What background color to use
   */
  backgroundColor: "pink" | "purple";
  /** icon*/
  Icon: LucideIcon;
  /**
   * Button contents
   */
  label: "Estudar" | "Dar aulas";
  /**
   * click handler
   */
  onClick: () => void;
}

const style = {
  pink: {
    default: "bg-pink-300",
    hover: "hover:bg-pink-400",
  },
  purple: {
    default: "bg-purple-400",
    hover: "hover:bg-purple-600",
  },
};

export const HomeButton = ({
  backgroundColor,
  label,
  onClick,
  Icon,
}: HomeButtonProps) => {
  return (
    <button
      className={`flex w-[220px] justify-center gap-6 rounded-lg px-10 py-6 font-archivo font-bold text-white shadow-sm transition-all ${style[backgroundColor].default} ${style[backgroundColor].hover} hover:shadow-none`}
      onClick={onClick}
      aria-label={`Clique em ${label}`}
    >
      <Icon color="#fff" />
      {label}
    </button>
  );
};
