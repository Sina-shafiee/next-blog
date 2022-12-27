import Head from 'next/head';
import Link from 'next/link';
import { getPosts } from '../lib/posts';

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: { posts }
  };
};

const HomePage = ({ posts }) => {
  return (
    <div className='container p-8'>
      <Head>
        <title>My Blog</title>
      </Head>
      <h2 className='text-xl'>Recent Posts List</h2>

      <ul className='mt-4 flex flex-col gap-2 list-disc pl-8'>
        {posts.map(({ title, url }) => {
          return (
            <li key={url} className='hover:underline'>
              <Link href={`posts/${url}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
