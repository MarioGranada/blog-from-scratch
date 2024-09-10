import FeaturedPosts from '@/src/components/FeaturedPosts';
import Hero from '../src/components/Hero';
import DUMMY_POSTS from '@/src/shared/mockData/dummy_posts';
import { getFeaturedPosts } from '@/src/helpers/posts-utils';

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
