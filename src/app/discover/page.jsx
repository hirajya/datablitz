"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const creators = [
  {
    name: "Michaela Angela Cailing",
    position: "COM223",
    image: "/discover/creator-1.jpeg",
    github: "https://github.com/michaela-cailing",
    linkedin:
      "https://www.linkedin.com/in/michaela-angela-e-cailing-a503332a2/",
  },
  {
    name: "Rodney Lei Estrada",
    position: "COM223",
    image: "/discover/creator-2.jpeg",
    github: "https://github.com/rodney-estrada",
    linkedin: "https://www.linkedin.com/in/rodneyleiestrada/",
  },
  {
    name: "Blix Foryasen",
    position: "COM223",
    image: "/discover/creator-3.jpeg",
    github: "https://github.com/blix-foryasen",
    linkedin: "https://www.linkedin.com/in/blix-machiwao-foryasen/",
  },
  {
    name: "Jerico Lim",
    position: "COM223",
    image: "/discover/creator-4.jpeg",
    github: "https://github.com/jerico-lim",
    linkedin: "https://www.linkedin.com/in/rodneyleiestrada/",
  },
  {
    name: "Reinier Odarve",
    position: "COM223",
    image: "/discover/creator-5.jpeg",
    github: "https://github.com/reinier-odarve",
    linkedin: "https://www.linkedin.com/in/rodneyleiestrada/",
  },
  {
    name: "Danyssa Tamayo",
    position: "COM223",
    image: "/discover/creator-6.jpeg",
    github: "https://github.com/danyssa-tamayo",
    linkedin: "https://www.linkedin.com/in/danyssa-tamayo-5970a4280/",
  },
];

export default function Discover() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="relative h-[100vh]">
        <Image
          src="/discover/Coverpic.webp" // Update this with the actual path
          alt="Cover Background"
          fill
          style={{ objectFit: "cover" }}
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl font-extrabold">
            ABOUT<span className="text-white"> LOOP</span>
          </h1>
          <p className="mt-4 text-lg">
            Powering your passion for gaming, tech, and collectibles
            <br />
            with the latest innovations and exceptional service.
          </p>
        </div>
      </header>

      {/* Mission and Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
            At <span className="font-bold text-[#0D3B66]">Loop</span>, we aim to
            become the ultimate destination for gamers, tech enthusiasts, and
            collectors. We offer an extensive range of the latest video games,
            gaming consoles, and unique collectible items to cater to your
            passion. Our mission is to create a community where gamers can
            explore, purchase, and indulge in their love for all things gaming,
            and collectibles items. We envision a platform where innovation
            meets passion, delivering exceptional experiences and memorable
            moments for our customers.
          </p>
        </div>
      </section>

      {/* Creators Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-4">
            Meet the Leadership Team
          </h2>
          <p className="text-lg text-center text-gray-600 mb-8">
            Get to know the talented individuals driving our vision forward.
          </p>

          {/* Card Display with 2 Rows and 3 Columns */}
          <div className="grid grid-cols-6 gap-8">
            {creators.map((creator, index) => (
              <div key={index} className="overflow-hidden py-8">
                {/* Image with uniform size */}
                <div className="relative w-80 h-96 mx-auto mb-4">
                  <Image
                    src={creator.image}
                    alt={`Image of ${creator.name}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className=""
                  />
                </div>
                {/* Name and Position */}
                <div className="text-center">
                  <h3 className="text-md font-medium">{creator.name}</h3>
                  <p className="text-gray-600 text-xs">{creator.position}</p>
                  <div className="flex justify-center space-x-2 mt-2 text-lg">
                    {/* GitHub Icon */}
                    <a
                      href={creator.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-black"
                    >
                      <FaGithub />
                    </a>
                    {/* LinkedIn Icon */}
                    <a
                      href={creator.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
