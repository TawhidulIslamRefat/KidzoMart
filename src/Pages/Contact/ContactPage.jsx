import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields!");
      return;
    }

    // You can integrate backend API here
    console.log("Form submitted:", formData);

    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-20 px-6 md:px-20">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
        Contact <span >Us</span>
      </h1>
      <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl text-center">
        Have questions or want to get in touch? Fill out the form below and we'll respond as soon as possible.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-3xl flex flex-col gap-6"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FA6775] transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FA6775] transition"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FA6775] transition"
        ></textarea>
        <button
          type="submit"
          className="bg-[#FA6775] text-white font-semibold py-3 rounded-xl hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>

      {/* Optional contact info */}
      <div className="mt-16 text-center text-gray-600 space-y-2">
        <p>Email: support@kidzomart.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Toy Street, Fun City, USA</p>
      </div>
    </div>
  );
};

export default ContactPage;
