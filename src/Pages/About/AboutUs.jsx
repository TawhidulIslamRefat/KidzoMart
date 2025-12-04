import React from "react";
import { Link } from "react-router";

const teamMembers = [
  { name: "Alice Johnson", role: "CEO & Founder", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Michael Smith", role: "Head of Product", img: "https://randomuser.me/api/portraits/men/46.jpg" },
  { name: "Emma Williams", role: "Marketing Lead", img: "https://randomuser.me/api/portraits/women/50.jpg" },
];

const AboutUs = () => {
  return (
    <div className="font-sans text-gray-800 w-full md:w-10/12 mx-auto">

      {/* Hero Section */}
      <section className=" py-15   rounded-b-3xl text-center">
        <h1 className=" text-xl sm:text-2xl  md:text-4xl  font-extrabold leading-tight mb-6">
          About <span>Us</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto px-2">
          We craft toys that spark imagination, inspire learning, and bring joy to kids worldwide.  
          Our focus is on safe, innovative, and creative products that nurture young minds.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="px-3 md:px-6 py-0 md:py-10 grid md:grid-cols-2 gap-5 md:gap-12 ">
        <div className="bg-white p-10 rounded-2xl shadow-md">
          <h2 className="text-xl md:text-3xl font-bold mb-4 text-gray-800">Our Mission</h2>
          <p className="text-gray-600 text-sm md:text-lg">
            To provide children with safe, innovative, and fun toys that enhance learning and creativity while encouraging interactive play.
          </p>
        </div>
        <div className="bg-white p-10 rounded-2xl shadow-md">
          <h2 className="text-xl md:text-3xl font-bold mb-4 text-gray-800">Our Vision</h2>
          <p className="text-gray-600 text-sm md:text-lg">
            To become the most trusted toy brand globally, inspiring generations through educational and entertaining play experiences.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 md:px-20 py-10 md:py-20 flex flex-col justify-center items-center">
        <h2 className=" text-xl sm:text-2xl md:text-4xl  font-extrabold text-center mb-12">Meet Our Team</h2>
        <div className="flex gap-4 md:gap-10">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="text-center">
              <img
                src={member.img}
                alt={member.name}
                className=" w-20 h-20 md:w-32 md:h-32 mx-auto rounded-full object-cover mb-4 shadow-md"
              />
              <h3 className=" text-sm md:text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 text-xs md:text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-l from-[#6ECFFF] to-[#1EA7FF] my-10 text-white py-20 px-6 md:px-20 rounded-2xl text-center">
        <h2 className=" text-2xl md:text-4xl  font-extrabold mb-6">Explore, Learn & Play!</h2>
        <p className="text-sm md:text-xl max-w-2xl mx-auto mb-8">
          Dive into our world of toys and give your kids the best experience in learning and fun.
        </p>
        <Link to='/all-items' className="bg-white text-[#FA6775] font-semibold px-10 py-4 rounded-full hover:scale-105 transition transform">
          Shop Now →
        </Link>
      </section>

    </div>
  );
};

export default AboutUs;
