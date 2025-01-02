/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Send } from "lucide-react";
import MotionSection from "../motion-section";
import CardContact from "../card-contact";
import Heading from "../heading";
import { useEffect, useState } from "react";
import { retriveData } from "@/services/firebase-service";

const ContactPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProjects() {
      setLoading(true);
      try {
        const result: any = await retriveData("contacts");
        // Urutkan data berdasarkan created_at secara descending (terbaru di atas)
        const sortedContacts = result.sort(
          (a: { created_at: string | number | Date }, b: { created_at: string | number | Date }) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        setContacts(sortedContacts);
      } catch (error) {
        console.error("Error retrieving projects:", error);
      } finally {
        setLoading(false);
      }
    }
    getProjects();
  }, []);

  return (
    <>
      <MotionSection>
        <Heading title="Contact" description="Let`s get in touch.">
          <Send strokeWidth={2.5} size={24} />
        </Heading>
        <div className="mt-6 pb-16 border-b">
          <h1 className="mb-4">Find me on.</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                {contacts?.map((contact: any, index) => (
                  <CardContact
                    key={index}
                    href={contact.url}
                    label={contact.label}
                    icon={contact.icon}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </MotionSection>
    </>
  );
};

export default ContactPage;
