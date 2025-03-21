import { HotelType } from "../../../backend/src/shared/types";

type Props = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
  numberOfNights: number;
  hotel: HotelType;
};

const BookingDetailsSummary = ({
  checkIn,
  checkOut,
  adultCount,
  childCount,
  numberOfNights,
  hotel,
}: Props) => {
  return (
    <div className="grid gap-4 p-5 border rounded-lg border-slate-300 h-fit">
      <h2 className="text-xl font-bold">Your Booking Details</h2>

      <div className="py-2 border-b">
        <span className="block text-sm font-medium text-gray-600">
          Location:
        </span>
        <div className="text-base font-bold">{`${hotel.name}, ${hotel.city}, ${hotel.country}`}</div>
      </div>

      <div className="flex flex-col justify-between sm:flex-row sm:space-x-4">
        <div>
          <span className="block text-sm font-medium text-gray-600">
            Check-in
          </span>
          <div className="text-base font-bold">{checkIn.toDateString()}</div>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-600">
            Check-out
          </span>
          <div className="text-base font-bold">{checkOut.toDateString()}</div>
        </div>
      </div>

      <div className="py-2 border-t border-b">
        <span className="block text-sm font-medium text-gray-600">
          Total length of stay:
        </span>
        <div className="text-base font-bold">{numberOfNights} nights</div>
      </div>

      <div>
        <span className="block text-sm font-medium text-gray-600">Guests</span>
        <div className="text-base font-bold">
          {adultCount} adults & {childCount} children
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsSummary;
