import { useState, useEffect } from 'react';
import Head from 'next/head';
import LoadingScreen from '../components/LoadingScreen';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>AmalaSpots</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      {loading ? <LoadingScreen /> : <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
