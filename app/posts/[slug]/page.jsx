import PostContent from '@/src/PagesComponents/PostDetail/PostContent';
import { getPostData } from '@/src/helpers/posts-utils';
import { notFound } from 'next/navigation';

const PostDetailPage = async ({ params }) => {
  const { slug } = params;

  const postData = await getPostData(slug);

  if (!postData) {
    return notFound();
  }

  return <PostContent post={postData} />;
};

export default PostDetailPage;
