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
                  Tech Stack: Angular, Typescript, Node.js, HTML, CSS, Python, FastAPI, OAuth MFA
                </p>
                <div className="mt-2">
                  <div className="text-white">•	Transformed 2.7M health data points into readable formats for 360k researchers using AngularJS & TypeScript for frontend </div>
                  <div className="text-white">•	Handled 10k requests/min for patient data by building RESTful API backend in Python with FastAPI and PostgreSQL </div>
                  <div className="text-white">•	Enabled authorization to 14k CDC emails by integrating OAuth 2.0 MFA for CDC dataset access</div>
                </div>
              </div>
            </div>
            {/* Web Developer @ Paul. G Allen School of Computer Science and Engineering */}
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 bg-green-400 rounded-full mr-4 mt-2"></div>
              <div className="bg-gray-800 rounded p-4 flex-grow">
                <p className="text-white">Software Developer @ Paul. G Allen School of Computer Science and Engineering</p>
                <p className="text-gray-300 text-base">June 2024 - Present</p>
                <p className="text-gray-400 text-sm">
                  Tech Stack: Grafana, REST, FastAPI, Python, Proxmox VE, Swagger
                </p>
                <div className="mt-2">
                  <div className="text-white">• Enabled debugging of client performance issues by developing Grafana log dashboard for 15 SCN servers </div>
                  <div className="text-white">• Developed Angular JS, HTML, & CSS-based UI for logging interface, hosted on Proxmox VE LXC container.</div>
                  <div className="text-white">• Deployed website through Proxmox VE and worked with client on user experience and interface aspects  </div>
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
                  Tech Stack: Azure, Docker, Ubuntu, MongoDB, Nginx, SSL, Python 
                </p>
                <div className="mt-2">
                  <div className="text-white">• OImproved security for 200 users by deploying password manager using Azure Cloud (MongoDB Atlas, VM, Blob Storage)</div>
                  <div className="text-white">• Developed Power BI dashboard to monitor Docker container health, resource usage, and backup status for users </div>
                  <div className="text-white">• Enhanced app deployment using Docker for multi-container setups via Docker Compose (YAML) and Dockerfiles </div>
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
                  Tech Stack: React, AJAX, MySQL, MATLAB, IoT, Sensors
                </p>
                <div className="mt-2">
                  <div className="text-white">• Improved football TV streaming coverage by visualizing 4.6 TB of sensor data at Bobby Dodd Stadium  </div>
                  <div className="text-white">• Developed a MATLAB backend with a PostgreSQL server that communicated with a ReactJS frontend via AJAX requests </div>
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
                  <div className="text-white">• Enhanced Radio Frequency (RF) communication systems for lower latency and heightened reliability</div>
                  <div className="text-white">• Created a MATLAB API for RF instrument data aggregation, interfacing with SA44, VSG25, and MSP432</div>
                  <div className="text-white">• Programmed C scripts to automate knob adjustments for Hybrid Memory Cube devices</div>
                  <div className="text-white">• Designed a wireless Rx/Tx board using attenuators, filters, and mixers, optimized with Simulink, MATLAB, SCPI</div>

                </div>
              </div>
            </div>
            {/* Georgia State University Research Intern */}
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 bg-green-400 rounded-full mr-4 mt-2"></div>
              <div className="bg-gray-800 rounded p-4 flex-grow">
                <p className="text-white">Research Assistant @ Georgia State University</p>
                <p className="text-gray-300 text-base">March 2021 - June 2022</p>
                <p className="text-gray-400 text-sm">Tech Stack: MATLAB, Digital Signal Processing, Simulink</p>
                <div className="mt-2">
                  <div className="text-white">• Developed an active noise cancellation algorithm for leaf blower noise using MATLAB, DSP, and FFT</div>
                  <div className="text-white">• Performed leaf blower experiments, recorded audio data, and converted it to .wav files using MATLAB</div>
                  <div className="text-white">• Visualized data on periodograms/spectrograms in audio toolbox, identifying areas of intense audio presence</div>
                  <div className="text-white">• Trained custom LMS adaptive algorithm on 16M audio bits, achieving 92% noise suppression accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
