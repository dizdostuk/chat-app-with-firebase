import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Channel from './Channel';
import { firebase } from "../firebase";

function App() {

  const user = useAuth();
  
  
  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  };

  return user ? (
    <div className="App">
      <Nav user={user} />
      <Channel />
    </div>
  ) : (
    <div className="Login">
      <h1>Login to Chat-App</h1>
      <button onClick={handleSignIn} className="btn">Signin</button>
    </div>
  );
};

function useAuth() {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        setUser(user);
      } else {
        setUser(null);
      }
    })
  }, []);

  return user;
}

export default App;
