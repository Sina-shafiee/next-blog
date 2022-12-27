import Head from 'next/head';
import { getPost, getSlugs } from '../../lib/posts';

export const getStaticPaths = async () => {
  // getting post names
  const slugs = await getSlugs();

  // format for paths
  const paths = slugs.map((path) => {
    return { params: { slug: path } };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  // based on file name fetching the data from file
  const post = await getPost(slug);
  return {
    props: { post }
  };
};

const FirstPost = ({ post: { title, body, date } }) => {
  // its just for avoiding warnings
  const postTitle = title;
  const pageTitle = `${postTitle} - My Blog`;

  return (
    <div className='container p-8 mx-auto'>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <section className='flex justify-between items-center'>
        <h2 className='text-xl uppercase font-medium'>{title}</h2>
        <p>{date}</p>
      </section>
      <article className='mt-6' dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};

export default FirstPost;
