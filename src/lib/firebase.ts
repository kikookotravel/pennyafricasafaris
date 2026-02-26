import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA3TFF6kPRxX3f42e1ZjRgWLJ7rzuKT7t0",
  authDomain: "penn-a8d7f.firebaseapp.com",
  projectId: "penn-a8d7f",
  storageBucket: "penn-a8d7f.firebasestorage.app",
  messagingSenderId: "317750766458",
  appId: "1:317750766458:web:1bcbddcf7c640dea79c4c3",
  measurementId: "G-ZQCBCXG03R"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Analytics (only in browser)
let analytics;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

// Initialize Storage for images
const storage = getStorage(app);

export { app, analytics, storage };
