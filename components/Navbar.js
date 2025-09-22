import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-light-beige p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-dark-gray">
          <span>📍</span> AmalaMaps
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/signin" className="text-dark-gray">
            Sign In
          </Link>
          <Link href="/start" className="bg-primary text-white px-4 py-2 rounded-md">
            Start Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
