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
	updateList: async (
		id,
		typeAcc,
		idMark,
		poster,
		title,
		typeList,
		indexAcc,
		inCreateAcc
	) => {
		let userRef = await db.collection("users").doc(id);
		let getData = await userRef.get();
		let data = await getData.data();
		let { kid, adult, accounts: acc } = data;
		let account = acc[indexAcc];
		console.log(acc);
		if (typeAcc === "kid") {
			if (inCreateAcc === false) {
				await db
					.collection("users")
					.doc(id)
					.update({
						kid: {
							...kid,
							[typeList]: [...kid[typeList], { poster, idMark, title }],
						},
					});
			} else {
				await db
					.collection("users")
					.doc(id)
					.update({
						// [`accounts[${indexAcc}]`]: {
						// 	[typeList]: [...account[typeList], { poster, idMark, title }],
						// },
						accounts: [...acc],
					});
			}
		}
		if (typeAcc === "adult") {
			if (inCreateAcc === false) {
				await db
					.collection("users")
					.doc(id)
					.update({
						adult: {
							...adult,
							[typeList]: [...adult[typeList], { poster, idMark, title }],
						},
					});
			} else {
				await db
					.collection("users")
					.doc(id)
					.update({
						accounts: [
							{
								...acc,
								[typeList]: [...account[typeList], { poster, idMark, title }],
							},
						],
					});
			}
		}
	},
};
