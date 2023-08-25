import { useState, useEffect } from 'react';
import styles from '../style';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    );
    setData({ name: '', email: '', phone: '', message: '' });
    alert('Your message has been sent!');
  };

  return (
    <section id="contact" className="sm:py-12 py-6">
      <h1 className={`${styles.heading2} text-center w-full`}> Contact Us</h1>
      <form
        method="post"
        onSubmit={handleSubmit}
        className="flex justify-center items-center sm:my-10 my-6 sm:px-16 px-6 sm:py-12 py-4 flex-col bg-black-gradient-2 rounded-[20px] box-shadow"
      >
        <input
          required
          type="text"
          name="name"
          id=""
          onChange={handleChange}
          value={data.name}
          placeholder="Name"
        />
        <input
          required
          type="email"
          name="email"
          id=""
          onChange={handleChange}
          value={data.email}
          placeholder="Email"
        />
        <input
          type="text"
          name="phone"
          id=""
          onChange={handleChange}
          value={data.phone}
          placeholder="Phone Number"
        />
        <textarea
          required
          className="h-[6000px]"
          name="message"
          id=""
          onChange={handleChange}
          value={data.message}
          cols="30"
          rows="10"
          placeholder="Type your inquiry or request a quote here..."
        />
        <button
          type="submit"
          className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-orange-gradient rounded-[10px] outline-none undefined"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
