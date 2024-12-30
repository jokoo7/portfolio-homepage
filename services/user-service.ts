"use server";

import { redirect } from "next/navigation";
import { checkUserExists } from "./firebase-service";
import { createSession } from "./session-service";

type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export const login = async (state: FormState, payload: FormData) => {
  const username = payload.get("username");
  const password = payload.get("password");

  const existingUser = await checkUserExists(password as string);
  if (!existingUser) {
    return {
      messages: "haha anda bukan admin.",
    };
  }

  await createSession({ username });

  redirect("/admin/dashboard");
};
