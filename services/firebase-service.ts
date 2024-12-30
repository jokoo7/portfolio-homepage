import { firestore } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getUser = async (collectionName: string) => {
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
