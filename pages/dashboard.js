import ConnectDashboard from "../components/ConnectDashboard";
import DashboardCard from "../components/DashboardCard";
import DashboardHeader from "../components/DashboardHeader";

function dashboard() {
  return (
    <div>
      <DashboardHeader />
      <ConnectDashboard />
      <main className="max-w-7xl mx-auto px-8 sm:px-16 mt-4">
        <h1 className="mt-12 text-2xl font-bold text-gray-900">
          Your Listings
        </h1>
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </main>
    </div>
  );
}

export default dashboard;
