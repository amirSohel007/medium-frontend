import React from "react";

const Tag = ({ match }) => {
	return (
		<div className="container m-auto p-5 text-center">
			<h2>
				Tag:
				{match.params.tag}
			</h2>
		</div>
	);
};

export default Tag;
