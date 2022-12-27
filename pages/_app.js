import Head from 'next/head';
import Link from 'next/link';
import NextNProgress from 'nextjs-progressbar';

import Navbar from '../components/Navbar';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/icons/favicon.ico' />
      </Head>
      <header className='flex justify-between items-center p-8 container mx-auto'>
        <Link href='/'>
          <img
            className='h-14'
            src='https://img.icons8.com/dusk/64/null/google-blog-search.png'
          />
        </Link>
        <Navbar />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <NextNProgress options={{ easing: 'ease', speed: 400 }} />
    </>
  );
};

export default App;
