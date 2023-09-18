import * as SelectRadix from "@radix-ui/react-select";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface SelectProps {
  /** A short select description. */
  ariaLabel: string;
  /** Select placeholder. */
  placeholder: string;
  /** A list with select options. */
  options: string[];
  /** Provides a name to reference the select in form data. */
  name?: string;
  /** Radix event handler called when the value changes.
   *
   * @param value the actual value in the select.
   */
  onValueChange?: (value: string) => void;
}

export const Select = ({
  ariaLabel,
  options,
  placeholder,
  ...props
}: SelectProps) => {
  const [selectOpen, setSelectOpen] = useState(false);

  return (
    <SelectRadix.Root {...props} onOpenChange={(open) => setSelectOpen(open)}>
      <SelectRadix.Trigger
        aria-label={ariaLabel}
        placeholder={placeholder}
        className="flex w-full items-center justify-between rounded border border-gray-200 bg-gray-50 px-6 py-4 font-poppins text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500 data-[state=open]:rounded-none data-[state=open]:rounded-t data-[placeholder='']:text-gray-300"
      >
        <SelectRadix.Value placeholder={placeholder} />
        <SelectRadix.Icon className="text-gray-400">
          {selectOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </SelectRadix.Icon>
      </SelectRadix.Trigger>

      <SelectRadix.Portal>
        <SelectRadix.Content
          position="popper"
          className="max-h-radix-select w-radix-select"
        >
          <SelectRadix.Viewport className="rounded-b border-x border-b border-gray-200 font-poppins">
            {options.map((option, index) => (
              <SelectRadix.SelectItem
                key={index}
                value={option}
                className={`flex items-center bg-gray-50 px-6 py-4 font-poppins text-gray-600 before:absolute before:left-0 before:z-10 before:h-14 before:w-[2px] before:content-[''] focus:bg-gray-100 focus:outline-none focus:before:bg-purple-600 data-[state=checked]:bg-gray-100 data-[state=checked]:font-semibold data-[state=checked]:before:bg-purple-600 ${
                  index !== options.length - 1 && "border-b border-b-gray-200"
                }`}
              >
                <SelectRadix.ItemText>{option}</SelectRadix.ItemText>
              </SelectRadix.SelectItem>
            ))}
          </SelectRadix.Viewport>

          <SelectRadix.ScrollDownButton className="ml-auto text-gray-400">
            <ChevronDown size={16} />
          </SelectRadix.ScrollDownButton>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  );
};
