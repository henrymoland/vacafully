import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

function TestimonialCard({
  img,
  testimonial,
  guestImg,
  guestName,
  guestLocation,
}) {
  return (
    <div className="mt-5 md:w-[370px]">
      {/* Top */}
      <div className="relative h-80 w-full md:h-64">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          alt="Property image"
        />
      </div>

      {/* Middle */}
      <div className="flex mt-3">
        {[...Array(5)].map((star) => {
          return <StarIcon className="text-blue-400 h-6" />;
        })}
      </div>

      <p className="mt-2 leading-relaxed">{testimonial}</p>

      {/* Bottom */}
      <div className="flex mt-4">
        <div className="relative h-14 w-14 mr-4">
          <Image src={guestImg} layout="fill" className="rounded-full" />
        </div>

        <div>
          <p className="font-bold">{guestName}</p>
          <p className="text-gray-500">{guestLocation}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
