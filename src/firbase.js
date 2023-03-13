import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWsczyy6fKd14xPaApY3CuytNDP4Yy8oI",
  authDomain: "auth-development-6268d.firebaseapp.com",
  projectId: "auth-development-6268d",
  storageBucket: "auth-development-6268d.appspot.com",
  messagingSenderId: "777207915888",
  appId: "1:777207915888:web:38e58c26933b827f41dbb5",
  measurementId: "G-PD204T0Y9D"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;