import "./sidebar.css";
import { RssFeed,HelpOutline,WorkOutline,Event,School,Bookmark,PlayCircleFilledOutlined,Group,Chat } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  
   

  
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <Link style={{ textDecoration: "none" }} to="/">
            <RssFeed htmlColor="black"  className="sidebarIcon"/>
            <span htmlColor="black" className="sidebarListItemText">Feed</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link style={{ textDecoration: "none" }} to="/messenger">
            <Chat htmlColor="black" className="sidebarIcon"/>
            
            <span htmlColor="black" className="sidebarListItemText">Chats</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon"/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon"/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>

        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>

        <ul className="sidebarFriendList">
          
          <li className="sidebarFriend">
            <img src="/assets/person/1.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Alex PAsoiu</span>
          </li>
          
        
      
          
        </ul>
      </div>
    </div>
  );
}
