import { writable, type Readable } from 'svelte/store';
import { onAuthStateChanged, type User } from 'firebase/auth';
import {
	doc,
	collection,
	onSnapshot,
	getDoc,
	getDocs,
	type Query,
	type CollectionReference,
	type DocumentReference,
	type DocumentSnapshot,
	type DocumentData,
	type QuerySnapshot
} from 'firebase/firestore';

import { browser } from '$app/environment';

import { auth, firestore } from './config';

export function userStore(): Readable<User | null | undefined> {
	if (!auth || !browser) {
		console.warn('Auth is not initialized or not in browser');
		const { subscribe } = writable(null);
		return {
			subscribe
		};
	}

	const { subscribe } = writable<User | null | undefined>(auth?.currentUser ?? undefined, (set) =>
		onAuthStateChanged(auth, set)
	);

	return {
		subscribe
	};
}

export function docStore<T>(ref: string | DocumentReference, watch?: boolean, initialData?: T) {
	if (!firestore || !browser) {
		console.warn('Firestore is not initialized or not in browser');
		const { subscribe } = writable(initialData);
		return {
			subscribe,
			ref: null,
			id: ''
		};
	}

	const docRef = typeof ref === 'string' ? doc(firestore, ref) : ref;

	const { subscribe } = writable<T | null>(initialData, (set) => {
		const setData = (snapshot: DocumentSnapshot<DocumentData>) =>
			set((snapshot.data() as T) ?? null);

		if (watch) {
			return onSnapshot(docRef, setData);
		} else {
			getDoc(docRef).then(setData);
		}
	});

	return {
		subscribe,
		ref: docRef,
		id: docRef.id
	};
}

export function collectionStore<T>(
	ref: string | Query | CollectionReference,
	watch?: boolean,
	initialData: T[] = []
) {
	if (!firestore || !browser) {
		console.warn('Firestore is not initialized or not in browser');
		const { subscribe } = writable(initialData);
		return {
			subscribe,
			ref: null
		};
	}

	const collectionRef = typeof ref === 'string' ? collection(firestore, ref) : ref;

	const { subscribe } = writable(initialData, (set) => {
		const setData = (snapshot: QuerySnapshot<DocumentData>) =>
			set(
				snapshot.docs.map((s) => {
					return { id: s.id, ref: s.ref, ...s.data() } as T;
				})
			);

		if (watch) {
			return onSnapshot(collectionRef, setData);
		} else {
			getDocs(collectionRef).then(setData);
		}
	});

	return {
		subscribe,
		ref: collectionRef
	};
}
