import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";

interface Props {
  children: React.ReactNode;
}

import bgImage from "../assets/herobg.jpg";
const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Background wrapper for Header & Hero */}
      <div
        className="relative text-white bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10">
          {/* Header and Hero sections */}
          <Header />
          <Hero />
        </div>
      </div>

      {/* Content below the header and hero */}
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <SearchBar />
      </div>

      <div className="container flex-1 px-4 py-10 mx-auto sm:px-6 lg:px-8">
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
