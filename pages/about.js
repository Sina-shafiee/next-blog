import Head from 'next/head';

const AboutPage = () => {
  return (
    <div className='mx-auto container p-8'>
      <Head>
        <title>About - My Blog</title>
      </Head>
      <h2 className='text-xl'>About this blog</h2>
      <p className='mt-4'>
        its static blog web app created with next js under the hood convert
        markdown files to html and create static pages
      </p>
    </div>
  );
};

export default AboutPage;
