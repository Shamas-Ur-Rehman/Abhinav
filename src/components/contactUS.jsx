import React, { useRef } from 'react'; // Make sure to import useRef
import Navbar from './Navbar';

const ContactComponent = () => {
  const contactRef = useRef(null);

  const handleSayHello = () => {
    window.location.href = 'mailto:vinodabhinav110@gmail.com';
  };

  return (
    <>
      <Navbar contactRef={contactRef} />
      <div ref={contactRef} className="bg-white text-black min-h-screen flex flex-col justify-center items-center p-4">
        <div className="text-center max-w-2xl">
          <h2 className="text-black text-xl mb-2"><span className='font-bold text-[#032388]'>04. </span> What's Next?</h2>
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-gray-400 mb-8">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <button 
            onClick={handleSayHello}
            className="border border-[#032388] text-[#032388] px-6 py-3 rounded hover:bg-[#032388] hover:text-white transition duration-300"


          >
            Say Hello
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactComponent;
