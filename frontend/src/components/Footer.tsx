const Footer = () => {
  return (
    <div className="py-10 bg-blue-800">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <span className="mb-4 text-3xl font-bold tracking-tight text-white md:mb-0">
          MernHolidays.com
        </span>
        <span className="flex gap-4 font-bold tracking-tight text-white">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
    </div>
  );
};
export default Footer;
