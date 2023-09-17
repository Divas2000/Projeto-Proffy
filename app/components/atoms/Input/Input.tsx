"use client";
import { Label } from "@/components";
import { ComponentProps, FormEvent, useState } from "react";

interface InputProps extends ComponentProps<"input"> {
  /** Input id. */
  id: string;
  /** Input label. */
  label: string;
  /** An optional helper text for the input label. */
  helperLabel?: string;
  /** An optional input mask to modify the input value. */
  mask?: (value: string) => string;
  /**
   * An optional `width` size.
   *
   * `xs = 128px` | `sm = 192px` | `md = 224px`
   * | `lg = 288px` | `xl = 384px`
   *
   * If not informed, the default value is `sm`.
   */
  width?: "xs" | "sm" | "md" | "lg" | "xl";
}

const style = {
  xs: "w-32",
  sm: "w-48",
  md: "w-56",
  lg: "w-72",
  xl: "w-96",
};

export const Input = ({
  id,
  label,
  helperLabel,
  mask,
  width = "sm",
  ...props
}: InputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputMask = (event: FormEvent): void => {
    const targetValue = (event.target as HTMLInputElement).value;

    if (mask) {
      setInputValue(mask(targetValue));
    } else {
      setInputValue(targetValue);
    }
  };

  return (
    <div className={`${style[width]}`}>
      <Label htmlFor={id} title={label} helperLabel={helperLabel} />
      <input
        {...props}
        id={id}
        type="text"
        value={inputValue}
        onInput={handleInputMask}
        className="mt-2 w-full rounded border border-gray-200 bg-gray-50 px-6 py-4 font-poppins text-gray-600 focus:border-purple-600 focus:outline-none"
      />
    </div>
  );
};
