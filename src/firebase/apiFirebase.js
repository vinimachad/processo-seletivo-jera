import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";

import history from "../history";

import firebaseConfig from "./firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export default {
	loginMailPass: async (email, password) => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((res) => {
				const user = firebase.auth().currentUser;
				history.push(`/account/${user.uid}`);
			})
			.catch((err) => {
				alert(err);
			});
	},
	signOut: async () => {
		firebase
			.auth()
			.signOut()
			.then(history.push("/login"))
			.catch((err) => {
				alert(err);
			});
	},
	fbPopup: async () => {
		const provider = new firebase.auth.FacebookAuthProvider();
		let result = await firebaseApp.auth().signInWithPopup(provider);
		return result;
	},
	addUser: async (u) => {
		let user = firebase.auth().currentUser;
		await db
			.collection("users")
			.doc(user.uid)
			.set(
				{
					name: u.name,
					email: u.email,
					avatar: u.avatar,
					dataNas: u.dateNas,
					adult: {
						listMark: [],
						listWatch: [],
					},
					kid: {
						listMark: [],
						listWatch: [],
					},
					accounts: [],
				},
				{ merge: true }
			);
	},
	updateUser: async (id, typeAcc, idMark, poster, title) => {
		let userRef = await db.collection("users").doc(id);
		let getData = await userRef.get();
		let data = await getData.data();
		let { kid, adult } = data;
		if (typeAcc === "kid") {
			await db
				.collection("users")
				.doc(id)
				.update({
					kid: {
						listMark: [...kid.listMark, { poster, idMark, title }],
						listWatch: [],
					},
				});
		}
		if (typeAcc === "adult") {
			await db
				.collection("users")
				.doc(id)
				.update({
					adult: {
						listMark: [...adult.listMark, { poster, idMark, title }],
						listWatch: [],
					},
				});
		}
	},
};
