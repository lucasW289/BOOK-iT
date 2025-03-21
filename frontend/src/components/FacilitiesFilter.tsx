import { hotelFacilities } from "../config/hotel-option-config";

type Props = {
  selectedFacilities: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FacilitiesFilter = ({ selectedFacilities, onChange }: Props) => {
  return (
    <div className="pb-5 border-b border-slate-300">
      <h4 className="mb-4 font-semibold text-md">Facilities</h4>
      <div className="space-y-3 sm:grid sm:grid-cols-2 sm:gap-4">
        {hotelFacilities.map((facility) => (
          <label key={facility} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded"
              value={facility}
              checked={selectedFacilities.includes(facility)}
              onChange={onChange}
            />
            <span>{facility}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesFilter;
