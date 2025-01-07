/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { firestore } from "@/lib/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

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

export const createProjectToDb = async (data: any, callback: Function) => {
  await addDoc(collection(firestore, "projects"), data)
    .then(() => callback(true))
    .catch((error) => {
      callback(false);
      console.log(error);
    });
};

export const createContactToDb = async (data: any, callback: Function) => {
  await addDoc(collection(firestore, "contacts"), data)
    .then(() => callback(true))
    .catch((error) => {
      callback(false);
      console.log(error);
    });
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
