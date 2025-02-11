import CardContact from "@/components/card-contact";
import { CONTACTS as contacts } from "@/constants/contacts";
import { motion } from "framer-motion";

const ContactList = () => {
  if (contacts.length === 0) {
    return (
      <p className="text-center text-neutral-600 dark:text-neutral-400">
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
          <CardContact data={contact} />
        </motion.div>
      ))}
    </div>
  );
};

export default ContactList;
