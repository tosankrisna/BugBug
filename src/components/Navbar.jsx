import { useState } from "react";
import bugBugLogo from "../assets/logo.svg";
import arrowDown from "../assets/arrow-down.svg";
import menu from "../assets/menu.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-10 px-5 sm:px-10 xl:px-24 z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full justify-between h-50 py-2 2xl:px-10 xl:py-7 px-5 lg:px-5 lg:py-10 lg:gap-5 bg-green rounded-2xl">
        <div className="flex align-middle items-center xl:col-span-2">
          <img src={bugBugLogo} alt="Bug Bug Logo" className="w-36 xl:w-52" />
        </div>
        <ul className="hidden lg:col-span-5 xl:col-span-4 justify-items-center lg:grid lg:grid-cols-6 xl:gap-4 2xl:gap-0 align-middle items-center">
          <li className="cursor-pointer uppercase text-primary text-xs 2xl:text-sm tracking-widest">
            About Us
          </li>
          <li className="cursor-pointer flex gap-1 uppercase text-primary text-xs 2xl:text-sm tracking-widest">
            Solutions
            <img src={arrowDown} />
          </li>
          <li className="cursor-pointer col-span-2 uppercase text-primary text-xs 2xl:text-sm tracking-widest">
            Grants & Collaborations
          </li>
          <li className="cursor-pointer uppercase text-primary text-xs 2xl:text-sm tracking-widest">
            In The News
          </li>
          <li>
            <button className="cursor-pointer bg-primary hover:bg-opacity-25 border-1 hover:border-white hover:text-white text-green uppercase tracking-widest rounded-lg py-1 px-4 lg:px-3 lg:py-4 xl:py-4 xl:px-3 text-xs 2xl:text-sm">
              Contact Us
            </button>
          </li>
        </ul>

        <div className="md:col-span-3 justify-self-end lg:hidden">
          <button onClick={toggleMenu}>
            <img
              src={menu}
              alt="Menu"
              className="w-14 sm:w-20 text-lightGreen"
            />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`absolute inset-x-0 mx-5 sm:mx-10 mt-5 bg-green rounded-2xl shadow-lg z-20 transform transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-5 opacity-0 invisible"
          }`}
        >
          <ul className="p-10 flex flex-col gap-10 align-middle items-center text-center">
            <li className="uppercase text-primary text-sm tracking-widest">
              About Us
            </li>
            <li className="flex gap-2 uppercase text-primary text-sm tracking-widest">
              Solutions
              <img src={arrowDown} />
            </li>
            <li className="uppercase text-primary text-sm tracking-widest">
              Grants & Collaborations
            </li>
            <li className="uppercase text-primary text-sm tracking-widest">
              In The News
            </li>
            <li>
              <button className="bg-primary text-sm hover:bg-opacity-25 border-1 hover:border-white hover:text-white text-green uppercase tracking-widest rounded-lg py-5 px-6">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
