import { readFile, readdir } from 'fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';

export const getPost = async (slug) => {
  // reading the mark down file
  const source = await readFile(`content/posts/${slug}.md`, 'utf8');
  // extracting title and date from markdown file with help of fray matter
  const {
    content,
    data: { title, date }
  } = matter(source);
  // converting the body of mark down to html
  const body = marked.parse(content);

  return { title, date, body };
};

export const getSlugs = async () => {
  const suffix = '.md';
  // reading file list
  const files = await readdir('content/posts/');

  // filtering only .md files and removing the .md extension
  const slugs = files
    .filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length));

  return slugs;
};

export const getPosts = async () => {
  const slugs = await getSlugs();
  const data = [];
  for (const slug of slugs) {
    const post = await getPost(slug);
    delete post.date;
    delete post.body;

    post.url = slug;
    data.push(post);
  }

  return data;
};
