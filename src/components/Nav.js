import React, { useState, useEffect } from 'react';
import { db } from "../firebase";



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
