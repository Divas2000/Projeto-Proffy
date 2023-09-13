import { ComponentProps } from "react";
import { Label } from "@/components";

interface TextareaProps extends ComponentProps<"textarea"> {
  /** Textarea id. */
  id: string;
  /** Label for the textarea input. */
  label: string;
  /** An optional helper text for the textarea label. */
  helperLabel?: string;
  /** An optional height in **pixels** for the textarea */
  height?: number;
}

export const Textarea = ({
  id,
  label,
  helperLabel,
  height,
  ...props
}: TextareaProps) => {
  return (
    <>
      <Label htmlFor={id} title={label} helperLabel={helperLabel} />
      <textarea
        {...props}
        id={id}
        placeholder={label}
        style={{ height: height ? `${height}px` : "fit-content" }}
        className="mt-2 min-h-[58px] w-full resize-y rounded border border-gray-200 bg-gray-50 p-4 font-poppins text-base text-gray-600 placeholder:opacity-0 focus:border-purple-600 focus:outline-none"
      ></textarea>
    </>
  );
};
