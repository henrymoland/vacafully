import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        className="mix-blend-overlay"
        src="https://i.ibb.co/n7YfxCY/ralph-ravi-kayden-8-GWLbgk-CK48.jpg"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white text-bold shadow-sm">
          Your Perfect Getaway Just a Click Away
        </p>
        <button className="bg-white px-10 py-4 rounded-full shadow-md text-yellow-500 font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          View Stays
        </button>
      </div>
    </div>
  );
};

export default Banner;
