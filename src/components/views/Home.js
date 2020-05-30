import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import Hashtag from "./partials/Hashtag";
import PostCard from "./partials/PostCard";
import PostCardMini from "./partials/PostCardMini";
import profileImg from "./../../img/profile.jpg";
function Home() {
	let title = "10 Javascript Quiz Questions and answers to sharpen your skill.";
	let preview = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
	when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;
	let postCard = <PostCard img={profileImg} name="Amir Sohel" date="30 May 2020" title={title} preview={preview} reaction={34} comment={98} />;
	let postCardMini = <PostCardMini img={profileImg} name="Amir Sohel" date="30 May 2020" title={title} preview={preview} reaction={34} comment={98} />;
	return (
		<Layout>
			<div className="main-container ptb-50">
				<div className="row">
					<div className="col-sm-3">
						<div className="bg-white p-3 side-panel">
							<h5 className="">Trending</h5>
							<Hashtag tag="Buisness" count={10} />
							<Hashtag tag="Food" count={13} />
							<Hashtag tag="Health" count={34} />
							<Hashtag tag="Travel" count={11} />
							<Hashtag tag="Buisness" count={10} />
							<Hashtag tag="Food" count={13} />
							<Hashtag tag="Health" count={34} />
							<Hashtag tag="Travel" count={11} />
							<Hashtag tag="Buisness" count={10} />
						</div>
					</div>

					<div className="col-sm-6 posts-holder">
						{postCard}
						{postCard}
						{postCard}
						{postCard}
						{postCard}
					</div>

					<div className="col-sm-3">
						{postCardMini}
						{postCardMini}
						{postCardMini}
						{postCardMini}
						{postCardMini}
						{postCardMini}
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Home;
