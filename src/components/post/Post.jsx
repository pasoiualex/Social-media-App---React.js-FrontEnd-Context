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
          <div className="postCenter">
            <span className="postText">Hey! its my first post :)</span>
            <img src="/assets/post/1.jpg" alt="" className="postImg" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img src="/assets/like.png" alt="" className="likeIcon" />
              <img src="/assets/heart.png" alt="" className="likeIcon" />
              <span className="postLikeCounter">32 de persoane</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">5 coemntarii</span>
            </div>
          </div>
      </div>
    </div>
  );
}
