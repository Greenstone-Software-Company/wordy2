import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCvGbIoSMRPLI4gLljlb_haiTEd5uq4Eo4",
    authDomain: "wordy-speech-to-text.firebaseapp.com",
    projectId: "wordy-speech-to-text",
    storageBucket: "wordy-speech-to-text.appspot.com",
    messagingSenderId: "944420963206",
    appId: "1:944420963206:web:a8a727cc9651f530fee207",
    measurementId: "G-5VE0BNBLM0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };