import AllPosts from '@/src/PagesComponents/AllPosts';
import { getAllPosts } from '@/src/helpers/posts-utils';

const AllPostsPage = async () => {
  const allPosts = getAllPosts();
  return <AllPosts posts={allPosts} />;
};

export default AllPostsPage;
