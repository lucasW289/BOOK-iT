import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="mb-3 text-2xl font-bold">Guests</h2>
      <div className="grid grid-cols-1 gap-5 p-6 bg-gray-300 sm:grid-cols-2">
        <label className="text-sm font-semibold text-gray-700">
          Adults
          <input
            className="w-full px-3 py-2 font-normal border rounded"
            type="number"
            min={1}
            {...register("adultCount", {
              required: "This field is required",
            })}
          />
          {errors.adultCount?.message && (
            <span className="text-sm font-bold text-red-500">
              {errors.adultCount?.message}
            </span>
          )}
        </label>
        <label className="text-sm font-semibold text-gray-700">
          Children
          <input
            className="w-full px-3 py-2 font-normal border rounded"
            type="number"
            min={0}
            {...register("childCount", {
              required: "This field is required",
            })}
          />
          {errors.childCount?.message && (
            <span className="text-sm font-bold text-red-500">
              {errors.childCount?.message}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestsSection;
