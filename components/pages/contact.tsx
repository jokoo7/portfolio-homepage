"use client";

import { Send } from "lucide-react";
import MotionSection from "../motion-section";
import Ig from "../svg/ig";
import Github from "../svg/github";
import Tiktok from "../svg/tiktok";
import CardContact from "../card-contact";

const ContactPage = () => {
  return (
    <>
      <MotionSection>
        <div className="relative w-full border-b pb-6">
          <div className="">
            <div className="flex gap-2 items-center mb-3">
              <Send strokeWidth={2.5} size={24} />
              <h1 className="text-2xl font-medium font-inter">Contact</h1>
            </div>
            <span className="text-main-gray font-inter text-base block">Let`s get in touch</span>
          </div>
        </div>
        <div className="mt-6 pb-16 border-b">
          <h1 className="mb-4">Find me on.</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CardContact label="Github" icon={<Github w="20px" h="25px" />} />
            <CardContact label="Tiktok" icon={<Tiktok w="20px" h="25px" />} />
            <CardContact label="Instagram" icon={<Ig w="20px" h="25px" />} />
          </div>
        </div>
      </MotionSection>
    </>
  );
};

export default ContactPage;
