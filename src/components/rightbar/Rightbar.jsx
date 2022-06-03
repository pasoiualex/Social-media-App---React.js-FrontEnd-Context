import "./rightbar.css"
import {Users} from "..//..//date"
import Online from "../online/Online"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/birthday.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pasoiu Alex</b> si <b> inca  3 priteni </b> isi sarbatoresc ziua astazi !
          </span>
        </div>
        <img src="/assets/Ad.jpeg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
          
        </ul>
      </div>
    </div>
  )
}
