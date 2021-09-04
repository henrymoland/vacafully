import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

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
          <HeartIcon className="h-7 cursor-pointer text-gray-500 hover:text-red-300" />
        </div>

        <h4 className="text-md md:text-lg xl:text-xl font-semibold">{title}</h4>

        <div className="border-b w-10 pt-2" />

        <p className="text-sm pt-2 text-gray-500 flex-grow">
          {guests} guests - {beds} beds - {bath} bath - Wifi - Free parking -
          Washing Maching
        </p>

        {/* BOTTOM*/}
        <div className="flex justify-between">
          <p className="flex items-center text-gray-500">
            <StarIcon className="h-5 text-yellow-500" /> 4.75
          </p>

          <p className="text-2xl font-semibold text-blue-500">
            ${price}
            <span className="text-lg font-normal">/ night</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
