import ContactForm from './ContactForm';
import classes from './contact.module.css';

const Contact = async () => {
  return (
    <section className={classes.contact}>
      <h1> How can I help you? </h1>
      <ContactForm />
    </section>
  );
};

export default Contact;
