import Head from 'next/head';
import DashboardNavbar from '../components/DashboardNavbar';

const Dashboard = () => {
  return (
    <div className="bg-[#1a1a1a] min-h-screen text-white">
      <Head>
        <title>Dashboard - AmalaMaps</title>
      </Head>

      <DashboardNavbar />

      <main className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Good afternoon <span>✨</span>
        </h1>
        <div className="mt-8 mx-auto max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Tell me about a spot, or ask me to find one for you"
              className="w-full bg-[#333333] text-white rounded-full py-4 px-6 focus:outline-none"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">
              🎤
            </button>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-[#333333] text-white px-6 py-3 rounded-full">
            <span>🗺️</span> Find spots near me
          </button>
          <button className="bg-[#333333] text-white px-6 py-3 rounded-full">
            <span>➕</span> Submit a new spot
          </button>
          <button className="bg-[#333333] text-white px-6 py-3 rounded-full">
            <span>✔️</span> Verify a spot
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
