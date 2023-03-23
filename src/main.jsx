import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/scss/Main.scss'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXFdkG9-BpbbswwqlNcf3GbAzrfcYZx4M",
  authDomain: "proyecto-coder-44f48.firebaseapp.com",
  projectId: "proyecto-coder-44f48",
  storageBucket: "proyecto-coder-44f48.appspot.com",
  messagingSenderId: "629801669676",
  appId: "1:629801669676:web:6a441974d8752954b06d89"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
