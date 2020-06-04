import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Hashtag from "./partials/Hashtag";
import PostCard from "./partials/PostCard";
import profileImg from "./../../img/profile.jpg";
import axios from "axios";

function Home() {
	const [post, setPosts] = useState([]);
	const apiURL = process.env.REACT_APP_API_URL;

	const getPosts = async () => {
		let res = await axios.get(`${apiURL}posts`);
		setPosts(res.data);
	};

	useEffect(() => {
		getPosts();
	}, []);

	let postCard = post && post.map((post) => <PostCard key={post._id} img={profileImg} name="Amir Sohel" date="30 May 2020" title={post.title} preview={post.bodytext} reaction={post.likes} post={post._id} comment={post.comments} />);
	return (
		<Layout>
			<div className="main-container ptb-50">
				<div className="row">
					<div className="col-sm-3 mt-2">
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

					<div className="col-sm-6 mt-2 posts-holder">{postCard}</div>

					<div className="col-sm-3 mt-2 d-none d-sm-block">
						<div className="bg-white p-3 side-panel">{/* {postCardMini}
						{postCardMini}
						{postCardMini}
						{postCardMini}
						{postCardMini}
						{postCardMini} */}</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Home;
