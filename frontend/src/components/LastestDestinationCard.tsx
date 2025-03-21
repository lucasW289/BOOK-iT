import { Link } from "react-router-dom";
import { HotelType } from "../../../backend/src/shared/types";

type Props = {
  hotel: HotelType;
};

const LatestDestinationCard = ({ hotel }: Props) => {
  return (
    <Link
      to={`/detail/${hotel._id}`}
      className="relative overflow-hidden transition-all duration-300 transform rounded-md cursor-pointer hover:scale-105"
    >
      <div className="h-[300px] sm:h-[350px] md:h-[400px]">
        <img
          src={hotel.imageUrls[0]}
          className="object-cover object-center w-full h-full transition-transform duration-300 transform hover:scale-110"
        />
      </div>

      <div className="absolute bottom-0 w-full p-4 bg-black bg-opacity-50 rounded-b-md">
        <span className="text-sm font-bold tracking-tight text-white sm:text-xl md:text-2xl">
          {hotel.name}
        </span>
      </div>
    </Link>
  );
};

export default LatestDestinationCard;
