import { useEffect } from "react";

type ToastProps = {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void; // Added onClose function as a prop
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [onClose]);

  const style =
    type === "SUCCESS"
      ? "fixed top-4 right-4 z-50 p-3 rounded-md bg-green-600 text-white max-w-xs w-full sm:max-w-sm sm:p-4 sm:text-lg"
      : "fixed top-4 right-4 z-50 p-3 rounded-md bg-red-600 text-white max-w-xs w-full sm:max-w-sm sm:p-4 sm:text-lg";

  return (
    <div className={style}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold sm:text-base">{message}</span>
        <button
          className="ml-4 font-bold text-white"
          onClick={onClose} // Allow manual closing
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default Toast;
