import React, { useState, useEffect } from 'react';
import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXRkyLyJHXumfMv2wjkzdS9J8dccQq68Q",
  authDomain: "chat-app-bbf58.firebaseapp.com",
  databaseURL: "https://chat-app-bbf58.firebaseio.com",
  projectId: "chat-app-bbf58",
  storageBucket: "chat-app-bbf58.appspot.com",
  messagingSenderId: "556672069955",
  appId: "1:556672069955:web:ce444564b2ff3ebb"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function Nav() {
  const [channels, setChannels] = useState([
    {
      topic: "Talk about anything work stuff",
      id: "general"
    }]);
  const [mainChannel, setMainChannel] = useState("general");


  useEffect(() => {
    db.collection('channels').onSnapshot(snapShot => {
      const docs = [];
      snapShot.forEach(doc => {
        docs.push({
          ...doc.data(),
          id: doc.id
        });
      });
      setChannels(docs);
    });
    let activeLink = document.querySelector("."+mainChannel);
    activeLink.classList.add("active");
    return;
  }, []);

  return (
    <div className="Nav">
      <div className="User">
        <img
          className="UserImage"
          alt="whatever"
          src="https://placekitten.com/64/64"
        />
        <div>
          <div>Ryan Florence</div>
          <div>
            <button className="text-button">log out</button>
          </div>
        </div>
      </div>
      <nav className="ChannelNav">
        {channels.map(channel => (
          <a key={channel.id+`$`} className={channel.id} href={`/channel/${channel.id}`}>#{channel.id}</a>
        ))}
      </nav>
    </div>
  );
}

export default Nav;
