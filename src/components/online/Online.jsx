import "./online.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function Online({ userFriends }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user} = useContext(AuthContext);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);
  return (
    <div>
    {friends.map((friend)=> (
      <Link
      to={"/profile/" + friend.username}
      style={{ textDecoration: "none" }}
    >
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.jpeg"
                  } alt="" className="rightbarProfileImg" />
        
      </div>
      <span className="rightbarUsername">{friend.username}</span>
    </li>
    </Link>
    ))}
    </div>
  );
}
