function ConnectDashboard() {
  return (
    <div className="flex justify-between pt-12 px-60 bg-gray-200">
      <div>
        <h1 className="text-[40px] font-bold">
          Welcome <span>Henry!</span>
        </h1>
        <p className="text-xl leading-3">
          Get excited to welcome guest to your neighborhood.
        </p>
      </div>

      <div>
        <p className="text-lg mb-0 font-semibold">Pending Balance</p>
        <h1 className="text-[80px] font-bold text-yellow-500">$450.00</h1>
      </div>
    </div>
  );
}

export default ConnectDashboard;
