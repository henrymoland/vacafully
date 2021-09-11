import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <h3 className="text-xl font-semibold mb-3 text-gray-500">{title}</h3>

      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
    </div>
  );
}

export default MediumCard;
