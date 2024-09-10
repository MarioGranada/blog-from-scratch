import PostContent from '@/src/PagesComponents/PostDetail/PostContent';
import { getPostData } from '@/src/helpers/posts-utils';
import { notFound } from 'next/navigation';

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const postData = await getPostData(slug);

  if (!postData) {
    return {
      title: 'Post not found :(',
      description: 'Post details :(',
    };
  }

  return {
    title: postData.title,
    description: postData.excerpt,
  };
};

const PostDetailPage = async ({ params }) => {
  const { slug } = params;

  const postData = await getPostData(slug);

  if (!postData) {
    return notFound();
  }

  return <PostContent post={postData} />;
};

export default PostDetailPage;
