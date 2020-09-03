import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { FirebaseAppProvider } from 'reactfire';

export const firebaseConfig = {
  apiKey: "AIzaSyCJLGaDqpTj971XmF41rk7Jhf22ncP2OcM",
  authDomain: "real-estate-saas-47e04.firebaseapp.com",
  databaseURL: "https://real-estate-saas-47e04.firebaseio.com",
  projectId: "real-estate-saas-47e04",
  storageBucket: "real-estate-saas-47e04.appspot.com",
  messagingSenderId: "560256521387",
  appId: "1:560256521387:web:76c7b85cd51547762113ee",
  measurementId: "G-SSCZ8VH0BZ"
};



export const stripePromise = loadStripe(
  'pk_test_51HMFGQErwA8bEx8YyCq3PmkhvnbiKzAoXDmwl6ZZJap6cUkeIp53kF1tdGjIw2j3LmMRtWmwdcgfJWmNYYj5qXGx00Au4idMWb'
);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
