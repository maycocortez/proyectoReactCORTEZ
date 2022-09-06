import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"

import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: "AIzaSyDpDQD-Iebq_K4deOjal3DrhqGO7zy-6q0",

  authDomain: "disqueria-bb506.firebaseapp.com",

  projectId: "disqueria-bb506",

  storageBucket: "disqueria-bb506.appspot.com",

  messagingSenderId: "136294940483",

  appId: "1:136294940483:web:d9490ad72d759b97e539f6"

};


// Initialize Firebase

initializeApp(firebaseConfig);



//obtenemos el divRoot
const divRoot = document.getElementById('root');
//creamos el virtual DOM
const root = ReactDOM.createRoot(divRoot)
//dibujar los componentes de React aca dentro
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
