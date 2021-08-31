import Image from "next/image";
import logo from "../assets/vacafully_logo.svg";
import { SearchIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Logo */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Search Input */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none"
          type="text"
          placeholder="Where are you going?"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-blue-500 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Authentication Links */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="cursor-pointer">Login</p>
        <p className="rounded-full py-2 px-4 bg-blue-500 text-white shadow-sm cursor-pointer">
          Sign up
        </p>
      </div>
    </header>
  );
}

export default Header;
