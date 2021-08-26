import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBih9eQcC1pfV1LA0Ze5WkdQWfQBat1rUI',
  authDomain: 'chat-app-aaa99.firebaseapp.com',
  projectId: 'chat-app-aaa99',
  storageBucket: 'chat-app-aaa99.appspot.com',
  messagingSenderId: '465295029634',
  appId: '1:465295029634:web:49aceb8c06bf639f604b9b',
};
const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
