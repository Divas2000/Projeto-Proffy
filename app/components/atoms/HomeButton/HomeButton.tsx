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

const buttonColor = {
  pink: "bg-pink-300",
  purple: "bg-purple-500",
};

export const HomeButton = ({
  backgroundColor,
  label,
  onClick,
  Icon,
}: HomeButtonProps) => {
  return (
    <button
      className={`w-[220px] ${buttonColor[backgroundColor]} hover:bg-${backgroundColor}-600 flex justify-center gap-6 rounded-lg px-10 py-6 font-semibold text-white shadow-sm`}
      onClick={onClick}
      aria-label={`Clique em ${label}`}
    >
      <Icon color="#fff" />
      {label}
    </button>
  );
};
