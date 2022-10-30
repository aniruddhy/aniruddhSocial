import { Favorite, MoreVert, ThumbUp } from "@mui/icons-material";
import "./post.css";
import {Users} from "../../DummyData";
import {useState} from 'react';

export default function Post({post}){

     const[like ,setLike]=useState(post.like);
     const[islike,setIsLike]=useState(false);
    
    const clickHandler=()=> {
        setLike(islike?like-1:like+1);
        setIsLike( !islike);
    }

    return(
    <div className="post">
       <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src={Users.filter(u =>(post.id === u.id))[0].profilePicture} alt="" className="postProfileImg" />
                <span className="postUserName">{Users.filter((u) => u.id === post.userId)[0].userName}</span>
                <span className="postDate">{post.date}</span>
            </div> 
            <div className="postTopRight">
                <MoreVert /> 
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={post.image} alt="" className="postCenterImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <ThumbUp className="likeIcon"  onClick={clickHandler} />
                <Favorite  className="likeIcon"  onClick={clickHandler} />
                <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postLikeComment">{post.comment} comments</span>
            </div>
        </div>
       </div>
    </div>
    );
}