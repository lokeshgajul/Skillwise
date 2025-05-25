import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.envapiKey,
  authDomain: process.envauthDomain,
  projectId: process.envprojectId,
  storageBucket: process.envstorageBucket,
  messagingSenderId: process.envmessagingSenderId,
  appId: process.envappId,
  measurementId: process.envmeasurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { auth, app };
