import firebase from './firebase';
import "@firebase/firestore";

const database = firebase.firestore();

export { database };