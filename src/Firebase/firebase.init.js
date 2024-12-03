// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB2KVp_z03niOx1GtyOQUU9qCuFZzPMoBk',
  authDomain: 'coffee-product.firebaseapp.com',
  projectId: 'coffee-product',
  storageBucket: 'coffee-product.firebasestorage.app',
  messagingSenderId: '1055141252772',
  appId: '1:1055141252772:web:b848661773d7bec1012031',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
