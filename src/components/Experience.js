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
            {/* Undergraduate Research Assistant Position at Paul. G Allen School of Computer Science and Engineering */}
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 bg-green-400 rounded-full mr-4 mt-2"></div>
              <div className="bg-gray-800 rounded p-4 flex-grow">
                <p className="text-white">Undergraduate Research Assistant @ University of Washington</p>
                <p className="text-gray-300 text-base">December 2023 - Present</p>
                <p className="text-gray-400 text-sm">
                  Tech Stack: Azure, Docker, Ubuntu, Linux, PostgreSQL, SQLite, Asymmetric Encryption, YAML, Nginx, CRON Jobs, SSL Certification, Bash Scripting
                </p>
                <div className="mt-2">
                  <div className="text-white">• Created Azure password manager with RDBMS and asymmetric encryption.</div>
                  <div className="text-white">• Deployed solution on Ubuntu Azure VM using Docker and automated data backup with CRON jobs.</div>
                  <div className="text-white">• Implemented website security via Nginx with SSL certification.</div>
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
