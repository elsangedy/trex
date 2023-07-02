import { initializeApp } from 'firebase/app';
import { initializeFirestore, persistentLocalCache } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Initialize Firebase
const app = initializeApp({
	apiKey: 'AIzaSyAxaitCjtY9-YgtAJv2W0aoxlS1HOr5s4o',
	authDomain: 'trex-str-and-cond.firebaseapp.com',
	projectId: 'trex-str-and-cond',
	storageBucket: 'trex-str-and-cond.appspot.com',
	messagingSenderId: '319857650797',
	appId: '1:319857650797:web:e48d21f0623f03e495e364',
	measurementId: 'G-Z2Q5F881SY'
});

export const auth = getAuth(app);

export const firestore = initializeFirestore(app, {
	localCache: persistentLocalCache()
});
