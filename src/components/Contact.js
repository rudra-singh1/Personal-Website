import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <img
            src="https://foster.uw.edu/wp-content/uploads/2021/08/W-on-campus.png"
            alt="Location"
            style={{ width: '100%', height: '100%', display: 'block', margin: 'auto' }}
          />
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5">
            For any inquiries, please contact me using methods below:
          </p>
          <div className="relative mb-4">
            <b>Name</b>
            <br />
            Rudra Prakash Singh
          </div>
          <div className="relative mb-4">
            <b>Linkedin</b>
            <br />
            <a href="https://www.linkedin.com/in/rudra-p-singh/" className="text-indigo-400">https://www.linkedin.com/in/rudra-p-singh/</a>
          </div>
        </div>
      </div>
    </section>
  );
}
