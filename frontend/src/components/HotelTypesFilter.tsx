import { hotelTypes } from "../config/hotel-option-config";

type Props = {
  selectedHotelTypes: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const HotelTypesFilter = ({ selectedHotelTypes, onChange }: Props) => {
  return (
    <div className="pb-5 border-b border-slate-300">
      <h4 className="mb-2 font-semibold text-md">Hotel Type</h4>
      <div className="space-y-3">
        {hotelTypes.map((hotelType) => (
          <label className="flex items-center space-x-2 text-sm sm:text-base">
            <input
              type="checkbox"
              className="rounded"
              value={hotelType}
              checked={selectedHotelTypes.includes(hotelType)}
              onChange={onChange}
            />
            <span>{hotelType}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default HotelTypesFilter;
