import Contact from '@/src/PagesComponents/Contact';

export const generateMetadata = async () => {
  return {
    title: 'Contact me',
    description: 'Send me a message',
  };
};

const ContactPage = async () => {
  return <Contact />;
};

export default ContactPage;
