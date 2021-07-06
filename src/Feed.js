import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from "./InputOption";
import { db } from "./firebase";
import firebase from "firebase"
import { useSelector } from "react-redux";
function Feed() {
  const user = useSelector(state => state.user)
  const [input, setinput] = useState("")
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  let sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name:user.displayName,
      description:user.email,
      message:input,
      photoUrl:user.photoUrl || " ",
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setinput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" value={input} onChange={e=>setinput(e.target.value)}/>
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* Posts */}
      {posts.map(({id,data:{name,description,message,photoUrl}})=>{
        return <Post
        key={id}
        description={description}
        name={name}
        message={message}
        photoUrl={photoUrl}
      />
      })}
      
    </div>
  );
}

export default Feed;
