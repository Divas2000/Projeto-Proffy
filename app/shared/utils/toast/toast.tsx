import { toast as hotToast } from "react-hot-toast";

interface ToastProps {
  /** A title to the toast element. */
  title?: string;
  /** A description to the toast element. */
  description?: string;
}

/**
 * Generates a toast whenever it is called.
 *
 * @param toastObject receives two optional params: `title` and
 * `description`, to provide toast content.
 */
export const toast = ({ title, description }: ToastProps) => {
  hotToast(
    <div
      role="presentation"
      className="flex py-4 pl-[14px] pr-2 font-poppins before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-2 before:rounded-l before:bg-pink-300 before:content-['']"
    >
      <div role="presentation">
        {title && (
          <h3 className="mb-2 font-semibold text-purple-900">{title}</h3>
        )}
        {description && <p className="text-sm text-gray-400">{description}</p>}
      </div>
    </div>,
    {
      duration: 4000,
      position: "top-right",
      ariaProps: {
        role: "alert",
        "aria-live": "assertive",
      },
      style: {
        padding: 0,
        margin: 0,
      },
    },
  );
};
