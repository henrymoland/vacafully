import Image from "next/image";
import logo from "../assets/logo.svg";
import { SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Logo */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-12 cursor-pointer my-auto"
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none"
          type="text"
          placeholder="Where are you going?"
        />
        <SearchIcon
          onClick={search}
          className="hidden md:inline-flex h-8 bg-yellow-500 text-white rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>

      {/* Authentication Links */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="cursor-pointer">Login</p>
        <p className="rounded-full py-2 px-4 bg-yellow-500 text-white shadow-sm cursor-pointer">
          Sign up
        </p>
      </div>
    </header>
  );
}

export default Header;
