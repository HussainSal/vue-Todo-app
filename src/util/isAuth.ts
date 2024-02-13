import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/config/firebase";

export const isAuth = (): string | null => {
  const isAuth = localStorage.getItem("isAuth");
  return isAuth;
};

const setUserId = (id: string) => {
  localStorage.setItem("uid", id);
};

export const signUp = async (userCred: {
  email: string;
  password: string;
  username: string;
}) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      userCred.email,
      userCred.password
    );

    await updateProfile(res.user, { displayName: userCred.username });

    return res;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (userCred: { email: string; password: string }) => {
  try {
    const res = await signInWithEmailAndPassword(
      auth,
      userCred.email,
      userCred.password
    );
    return res;
  } catch (error) {
    throw error;
  }
};
