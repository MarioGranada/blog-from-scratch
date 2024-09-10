import FeaturedPosts from '@/src/components/FeaturedPosts';
import Hero from '../src/components/Hero';
import { getFeaturedPosts } from '@/src/helpers/posts-utils';

export const generateMetadata = async () => {
  return {
    title: "Mario's Web Development Blog",
    description: "Hi! this is Mario's Web Development Blog",
  };
};

const HomePage = async () => {
  const featuredPosts = getFeaturedPosts();

  return (
    <>
      <Hero />
      {/* <FeaturedPosts posts={DUMMY_POSTS} /> */}
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
};

export default HomePage;
