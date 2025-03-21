import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <header className="py-4 bg-blue-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between w-full">
          <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            <Link to="/">MernHoliday.com</Link>
          </span>
          <span className="flex flex-wrap justify-between w-full space-x-4 md:w-auto md:space-x-2">
            {isLoggedIn ? (
              <>
                <Link
                  className="flex items-center px-3 font-medium text-white hover:bg-blue-600"
                  to="/my-bookings"
                >
                  My Bookings
                </Link>
                <Link
                  className="flex items-center px-3 font-medium text-white hover:bg-blue-600"
                  to="/my-hotels"
                >
                  My Hotels
                </Link>
                <SignOutButton />
              </>
            ) : (
              <Link
                to="/sign-in"
                className="flex items-center px-6 py-3 font-medium text-blue-600 transition duration-300 ease-in-out transform bg-white rounded-lg shadow-md hover:bg-blue-100 hover:scale-105 hover:shadow-lg"
              >
                Sign In
              </Link>
            )}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
