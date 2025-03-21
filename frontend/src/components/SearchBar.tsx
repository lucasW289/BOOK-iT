import { FormEvent, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { MdTravelExplore } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const search = useSearchContext();

  const [destination, setDestination] = useState<string>(search.destination);
  const [checkIn, setCheckIn] = useState<Date>(search.checkIn);
  const [checkOut, setCheckOut] = useState<Date>(search.checkOut);
  const [adultCount, setAdultCount] = useState<number>(search.adultCount);
  const [childCount, setChildCount] = useState<number>(search.childCount);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    search.saveSearchValues(
      destination,
      checkIn,
      checkOut,
      adultCount,
      childCount
    );
    navigate("/search");
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <form
      onSubmit={handleSubmit}
      className="grid max-w-4xl grid-cols-2 gap-3 p-4 mx-auto bg-white rounded-md shadow-md"
    >
      <div className="flex items-center p-2 space-x-2 bg-gray-100 rounded-md">
        <MdTravelExplore size={24} className="text-blue-600" />
        <input
          placeholder="Where are you going?"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
          aria-label="Destination"
        />
      </div>

      <div className="flex gap-2">
        <div className="w-1/2">
          <label className="text-sm font-medium text-gray-700" htmlFor="adults">
            Adults
          </label>
          <input
            id="adults"
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="number"
            min={1}
            max={20}
            value={adultCount}
            onChange={(event) => setAdultCount(parseInt(event.target.value))}
            aria-label="Adult count"
          />
        </div>

        <div className="w-1/2">
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor="children"
          >
            Children
          </label>
          <input
            id="children"
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="number"
            min={0}
            max={20}
            value={childCount}
            onChange={(event) => setChildCount(parseInt(event.target.value))}
            aria-label="Children count"
          />
        </div>
      </div>

      <div className="flex gap-2">
        <div className="w-1/2">
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor="check-in"
          >
            Check-in
          </label>
          <DatePicker
            selected={checkIn}
            onChange={(date) => setCheckIn(date as Date)}
            selectsStart
            startDate={checkIn}
            endDate={checkOut}
            minDate={minDate}
            maxDate={maxDate}
            placeholderText="Check-in Date"
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            id="check-in"
            aria-label="Check-in date"
          />
        </div>

        <div className="w-1/2">
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor="check-out"
          >
            Check-out
          </label>
          <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date as Date)}
            selectsEnd
            startDate={checkIn}
            endDate={checkOut}
            minDate={minDate}
            maxDate={maxDate}
            placeholderText="Check-out Date"
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            id="check-out"
            aria-label="Check-out date"
          />
        </div>
      </div>

      <div className="flex justify-center mt-3">
        <button
          type="submit"
          className="w-full py-3 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
