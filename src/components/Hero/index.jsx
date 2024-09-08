import Image from 'next/image';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.webp"
          alt="some alt text here"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Oe</h1>
      <p>this is a test paragraph</p>
    </section>
  );
};

export default Hero;
