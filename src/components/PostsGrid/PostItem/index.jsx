import Link from 'next/link';
import Image from 'next/image';
import classes from './PostItem.module.css';

const PostItem = ({ post }) => {
  const { title, image, excertp, date, slug } = post;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} fill sizes="80vw" />
        </div>
        <div className={classes.content}>
          <h3>{title} </h3>
          <time>{formattedDate} </time>
          <p>{excertp}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
