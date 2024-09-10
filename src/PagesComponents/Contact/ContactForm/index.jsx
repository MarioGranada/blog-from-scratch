'use client';

import { useEffect, useRef, useState } from 'react';
import classes from './ContactForm.module.css';
import sendContactData from './helpers/sentContactData';
import Notification from '@/src/components/Notification';
const ContactForm = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [requestStatus, setRequestStatus] = useState(false);
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const commentInputRef = useRef();

  useEffect(() => {
    if (requestStatus !== 'pending') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendMessageHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredComment = commentInputRef.current.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() === '' ||
      !enteredEmail.includes('@') ||
      !enteredName ||
      enteredName.trim() === '' ||
      !enteredComment ||
      enteredComment.trim() === ''
    ) {
      setIsInvalid(true);
      return;
    }

    const enteredData = {
      email: enteredEmail,
      name: enteredName,
      message: enteredComment,
    };

    console.log('Entered data: ', { enteredData });

    setRequestStatus('pending');
    try {
      await sendContactData({ ...enteredData });
      setRequestStatus('success');
      setIsInvalid(false);
      emailInputRef.current.value = '';
      nameInputRef.current.value = '';
      commentInputRef.current.value = '';
    } catch (error) {
      console.log(error || 'Something went wrong');
      setRequestStatus('error');
    }
  };

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: 'Something went wrong!',
    };
  }

  return (
    <>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input ref={emailInputRef} type="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input ref={nameInputRef} type="text" id="name" required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea ref={commentInputRef} id="message" rows="5"></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && <Notification {...notification} />}
    </>
  );
};

export default ContactForm;
