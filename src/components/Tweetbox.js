import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "../firebase";
import firebase from "firebase";
import { useStateValue } from "../StateProvider";
import "./tweetbox.css";

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: user.displayName,
      username: user.uid.substring(0, 5),
      verified: user.emailVerified,
      avatar: user.photoURL,
      text: tweetMessage,
      image: tweetImage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox_input">
          <Avatar src={user.photoURL} />
          <input
            type="text"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="Whats's happening? "
            required
          />
        </div>
        <div className="image_button">
          <input
            className="tweetImage"
            type="text"
            onChange={(e) => setTweetImage(e.target.value)}
            placeholder="Enter an image URL to upload"
          />
          <Button type="submit" onClick={sendTweet} className="tweetButton">
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Tweetbox;
