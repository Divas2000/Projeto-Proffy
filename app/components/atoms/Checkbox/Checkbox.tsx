import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

interface CheckboxProps {
  /** Checkbox id. */
  id: string;
  /** Checkbox label. */
  label: string;
}

export const Checkbox = ({ id, label }: CheckboxProps) => {
  return (
    <div className="flex gap-4">
      <RadixCheckbox.Root
        id={id}
        aria-label={label}
        className="flex w-6 items-center justify-center rounded border border-gray-200 bg-gray-50 transition-all aria-checked:border-pink-300 aria-checked:bg-pink-300"
      >
        <RadixCheckbox.Indicator>
          <Check color="#fff" size={12} strokeWidth={4} />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>

      <label htmlFor={id} className="cursor-pointer font-poppins text-gray-400">
        {label}
      </label>
    </div>
  );
};
