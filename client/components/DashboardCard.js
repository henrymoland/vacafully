import Image from "next/image";

function DashboardCard() {
  return (
    <div className="flex justify-between mt-4 py-4 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="flex">
        <div className="relative h-24 w-40 md:h-26 md:w-32 flex-shrink-0">
          <Image
            src="https://i.ibb.co/n7YfxCY/ralph-ravi-kayden-8-GWLbgk-CK48.jpg"
            layout="fill"
            object-fit="cover"
            alt="Property image"
            className="rounded-2xl"
          />
        </div>

        <div className="flex flex-col flex-grow pl-5">
          <h4 className="text-md md:text-lg xl:text-xl font-semibold">
            Brand New Home With View
          </h4>
          <p className="text-sm leading-3">
            3434 Santa Ana Way <span>San Francisco, California</span>
          </p>
          <p className="text-sm font-semibold">$ 350 / night</p>
        </div>
      </div>

      <div className="flex justify-items-center items-center">
        <div className="rounded bg-gray-300 px-6 py-4 text-white cursor-pointer hover:opacity-80">
          Edit
        </div>
        <div className="rounded bg-yellow-400 px-6 py-4 text-white ml-6 cursor-pointer hover:opacity-80">
          Delete
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
