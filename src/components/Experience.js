import { BriefcaseIcon } from "@heroicons/react/solid";
import React from "react";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container px-5 py-0 mx-auto">
        <div className="text-center mb-20">
          <BriefcaseIcon className="mx-auto inline-block w-10 mb-4 text-grey-400" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Experience
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Past internship and research experiences:
          </p>
        </div>
        <div className="relative">
          <div className="border-r-4 border-green-400 absolute h-full left-0"></div>
          <div className="ml-12">
          {/* Software Enginer Intern @ Centers for Disease Control and Prevention  */}
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 bg-green-400 rounded-full mr-4 mt-2"></div>
              <div className="bg-gray-800 rounded p-4 flex-grow">
                <p className="text-white">Software Enginer Intern @ Centers for Disease Control and Prevention (CDC)</p>
                <p className="text-gray-300 text-base">June 2024 - Present</p>
                <p className="text-gray-400 text-sm">
                  Tech Stack: AngularJS, Typescript, RxJS, Node.js, HTML, CSS, FHIR
                </p>
                <div className="mt-2">
                  <div className="text-white">•	Led design of a FHIR-compliant website using AngularJS and Angular Material for viewing 1.5M lab records.</div>
                  <div className="text-white">•	Enhanced data handling and UI responsiveness using TypeScript and RxJS, reducing load times by 50%.</div>
                  <div className="text-white">•	Standardized lab code translations with a middleware Node.js application, reducing errors by 98%.</div>
                </div>
              </div>
            </div>
            {/* Web Developer @ Paul. G Allen School of Computer Science and Engineering */}
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 bg-green-400 rounded-full mr-4 mt-2"></div>
              <div className="bg-gray-800 rounded p-4 flex-grow">
                <p className="text-white">Web Developer @ Paul. G Allen School of Computer Science and Engineering</p>
                <p className="text-gray-300 text-base">June 2024 - Present</p>
                <p className="text-gray-400 text-sm">
                  Tech Stack: Proxmox VE, AngularJS, HTML, CSS, RESTful API, LDAP
                </p>
                <div className="mt-2">
                  <div className="text-white">• Building a logging server interface using AngularJS, HTML, and CSS for Seattle Community Network.</div>
                  <div className="text-white">• Created and integrated a RESTful API for log access and Docker diagnostics, hosted on Swagger UI.</div>
                  <div className="text-white">• Implemented LDAP authentication for 200 users.</div>
                </div>
              </div>
            </div>
            {/* Undergraduate Research Assistant Position at Paul. G Allen School of Computer Science and Engineering */}
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 bg-green-400 rounded-full mr-4 mt-2"></div>
              <div className="bg-gray-800 rounded p-4 flex-grow">
                <p className="text-white">Undergraduate Research Assistant @ University of Washington</p>
                <p className="text-gray-300 text-base">December 2023 - Present</p>
                <p className="text-gray-400 text-sm">
                  Tech Stack: Azure, Docker, Ubuntu, PostgreSQL, Nginx, SSL, Python
                </p>
                <div className="mt-2">
                  <div className="text-white">• Developed a lab password manager using Azure DNS, PostgreSQL, and Virtual Machine, supporting 200 users.</div>
                  <div className="text-white">• Utilized Azure SDK to write Python scripts to back up data to Blob Storage, cutting costs from $480 to $0.12/yr.</div>
                  <div className="text-white">• Optimized system architecture with Docker Compose, Nginx, SSL.</div>
                </div>
              </div>
            </div>
            {/* Georgia Tech VIP Program Research Intern */}
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 bg-green-400 rounded-full mr-4 mt-2"></div>
              <div className="bg-gray-800 rounded p-4 flex-grow">
                <p className="text-white">Research Intern @ Georgia Tech VIP Program</p>
                <p className="text-gray-300 text-base">July 2022 - September 2023</p>
                <p className="text-gray-400 text-sm">
                  Tech Stack: SQL, MySQL, MATLAB, IoT, Sensors
                </p>
                <div className="mt-2">
                  <div className="text-white">• Developed IoT testbed for Georgia Tech Football fan excitement monitoring, utilizing embedded systems.</div>
                  <div className="text-white">• Collected & stored foot rumbling data in a MySQL database; utilized SQL + MATLAB algorithms for data normalization.</div>
                  <div className="text-white">• Provided insights for GT Broadcasting Team's post-touchdown camera placement.</div>
                </div>
              </div>
            </div>
            {/* Georgia Tech Research Institute Research Intern */}
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 bg-green-400 rounded-full mr-4 mt-2"></div>
              <div className="bg-gray-800 rounded p-4 flex-grow">
                <p className="text-white">Research Intern @ GTRI SEAL Laboratory</p>
                <p className="text-gray-300 text-base">June 2022 - July 2022</p>
                <p className="text-gray-400 text-sm">
                  Tech Stack: C, Python, MATLAB, Simulink
                </p>
                <div className="mt-2">
                  <div className="text-white">• Enhanced RF communication systems to minimize latency and improve reliability.</div>
                  <div className="text-white">• Created a Python API to enable 50M bits/sec instrument data aggregation.</div>
                  <div className="text-white">• Programmed C scripts to automate knob adjustments for Hybrid Memory Cube devices.</div>
                </div>
              </div>
            </div>
            {/* Georgia State University Research Intern */}
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 bg-green-400 rounded-full mr-4 mt-2"></div>
              <div className="bg-gray-800 rounded p-4 flex-grow">
                <p className="text-white">Research Assistant @ Georgia State University</p>
                <p className="text-gray-300 text-base">March 2021 - June 2022</p>
                <p className="text-gray-400 text-sm">Tech Stack: MATLAB, Signal Processing, Machine Learning Algorithms</p>
                <div className="mt-2">
                  <div className="text-white">• Project Title: Active Noise Cancellation Algorithm to Suppress Leaf Blower Noise</div>
                  <div className="text-white">• Processed and extracted over 40M bits of audio data from leaf blower experiments.</div>
                  <div className="text-white">• Developed algorithms achieving 92% noise suppression, leveraging machine learning models and adaptive filtering methodologies.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
