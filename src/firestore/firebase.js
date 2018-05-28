import firebase from '@firebase/app';

// TODO: add const proConfig = {};

// TODO: change to devConfig = {};
const config = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
	databaseURL: `https://${
		process.env.REACT_APP_FIREBASE_DATABASE_NAME
	}.firebaseio.com`,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}.appspot.com`,
	messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
};

/* const config = process.env.NODE_ENV === 'production'
  ? proConfig
  : devConfig; */

firebase.initializeApp(config);

export default firebase;