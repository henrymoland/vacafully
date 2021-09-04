import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
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

function InfoCard({ img, title, guests, beds, bath, location, price }) {
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg">
      {/* LEFT */}
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          object-fit="cover"
          alt="Property image"
          className="rounded-md"
        />
      </div>

      {/* RIGHT*/}
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p className="text-sm">{location}</p>
          <HeartIcon className="h-7 cursor-pointer text-gray-500 hover:text-yellow-500" />
        </div>

        <h4 className="text-md md:text-lg xl:text-xl font-semibold">{title}</h4>

        <div className="border-b w-10 pt-2" />

        <div className="flex-grow">
          <p className="text-sm pt-2 text-gray-500">
            <FontAwesomeIcon icon={faUsers} className="mr-1" />
            {guests} guests -{" "}
            <FontAwesomeIcon icon={faDoorClosed} className="mr-1" />
            {beds} bedrooms - <FontAwesomeIcon icon={faBed} className="mr-1" />
            {beds} beds- <FontAwesomeIcon icon={faBath} className="mr-1" />
            {bath} bath
          </p>
          <p className="text-gray-500 text-sm pt-2">
            <FontAwesomeIcon icon={faWifi} className="mr-1" /> Wifi -{" "}
            <FontAwesomeIcon icon={faParking} className="mr-1" /> Free parking -{" "}
            <FontAwesomeIcon icon={faWind} className="mr-1" /> Air conditioning
            - <FontAwesomeIcon icon={faUtensils} className="mr-1" /> Kitchen
          </p>
        </div>

        {/* BOTTOM*/}
        <div className="flex justify-between">
          <p className="flex items-center text-gray-500">
            <StarIcon className="h-5 text-yellow-500" /> 4.75
          </p>

          <p className="text-2xl font-semibold text-yellow-500">
            ${price}
            <span className="text-lg font-normal text-gray-900"> / night</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
