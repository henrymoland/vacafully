import Header from "../components/Header";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faParking } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faBath } from "@fortawesome/free-solid-svg-icons";
import { faDoorClosed } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { DatePicker } from "antd";
import { useState } from "react";

function Listing() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  return (
    <div>
      <Header />

      <main className="max-w-7xl mx-auto px-8 sm:px-16 mt-4">
        <section>
          {/* TOP */}
          <div className="mb-4">
            <h1 className="text-2xl text-gray-900">
              Civic Center Views from a Contemporary City Pad and Parking
            </h1>

            <div className="flex items-center justify-items-center">
              <p className="flex items-center text-gray-500 mr-2">
                <StarIcon className="h-5 text-yellow-500" /> 4.75
              </p>

              <LocationMarkerIcon className="h-4 mr-2 text-gray-500" />
              <span className="text-gray-900">
                San Francisco, California, United States
              </span>
            </div>
          </div>

          <div className="md:flex">
            {/* MID */}
            <div className="relative h-[350px] w-full md:h-[450px] md:w-[500px]">
              <Image
                src="https://i.ibb.co/R09cTxn/webaliser-TPTXZd9m-Oo-unsplash.jpg"
                layout="fill"
                objectFit="cover"
                alt="Listing photo"
                className="rounded-md"
              />
            </div>

            <form className="w-full md:w-[350px] sm:ml-2 md:ml-6 md:mt-0 lg:w-[400px] lg:ml-20 flex flex-col items-center border rounded mt-8 mb-10">
              <h1 className="text-[28px] font-bold mt-6 mb-5">
                $325 <span className="font-normal">/ night</span>
              </h1>

              {/* DATE PICKER CHECK IN */}
              <p className="text-sm font-bold text-gray-900">Check In</p>

              <DatePicker
                placeholder="select date"
                className="form-control m-2 border rounded py-2 px-4 text-gray-500"
                onChange={(date, dateString) => console.log(date, dateString)}
              />

              {/* DATE PICKER CHECK OUT */}
              <p className="text-sm font-bold text-gray-900 mt-4">Check Out</p>

              <DatePicker
                placeholder="Select date"
                className="form-control m-2 border rounded py-2 px-4 text-gray-500"
                onChange={(date, dateString) => setFromDate(dateString)}
              />

              <button className="bg-yellow-500 font-bold text-white py-3 px-8 rounded-full mt-6 mb-6">
                {" "}
                Book Now
              </button>
            </form>
          </div>
        </section>

        {/* BOTTOM */}
        <section>
          <div className="mt-5 border-b pb-6">
            <h1 className="text-2xl text-gray-900 font-semibold">
              Rental unit hosted by Sarah Lee
            </h1>
            <p className="text-sm pt-2 text-gray-500">
              <FontAwesomeIcon icon={faUsers} className="mr-1" />
              16 guests -{" "}
              <FontAwesomeIcon icon={faDoorClosed} className="mr-1" />5 bedrooms
              - <FontAwesomeIcon icon={faBed} className="mr-1" />
              6 beds- <FontAwesomeIcon icon={faBath} className="mr-1" />3 bath
            </p>
          </div>

          <div className="mt-8 flex-grow border-b pb-6">
            <h1 className="text-xl font-semibold text-gray-900 mb-4">
              What this place offers
            </h1>

            <div className="grid sm:grid-cols-2 sm:w-[500px]">
              <div className="text-xl pt-2 text-gray-500">
                <FontAwesomeIcon icon={faUtensils} className="mr-4" />
                <span className="text-lg">Kitchen</span>
              </div>

              <div className="text-xl pt-3 text-gray-500">
                <FontAwesomeIcon icon={faParking} className="mr-4" />
                <span className="text-lg">Free Parking</span>
              </div>

              <div className="text-xl pt-3 text-gray-500">
                <FontAwesomeIcon icon={faWifi} className="mr-4" />
                <span className="text-lg">Wifi</span>
              </div>

              <div className="text-xl pt-3 text-gray-500">
                <FontAwesomeIcon icon={faWind} className="mr-4" />
                <span className="text-lg">Air conditioning</span>
              </div>
              <div className="text-xl pt-3 text-gray-500">
                <FontAwesomeIcon icon={faTv} className="mr-4" />
                <span className="text-lg">TV</span>
              </div>

              <div className="text-xl pt-3 text-gray-500">
                <FontAwesomeIcon icon={faPaw} className="mr-4" />
                <span className="text-lg">Pets allowed</span>
              </div>
            </div>
          </div>

          <div className="flex-grow pb-10">
            <h1 className="text-xl font-semibold text-gray-900 mb-4 mt-8">
              About this space
            </h1>

            <p className="text-gray-900">
              Located a half mile from the heart of Downtown this property
              offers convenience and flexibility to all of Silicon Valley.
              Efficiently designed, modern and spacious, this junior one bedroom
              has an open kitchen and beautiful sliding glass doors. Walk in
              bedroom closet as well as coat closet/pantry. In unit washer and
              dryer. Pets allowed. One reserved parking space conveniently
              located just below the home in the gated underground garage is
              included.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Listing;
