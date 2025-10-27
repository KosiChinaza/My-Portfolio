import React, { useRef,  useState } from 'react'
import emailjs from '@emailjs/browser'
import Footer from '../component/Reuseable/Footer';


const ContactSection = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      "service_vbpxqoh",
      "template_xs62hsu",
      form.current,
      "8EsfX3CZOQfyqVm9W"
    )
    .then(
      () => {
        setIsSent(true);
        e.target.reset();
      },
      (error) => {
        console.log("Failed...", error.text);
        
      }
    );
  };
  return (
   <div>
      <div className="relative flex flex-col md:flex-row h-screen text-white">
    
        <div className="flex-1 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.4)_0%,_black_80%)] flex items-center justify-center">
        <h1 className="text-purple-400 italic text-5xl font-bold">KOSY</h1>
      </div>

   
      <div className="flex-1 bg-black flex flex-col items-center justify-center p-8">
        <h2 className="text-3xl font-semibold mb-6 text-purple-400">Contact Me</h2>

        <form ref={form} onSubmit={sendEmail} className="w-full max-w-sm space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-500 h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full text-purple-100 py-2 rounded-md bg-purple-500 hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>

        {isSent && (
          <p className="text-green-400 mt-4">✅ Message sent successfully!</p>
        )}

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>📧 ugwukosisochukwu135@gmail.com</p>
          <p className="italic mt-4">
            Thank you — I hope to hear from you soon!
          </p>
        </div>
      </div>
     </div>
     <Footer/>
    </div>
  );
};
export default ContactSection;


