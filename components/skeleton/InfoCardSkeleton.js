function InfoCardSkelton() {
  return (
    <div className="flex py-7 px-2 border-b animate-pulse">
      {/* LEFT */}
      <div className="bg-gray-100 rounded-xl h-24 w-40 md:h-52 md:w-80 flex-shrink-0"></div>

      {/* RIGHT*/}
      <div className="flex flex-col flex-grow pl-5">
        <h4 className="bg-gray-100 w-3/4 rounded h- md:h-6 mb-3 md:mb-"></h4>

        <div className="flex-grow">
          <p className="h-4 md:h-5 bg-gray-100 rounded mb-3"></p>
          <p className="h-4 md:h-5 bg-gray-100 rounded w-5/6"></p>
        </div>

        {/* BOTTOM*/}
        <div className="">
          <p className="h-4 md:h-5 bg-gray-100 rounded"></p>
        </div>
      </div>
    </div>
  );
}

export default InfoCardSkeleton;
