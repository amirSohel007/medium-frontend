import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import axios from "axios";

const UserProfile = () => {
	const [userDetail, setUserDetail] = useState("");
	const apiURL = process.env.REACT_APP_API_URL;

	useEffect(() => {
		async function fetchData() {
			let res = await axios.get(`${apiURL}user/5ed39b93d9376f05c23b7d3b`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("authToken")}`,
				},
			});
			setUserDetail(res.data);
		}
		fetchData();
	});

	return (
		<Layout>
			<div className="row justify-content-center">
				<div className="col-sm-6 text-center">
					<div className="bg-white form-wrapper mt-5 p-4 border-radius-4">
						{userDetail && userDetail ? (
							<div>
								<h3>{userDetail.username}</h3>
								<p>Email : {userDetail.email}</p>
								<p>total posts {userDetail && userDetail.posts.length}</p>
								<p>total followers {userDetail.followers.length}</p>
								<p>total following {userDetail.following.length}</p>
							</div>
						) : (
							"Loading..."
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default UserProfile;
