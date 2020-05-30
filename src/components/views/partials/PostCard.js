import React from 'react'
import { RiHeart2Line as HeartIcon } from "react-icons/ri";
import { FaRegCommentAlt as CommentIcon } from "react-icons/fa";
const PostCard = ({img,name,date,title,preview,reaction,comment}) => {


    return (
        <div className="post-card mb-4">
            <div className="row">
                <div className="img-holder">
                    <img src={img} width={30} height={30} alt="Profile"/>
                </div>
                <div className="meta-holder">
                    <span className="name">{name}</span>
                    <span className="date small text-muted">{date}</span>
                </div>
            </div>
            <div className="row">
                <h4 className="post-title">{title}</h4>
                <p className="post-preview">{preview}</p>
            </div>
            <div className="row">
                <div className="reactions-holder">
                    <span className="heart"><HeartIcon/></span>
                    <span className="heart-context">{reaction} reactions</span>
                </div>
                <div className="comments-holder">
                    <span className="comment"><CommentIcon/></span>
                    <span className="comment-context">{comment} comments</span>
                </div>
            </div>
        </div>
    )
}

export default PostCard
