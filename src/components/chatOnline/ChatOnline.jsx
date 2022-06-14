import "./chatOnline.css"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "./chatOnline.css";
import { AuthContext } from "../../context/AuthContext";


export default function ChatOnline({userFriends,currentId,setCurrentChat}) {
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

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div className="chatOnline">
      <span className="chatMenuInput" >Prietenii cu care poți incepe o conversație: </span>
        {friends.map((friend)=> (
        <div className="chatOnlineFriend" onClick={() => handleClick(friend)}>
            <div className="chatOnlineImgContainer">
                <img className="chatOnlineImg" src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.jpeg"
                  } alt="" />
                <div className="chatOnlineBadg"></div>
            </div>
            <span className="chatOnlineName">{friend.username}</span>
        </div>
        ))}
        
        
    </div>
  )
}
