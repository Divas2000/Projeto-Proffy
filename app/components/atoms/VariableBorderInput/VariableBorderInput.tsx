import { ComponentProps } from "react";
import { LucideIcon } from "lucide-react";

interface VariableBorderInputProps extends ComponentProps<"input"> {
  /** Input id. */
  id: string;
  /** Input type.
   *
   * If not informed, the default value is `text`
   */
  type?: "email" | "password" | "tel" | "text";
  /**
   * It is attributed to placeholder property and label tag content.
   */
  placeholder: string;
  /**
   * border-radius style based on Tailwind utility classes.
   *
   * `top = rounded-t` | `bottom = rounded-b` |
   * `none = rounded-none` | `all = rounded`
   *
   * If not informed, the default value is `all`.
   */
  border?: "top" | "bottom" | "none" | "all";
  /** Input icon. */
  Icon?: LucideIcon;
  /** Click handler on icon if it is interactive. */
  iconOnClick?: () => void;
}

const borderStyle = {
  top: "rounded-t",
  bottom: "rounded-b",
  none: "rounded-none",
  all: "rounded",
};

export const VariableBorderInput = ({
  id,
  type = "text",
  placeholder,
  border = "all",
  Icon,
  iconOnClick,
  ...props
}: VariableBorderInputProps) => {
  return (
    <div className="relative w-fit before:absolute before:left-[-.5px] before:top-3 before:z-10 before:h-[48px] before:w-[2px] before:rounded before:content-[''] focus-within:before:bg-pink-500">
      <input
        {...props}
        id={id}
        type={type}
        placeholder={placeholder}
        className={`h-[72px] px-6 pt-5 ${borderStyle[border]} peer border border-gray-200 bg-gray-50 font-poppins text-gray-600 placeholder:opacity-0 placeholder-shown:pt-0 focus-visible:outline-none`}
      />

      <label
        htmlFor={id}
        className="absolute left-[25px] top-[14px] cursor-text font-poppins text-xs text-gray-400 placeholder-shown:text-gray-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base"
      >
        {placeholder}
      </label>

      {Icon && (
        <Icon
          color="#B0ABBC"
          aria-label="Ícone"
          onClick={iconOnClick}
          className={`absolute right-[25px] top-6 ${
            iconOnClick && "cursor-pointer"
          }`}
        />
      )}
    </div>
  );
};
