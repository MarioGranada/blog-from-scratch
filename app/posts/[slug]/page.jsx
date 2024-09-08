const SinglePostPage = async ({ params }) => {
  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  );
};

export default SinglePostPage;
