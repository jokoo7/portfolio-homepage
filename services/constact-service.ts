import { retriveData } from "./firebase-service";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getContacts = async () => {
  const result: any[] = await retriveData("contacts");
  // Sort contacts by created_at descending
  const sortedContacts = result.sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return sortedContacts;
};
