"use client";

import MotionSection from "../../motion-section";
import Heading from "../../heading";
import ContactList from "./contact-list";

const ContactPage = () => {
  return (
    <MotionSection className="mt-28">
      <Heading
        title="Get in Touch"
        description="Have a question or want to work together? Feel free to reach out! I'm always excited to collaborate on new ideas and projects. Let's create something amazing."
      />
      <div className="mt-6 pb-16 border-b">
        <h1 className="mb-4 text-lg font-semibold">Find me on.</h1>
        <ContactList />
      </div>
    </MotionSection>
  );
};

export default ContactPage;
