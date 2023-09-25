import { ComponentProps } from "react";
import { Label } from "@/components";

interface TextareaProps extends ComponentProps<"textarea"> {
  /** Textarea id. */
  id: string;
  /** Label for the textarea input. */
  label: string;
  /** An optional helper text for the textarea label. */
  helperLabel?: string;
  /**
   * An optional height for the textarea. If a `number`
   * is informed, then it will be in **pixels**.
   *
   * If not informed, the default value is `fit-content`.
   */
  height?: number | string;
}

export const Textarea = ({
  id,
  label,
  helperLabel,
  height = "fit-content",
  ...props
}: TextareaProps) => {
  return (
    <>
      <Label htmlFor={id} title={label} helperLabel={helperLabel} />
      <textarea
        {...props}
        id={id}
        placeholder={label}
        style={{
          height: typeof height === "number" ? `${height}px` : height,
        }}
        className="mt-2 min-h-[58px] w-full resize-y rounded border border-gray-200 bg-gray-50 p-4 font-poppins text-base text-gray-600 placeholder:opacity-0 focus:border-purple-600 focus:outline-none"
      ></textarea>
    </>
  );
};
