import React from "react";
import { Link } from "react-router-dom";
const Hashtag = ({tag,count}) => {
	return (
		<Link to={`tag/${tag}`} className="hashtag">
			<span className="tag">{tag}</span>
			<span className="tag-count">{count}</span>
		</Link>
	);
};

export default Hashtag;
