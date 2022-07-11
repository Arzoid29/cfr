import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const usersCollection = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
    const data  = await getDocs(usersCollection);
    }
    getUsers();
  }, []);
  return <div className="App"></div>;
}

export default App;
