import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/config/firebase";

export const isAuth = (): string | null => {
  const isAuth = localStorage.getItem("user");
  return isAuth;
};

const setUserId = (user: { username: string; emailId: string }) => {
  const JSONuser = JSON.stringify(user);
  localStorage.setItem("user", JSONuser);
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    setUserId({
      username: String(user.displayName),
      emailId: String(user.email),
    });
  } else {
    localStorage.removeItem("user");
  }
});

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
    setUserId({
      username: String(res.user.displayName),
      emailId: String(res.user.email),
    });

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
    setUserId({
      username: String(res.user.displayName),
      emailId: String(res.user.email),
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const signOutFunc = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
  } catch (error) {
    return error;
  }
};
