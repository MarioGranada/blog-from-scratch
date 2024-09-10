import PostsGrid from '@/src/components/PostsGrid';
import classes from './AllPosts.module.css';

const AllPosts = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h1>All posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
