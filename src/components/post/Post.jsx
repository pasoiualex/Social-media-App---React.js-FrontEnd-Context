import "./post.css";
import {MoreVert} from "@mui/icons-material"

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
          <div className="postTop">
              <div className="postTopLeft">
                  <img src="/assets/person/1.jpg" alt="" className="postProfileImg" />
                  <span className="postUsername">PAsoiu Alex</span>
                  <span className="postDate">acum 5 minute</span>
              </div>
              <div className="postTopRight">
                  <MoreVert/>
              </div>
          </div>
          <div className="postCenter"></div>
          <div className="postBotton"></div>
      </div>
    </div>
  );
}
