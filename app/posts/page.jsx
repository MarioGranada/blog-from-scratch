import AllPosts from '@/src/PagesComponents/AllPosts';
import { getAllPosts } from '@/src/helpers/posts-utils';

export const generateMetadata = async () => {
  return {
    title: 'All posts',
    description: 'A list of all programming related tutorials',
  };
};

const AllPostsPage = async () => {
  const allPosts = getAllPosts();
  return <AllPosts posts={allPosts} />;
};

export default AllPostsPage;
