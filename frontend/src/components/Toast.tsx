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
      ? "fixed top-4 right-4 z-50 p-4 rounded-md bg-green-600 text-white max-w-md"
      : "fixed top-4 right-4 z-50 p-4 rounded-md bg-red-600 text-white max-w-md";

  return (
    <div className={style}>
      <div className="flex justify-center items-center">
        <span className="text-lg font-semibold">{message}</span>
        <button
          className="ml-4 text-white font-bold"
          onClick={onClose} // Allow manual closing
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default Toast;
