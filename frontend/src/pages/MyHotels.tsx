import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";
import { HotelType } from "../../../backend/src/shared/types";

const MyHotels = () => {
  const { data: hotelData, error } = useQuery<HotelType[], Error>({
    queryKey: ["fetchMyHotels"],
    queryFn: apiClient.fetchMyHotels,
  });

  if (error) {
    return (
      <span className="text-red-500">
        Error fetching hotels: {error.message}
      </span>
    );
  }

  if (!hotelData || hotelData.length === 0) {
    return (
      <div>
        <span className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">No Hotels Added Yet</h1>
          <Link
            to="/add-hotel"
            className="px-5 py-2 text-lg font-medium text-white transition-colors bg-teal-600 rounded-md hover:bg-teal-500"
          >
            Add Hotel
          </Link>
        </span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <span className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">My Hotels</h1>
        <Link
          to="/add-hotel"
          className="px-5 py-2 text-lg font-medium text-white transition-colors bg-teal-600 rounded-md hover:bg-teal-500"
        >
          Add Hotel
        </Link>
      </span>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hotelData.map((hotel) => (
          <div
            key={hotel._id}
            data-testid="hotel-card"
            className="flex flex-col justify-between gap-4 p-5 transition-shadow border rounded-md shadow-sm border-slate-300 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {hotel.name}
            </h2>
            <div className="text-sm text-gray-600 whitespace-pre-line">
              {hotel.description}
            </div>
            <div className="grid grid-cols-1 gap-3 mt-3 sm:grid-cols-2">
              <div className="flex items-center p-2 text-sm border rounded-sm border-slate-300">
                <BsMap className="mr-2 text-lg text-gray-500" />
                {hotel.city}, {hotel.country}
              </div>
              <div className="flex items-center p-2 text-sm border rounded-sm border-slate-300">
                <BsBuilding className="mr-2 text-lg text-gray-500" />
                {hotel.type}
              </div>
              <div className="flex items-center p-2 text-sm border rounded-sm border-slate-300">
                <BiMoney className="mr-2 text-lg text-gray-500" />฿
                {hotel.pricePerNight} per night
              </div>
              <div className="flex items-center p-2 text-sm border rounded-sm border-slate-300">
                <BiHotel className="mr-2 text-lg text-gray-500" />
                {hotel.adultCount} adults, {hotel.childCount} children
              </div>
              <div className="flex items-center p-2 text-sm border rounded-sm border-slate-300">
                <BiStar className="mr-2 text-lg text-gray-500" />
                {hotel.starRating} Star Rating
              </div>
            </div>
            <div className="flex justify-end mt-3">
              <Link
                to={`/edit-hotel/${hotel._id}`}
                className="px-5 py-2 text-lg font-medium text-white transition-colors bg-teal-600 rounded-md hover:bg-teal-500"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHotels;
