import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Coffee, Github } from "lucide-react";
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

  const socialLinks = [
    { 
      name: "Portfolio", 
      href: "#", 
      icon: <Coffee className="inline-block mr-2 w-5 h-5" /> 
    },
    { 
      name: "GitHub", 
      href: "https://github.com/thedevildude", 
      icon: <Github className="inline-block mr-2 w-5 h-5" /> 
    },
    { 
      name: "Twitter", 
      href: "https://www.x.com/the_devil_dude", 
      icon: <X className="inline-block mr-2 w-5 h-5" /> 
    }
  ];

  return (
    <header className="bg-purple-700/15 text-white py-4 shadow-lg mb-2 md:mb-0">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center hover:text-yellow-300 transition-colors duration-200"
        >
          <span className="text-2xl font-bold">💌 One Last Message</span>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white hover:text-yellow-300 focus:outline-none z-[200]"
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
          } absolute md:static top-0 left-0 w-full md:w-auto md:flex md:space-x-6 bg-purple-600 md:bg-transparent shadow-md md:shadow-none z-50 transition-all duration-300 ease-in-out`}
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center flex-col group md:flex px-4 py-2 md:py-0 hover:text-yellow-300 transition-colors duration-200"
            >
              {link.icon}
              <span className="group-hover:underline">{link.name}</span>
            </a>
          ))}

          {/* Buy Me a Coffee Button */}
          <a
            href="https://www.buymeacoffee.com/devdeep"
            onClick={handleBuyMeACoffee}
            className=" hover:scale-105 transition-transform"
          >
            <img 
              src="https://img.buymeacoffee.com/button-api/?text=Buy me a beer&emoji=🍺&slug=devdeep&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" 
              alt="Buy me a beer"
              className="h-10"
            />
          </a>
        </nav>
      </div>
      <ToastContainer />
    </header>
  );
};

export default Header;