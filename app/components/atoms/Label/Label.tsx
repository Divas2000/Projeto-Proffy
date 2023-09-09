interface LabelProps {
  /** Equivalent to the `for` property of the HTML label tag. */
  htmlFor: string;
  /** The content of the label. */
  title: string;
  /** An optional helper text for the label. */
  helperLabel?: string;
}

export const Label = ({ htmlFor, title, helperLabel }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className="font-poppins text-sm text-gray-400">
      {title}
      {helperLabel && (
        <span aria-label="Aviso" className="ml-2 text-xs">
          {helperLabel}
        </span>
      )}
    </label>
  );
};
