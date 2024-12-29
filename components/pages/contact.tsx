"use client";

import { Send } from "lucide-react";
import MotionSection from "../motion-section";
import Ig from "../svg/ig";
import Github from "../svg/github";
import Tiktok from "../svg/tiktok";
import CardContact from "../card-contact";
import Heading from "../heading";

const ContactPage = () => {
  return (
    <>
      <MotionSection>
        <Heading title="Contact" description="Let`s get in touch.">
          <Send strokeWidth={2.5} size={24} />
        </Heading>
        <div className="mt-6 pb-16 border-b">
          <h1 className="mb-4">Find me on.</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CardContact
              href="https://github.com/jokosannn"
              label="Github"
              icon={<Github w="20px" h="25px" />}
            />
            <CardContact
              href="https://www.tiktok.com/@sannn1605"
              label="Tiktok"
              icon={<Tiktok w="20px" h="25px" />}
            />
            <CardContact
              href="https://www.instagram.com/jokosannn"
              label="Instagram"
              icon={<Ig w="20px" h="25px" />}
            />
          </div>
        </div>
      </MotionSection>
    </>
  );
};

export default ContactPage;
