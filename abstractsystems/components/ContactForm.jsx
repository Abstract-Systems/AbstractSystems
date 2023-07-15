"use client"

import React , {useRef} from 'react';
import emailjs from 'emailjs-com';
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const ContactForm = () => {
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);

  const Modal = ({ visible }) => {
    return (
      <div
        className={`fixed z-10 inset-0 overflow-y-auto ${visible ? 'block' : 'hidden'}`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white dark:bg-gray-800 w-full max-w-md mx-auto rounded shadow-lg p-6">
            <div className="text-center">
              <h2 className="text-xl font-bold mb-4">Email sent successfully!</h2>
              <p>Your message has been sent.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_spea5u8', 'template_qajnkmi', form.current, 'G-LXaTc34GTqTcBMY')
      .then(
        (result) => {
          console.log(result.text);
          // Reset form
          setEmail('');
          setSubject('');
          setMessage('');
          // Display Modal
          setModalVisible(true);
  
          // Hide Modal and reset form after 1 second
          setTimeout(() => {
            setModalVisible(false);
          }, 1000);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("There's Been an Error! Please Try Again.");
        }
      );
  };

  



  return (
    <section className="bg-primary m-20">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <div className="flex items-center mb-4 flex-col ">
          <h2 className="text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <div className="flex ml-4 py-10">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <FaInstagram className='mx-10' size={50} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 ml-2"
            >
              <FaGithub className='mx-10' size={50} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 ml-2"
            >
              <FaLinkedin className='mx-10' size={50} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 ml-2"
            >
              <FaFacebook className='mx-10' size={50} />
            </a>
          </div>
          <Modal visible={modalVisible} />
        </div>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl font-barlow-condensed">
          Reach us on any of the following Social Media. Or Maybe leave a message down there.
        </p>
        <form action="#" ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input name='from_email' onChange={() => {
              setEmail(event.target.value);
            }} type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="info.abstractsystems.com" required />
          </div>
          <div>
            <label htmlFor="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
            <input name='subject' onChange={() => {
              setSubject(event.target.value);
            }} type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div class="sm:col-span-2">
            <label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
            <textarea name='message' onChange={() => {
              setMessage(event.target.value);
            }} id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>

          <button
            type='' value='send'
            className="py-3 bg-slate-700 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-slate-800 transition ease-in-out duration-200 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
