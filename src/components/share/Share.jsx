import "./share.css";
import {PermMedia,Label,Room,EmojiEmotions} from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpg" alt="" className="shareProfileImg" />
          <input placeholder="Scrie ceva"
           className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Poze si video</span>
                </div>
            </div>

            <div className="shareOptions">
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
            </div>

            <div className="shareOptions">
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Locatie</span>
                </div>
            </div>

            <div className="shareOptions">
                <div className="shareOption">
                    <EmojiEmotions  className="shareIcon"/>
                    <span className="shareOptionText">Cum te simti?</span>
                </div>
            </div>
            <button className="shareBotton">Share</button>
        </div>
      </div>
    </div>
  );
}
