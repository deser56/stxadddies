import React from "react";
import React, { useEffect, useState } from 'react';
import "./style.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDSuZC6Cr2Mi-wIDoyC5uITvj4k1ocBHJU",
  authDomain: "mywapp-3c496.firebaseapp.com",
  projectId: "mywapp-3c496",
  storageBucket: "mywapp-3c496.appspot.com",
  messagingSenderId: "496146449954",
  appId: "1:496146449954:web:cfdd3c13bc942ff5722c7b",
  measurementId: "G-8B5M2XMHQ9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


function App() {
  const [logs, setLogs] = useState([]);

  const getUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));

      const newLogs = [];
      querySnapshot.forEach((doc) => {
        const log = JSON.stringify(doc.data());
        if (!newLogs.includes(log)) {
          newLogs.push(log);
        }
      });

      setLogs(newLogs);
      console.log('Query executed successfully.');
    } catch (error) {
      console.error('Error executing query:', error);
    }
  };

  return (
    <div>
      <h2>stxaddrs</h2>
      <button onClick={getUsers}>Fetch Addrsss</button>
      {logs.map((log, index) => (
        <p key={index}>{log}</p>
      ))}
    </div>
  );
}

export default App;
