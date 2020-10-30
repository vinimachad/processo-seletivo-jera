import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";
import history from "../history";

import firebaseConfig from "./firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default {
	createMailPass: async (email, password) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.catch((err) => {
				alert(err);
			});
	},
	loginMailPass: async (email, password) => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
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
		await db.collection("users").doc(user.uid).set(
			{
				name: u.name,
				email: u.email,
				avatar: u.avatar,
			},
			{ merge: true }
		);
	},
	addInUser: async (id, typeAcc, idMark, idWatch) => {
		await db
			.collection("users")
			.doc(id)
			.set({
				type:
					typeAcc === "kid"
						? {
								typeAcc,
								myListMovies: [idMark],
								isWatch: [idWatch],
						  }
						: {
								typeAcc,
								myListMovies: [idMark],
								isWatch: [idWatch],
						  },
			});
	},
};
