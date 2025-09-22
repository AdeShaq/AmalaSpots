import Link from 'next/link';

const DashboardNavbar = () => {
  return (
    <nav className="bg-[#1a1a1a] p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          <span>📍</span> AmalaMaps
        </Link>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
