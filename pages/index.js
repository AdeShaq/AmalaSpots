import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-light-beige min-h-screen flex flex-col">
      <Head>
        <title>AmalaMaps - Find Your Perfect Bowl</title>
        <meta name="description" content="Crowdsourced mapping of the world's best Amala spots." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-dark-gray leading-tight">
              Find Your Perfect Bowl.
            </h1>
            <p className="mt-4 text-lg text-dark-gray">
              Join a global community mapping the world's best Amala spots. Crowdsourced and verified by locals.
            </p>
            <div className="mt-8 flex space-x-4">
              <Link href="/find" className="bg-primary text-white px-6 py-3 rounded-md text-lg">
                Find Amala
              </Link>
              <Link href="/register" className="bg-white text-primary border border-primary px-6 py-3 rounded-md text-lg">
                Register Your Spot
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-80 h-[550px] bg-teal rounded-3xl flex justify-center items-center">
              <Image
                src="https://images.unsplash.com/photo-1634403665481-74948d815f03?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmUlMjBtb2NrdXB8ZW58MHx8MHx8fDA%3D"
                alt="Phone Mockup"
                width={288}
                height={500}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
