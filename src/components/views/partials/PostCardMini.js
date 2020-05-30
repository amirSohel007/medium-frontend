import React from "react";
import { RiHeart2Line as HeartIcon } from "react-icons/ri";
import { FaRegCommentAlt as CommentIcon } from "react-icons/fa";
const PostCardMini = ({ img, name, date, title, preview, reaction, comment }) => {
	return (
		<div className="post-card mb-2 pb-2">
			<div className="row">
				<div className="img-holder">
					<img src={img} width={30} height={30} alt="Profile" />
				</div>
				<div className="meta-holder">
					<span className="name">{name}</span>
					<span className="date small text-muted">{date}</span>
				</div>
			</div>
			<div className="row">
				<h6 className="post-title mt-1">{title}</h6>
			</div>
			<div className="row">
				<div className="reactions-holder">
					<span className="heart">
						<HeartIcon /> {reaction}
					</span>
				</div>
				<div className="comments-holder">
					<span className="comment">
						<CommentIcon /> {comment}
					</span>
				</div>
			</div>
		</div>
	);
};

export default PostCardMini;
