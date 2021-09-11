import Image from "next/image";
import logo from "../assets/logo.svg";
import { SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";

function DashboardHeader() {
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
      <div className="flex items-center justify-between text-gray-500 text-sm">
        <p className="cursor-pointer" onClick={() => router.push("/login")}>
          Your listings
        </p>
        <p
          className="flex space-x-4 items-center justify-end text-gray-500"
          onClick={() => router.push("/register")}
        >
          Your bookings
        </p>
        <p
          className="flex space-x-4 items-center justify-end text-gray-500"
          onClick={() => router.push("/register")}
        >
          Payout settings
        </p>
      </div>

      {/* Authentication Links */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="cursor-pointer" onClick={() => router.push("/login")}>
          Logout
        </p>
        <p
          className="rounded-full h-12 w-12 bg-yellow-500 text-white text-2xl font-bold shadow-sm cursor-pointer flex justify-center items-center"
          onClick={() => router.push("/register")}
        >
          H
        </p>
      </div>
    </header>
  );
}

export default DashboardHeader;
