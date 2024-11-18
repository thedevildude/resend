import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleBuyMeACoffee = () => {
    toast.info("Thanks for the coffee! It keeps our time machine running! ☕", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <header className="bg-purple-700/15 text-white py-4 shadow-lg mb-2 md:mb-0">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link
          to="/"
          className="hover:text-yellow-300 transition-colors duration-200"
        >
          <h1 className="text-2xl font-bold">💌 One Last Message</h1>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white hover:text-yellow-300 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute md:static items-center top-16 left-0 w-full md:w-auto md:flex md:space-x-6 bg-purple-600 md:bg-transparent shadow-md md:shadow-none z-50`}
        >
          <a
            href="https://www.yourportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block md:inline-block px-4 py-2 md:py-0 hover:text-yellow-300 transition-colors duration-200"
          >
            Portfolio
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="block md:inline-block px-4 py-2 md:py-0 hover:text-yellow-300 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
            className="block md:inline-block px-4 py-2 md:py-0 hover:text-yellow-300 transition-colors duration-200"
          >
            Twitter
          </a>
        <a
          href="https://www.buymeacoffee.com/devdeep"
          target="__blank"
          onClick={handleBuyMeACoffee}
        >
          <img
            src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=devdeep&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
            alt="Buy Me a Coffee"
          />
        </a>
        </nav>
      </div>
      <ToastContainer />
    </header>
  );
};

export default Header;
