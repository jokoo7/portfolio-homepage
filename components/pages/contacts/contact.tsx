"use client";

import MotionSection from "../../motion-section";
import Heading from "../../heading";
import ContactList from "./contact-list";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ContactForm from "./contact-form";

const ContactPage = () => {
  return (
    <MotionSection className="mt-28">
      <Heading
        title="Get in Touch"
        description="Have a question or want to work together? Feel free to reach out! I'm always excited to collaborate on new ideas and projects. Let's create something amazing."
      />
      <div className="mt-6 pb-16 border-b">
        <h1 className="mb-4 text-lg font-medium">Find me on.</h1>
        <ContactList />
        <h1 className="my-4 text-lg font-medium">Or send me a message</h1>
        <ContactForm />
      </div>
    </MotionSection>
  );
};

export default ContactPage;
