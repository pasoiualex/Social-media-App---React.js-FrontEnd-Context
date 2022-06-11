import "./chatOnline.css"
import axios from "axios";
import { useEffect, useState } from "react";
import "./chatOnline.css";


export default function ChatOnline(currentId,setCurrentChat) {
    const [friends, setFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/users/friends/" + currentId);
      setFriends(res.data);
    };

    getFriends();
  }, [currentId]);





  return (
    <div className="chatOnline">
        
        <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
                <img className="chatOnlineImg" src="assets/person/1.jpg" alt="" />
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">Pasoiu</span>
        </div>
        
        
    </div>
  )
}
