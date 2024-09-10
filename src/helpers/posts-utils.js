import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/shared/posts');

export const getPostData = (fileName) => {
  const postSlug = fileName.replace(/\.md$/, ''); // Removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug: postSlug,
    ...data,
    content,
  };
};

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDirectory);
  const allPostsData = postFiles.map((fileName) => getPostData(fileName));
  const sortedPosts = allPostsData.sort((a, b) => (a.date > b.date ? -1 : 1));
  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.isFeatured);
};
