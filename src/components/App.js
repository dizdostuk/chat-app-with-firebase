import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Channel from './Channel';
import { firebase, db } from "../firebase";
import { Router, Redirect } from "@reach/router";

function App() {

  const user = useAuth();
  
  
  
  return user ? (
    <div className="App">
      <Nav user={user} />
      <Router>
        <Channel path="channel/:channelId" user={user} />
        <Redirect from="/" to="channel/general" />
      </Router>
    </div>
  ) : (
    <Login />
    );
};

function Login() {
  const [ authError, setAuthError ] = useState();
  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    }catch(err) {
      setAuthError(err);
    }
  };
  
  return (<div className="Login">
    <h1>Login to Chat-App</h1>
    <button onClick={handleSignIn} className="btn">Signin</button>
    {authError && (
      <div>
        <p>Ooops, there was a problem</p>
        <p>
          <i>{authError.message}</i>
        </p>
        <p>Please try again</p>
      </div>
    )}
  </div>);
}

function useAuth() {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((firebaseUser) => {
      if(firebaseUser) {
        const user = {
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          uid: firebaseUser.uid
        };
        setUser(user);
        db
          .collection("users")
          .doc(user.uid)
          .set(user, { merge: true });
      } else {
        setUser(null);
      }
    })
  }, []);

  return user;
}

export default App;
