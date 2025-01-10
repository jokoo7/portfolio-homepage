/* eslint-disable @typescript-eslint/no-explicit-any */
import { firestore } from "@/lib/firebase";
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";

export const retriveData = async (collectionName: string) => {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
};

export const checkUserExists = async (password: string) => {
  const snapshot = await getDocs(
    query(collection(firestore, "users"), where("password", "==", password))
  );
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data[0];
};

export const createProjectToDb = async (data: any): Promise<boolean> => {
  try {
    await addDoc(collection(firestore, "projects"), data);
    return true;
  } catch (error) {
    console.error("Failed to add project to database:", error);
    return false;
  }
};

export const updateProjectToDb = async (data: any, id: string) => {
  try {
    // Update dokumen di Firestore
    await updateDoc(doc(firestore, "projects", id), data);
    return true;
  } catch (error) {
    console.error("Error updating project:", error);
    return false;
  }
};

export const createContactToDb = async (data: any) => {
  try {
    await addDoc(collection(firestore, "contacts"), data);
    return true;
  } catch (error) {
    console.error("Failed to add contact to database:", error);
    return false;
  }
};

export const updateContactToDb = async (data: any, id: string) => {
  try {
    // Update dokumen di Firestore
    await updateDoc(doc(firestore, "contact", id), data);
    return true;
  } catch (error) {
    console.error("Error updating contact:", error);
    return false;
  }
};

export const getDataBySlug = async (collectionName: string, slug: string) => {
  const snapshot = await getDocs(
    query(collection(firestore, collectionName), where("slug", "==", slug))
  );

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data[0];
};
