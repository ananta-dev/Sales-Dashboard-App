import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

console.log('Firebase API KEY:');
console.log(process.env.REACT_APP_API_KEY);

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

console.log('Right before initializing firebase');

// init firebase
firebase.initializeApp(firebaseConfig);

console.log('Right after initializing firebase');

// init service
const projectFirestore = firebase.firestore();

console.log('Right before calling firebase auth');

let projectAuth;
try {
    projectAuth = firebase.auth();
} catch (err) {
    console.log('error while calling firebase.auth()');
    console.log({ err });
}

console.log('Right after calling firebase auth');
console.log({ projectAuth });

export { projectFirestore, projectAuth };
