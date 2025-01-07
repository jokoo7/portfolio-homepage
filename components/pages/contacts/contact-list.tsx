import CardContact from "@/components/card-contact";
import ContactLoading from "@/components/loading/contact-loading";
import { getContacts } from "@/services/contact-service";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

// Define contact type
interface Contact {
  created_at: string | Date;
  url: string;
  label: string;
  icon: string;
}

const ContactList = () => {
  const {
    data: contacts = [],
    isLoading,
    isError,
  } = useQuery<Contact[]>({
    queryKey: ["contacts"],
    queryFn: getContacts,
  });

  if (isLoading) {
    return <ContactLoading />;
  }

  if (isError) {
    return <p className="text-center text-red-500">Failed to load contacts. Please try again later.</p>;
  }

  if (contacts.length === 0) {
    return (
      <p className="text-center text-neutral-500 dark:text-neutral-300">
        No contacts available at the moment.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {contacts.map((contact, index) => (
        <motion.div
          initial={{ opacity: 0, translateX: 20, scale: 0.9 }}
          animate={{ opacity: 1, translateX: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          key={index}
        >
          <CardContact href={contact.url} label={contact.label} icon={contact.icon} />
        </motion.div>
      ))}
    </div>
  );
};

export default ContactList;
