import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  // Filter out Ruben Alvarez testimonial
  const filteredTestimonials = testimonials.filter(
    (testimonial) => testimonial.name !== "Ruben Alvarez"
  );

  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          About Me
        </h1>
        <div className="flex flex-wrap m-4">
          {filteredTestimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full" key={testimonial.name}>
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                    {testimonial.education && (
                      <div className="mt-4">
                        <span className="font-bold text-lg">Education:</span>{" "}
                        <span>{testimonial.education}</span>
                      </div>
                    )}
                    {testimonial.certifications && (
                      <div className="mt-4">
                        <span className="font-bold text-lg">Certifications:</span>{" "}
                        <span>{testimonial.certifications}</span>
                      </div>
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {/* New Testimonial Box */}
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <TerminalIcon className="block w-8 text-gray-500 mb-4" />
              <div className="inline-flex items-center">
                <span className="flex-grow flex flex-col pl-4">
                  <div className="mt-4">
                    <span className="font-bold text-lg">Education:</span>{" "}
                    <span>B.S Computer Science @ University of Washington</span>
                  </div>
                  <div className="mt-4">
  <span className="font-bold text-lg">Certifications:</span>{" "}
  <a
    href="https://learn.microsoft.com/en-us/users/rudrasingh-1714/credentials/f19c817f810cee72?ref=https%3A%2F%2Fwww.linkedin.com%2F"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:underline"
  >
    Microsoft Certified: Azure Developer Associate
  </a>
</div>

                  <div className="mt-4">
                    <span className="font-bold text-lg">Activities and Societies:</span>{" "}
                    <span>Undergraduate Research, Golf</span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
