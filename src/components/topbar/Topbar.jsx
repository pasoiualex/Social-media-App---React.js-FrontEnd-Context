import "./topbar.css";
import {  Person, Chat, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Retea sociala</span>
        </Link>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span htmlColor="white" className="topbarLink">Homepage</span>
        </Link>  
          <Link to="/logout">
          <span className="topbarLink">Log out</span>
          
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            
          </div>
          <Link style={{ textDecoration: "none"}} to="/messenger">
          <div className="topbarIconItem">
            
            <Chat htmlColor="white" />
            
          </div>
          </Link>
          <div className="topbarIconItem">
            <Notifications />
            
          </div>
        </div>
        <Link to =  {`/profile/${user.username}` }>
        <img
          src={
            user.profilePicture
              ? PF + user.profilePicture
              : PF + "person/noAvatar.jpeg"
          }
          alt=""
          className="topbarImg"
        />
        </Link>
      </div>
    </div>
  );
}
