import { useState } from "react";
import "./contact.css";
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setStatus("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus(error.message || "Something went wrong.");
    }
  };

  return (
    <>
    <div id='Contact' className="w-full">
    <div className="w-full flex justify-center pt-20 my-10 mb-20" >
      <h1 className='text-3xl font-serif '>CONTACT PAGE</h1>
    </div>
    <section className="h-screen w-full pt-10 flex justify-center flex-col md:flex-row" >
      <div className="cont flex flex-col w-full m-4  p-6">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-20 border-2 border-gray-300 p-4 rounded-lg">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          className="get rounded-lg h-[50px]"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          className="get rounded-lg h-[50px]" 
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          className="get rounded-xl h-40"
          onChange={handleChange}
          required
        />

        <button type="submit" className="h-14 rounded-full">
          Send Message
        </button>
      </form>

      {status && <p className="fontt-bold mt-5">{status}</p>}
      </div>
    </section>
    </div>
    </>
  );
}

export default Contact;