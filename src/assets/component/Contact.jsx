import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto bg-[#004200] py-8 text-[#e6eff9] sm:py-16"
    >
      <div className="container mx-auto">
        <h2 className="mb-2 mb-4 pb-[10px] text-2xl font-bold">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label for="name" className="block">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="contact-input-text w-[100%]"
            />
          </div>
          <div className="mb-4">
            <label for="email" className="block ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="contact-input-text w-[100%]"
            />
          </div>
          <div className="mb-4">
            <label for="message" className="block ">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="contact-input-text w-[100%]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="rounded bg-[#e6eff9] px-4 py-2 text-[#004200] hover:bg-[#e6eff9] hover:font-semibold hover:italic hover:text-[#004200]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
