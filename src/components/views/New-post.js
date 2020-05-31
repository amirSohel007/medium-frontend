import React, { useState } from "react";
import Layout from "./Layout";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NewPost = () => {

	const [title, setTitle] = useState("");
    const [bodytext, setBodyText] = useState("");
    const [processing, setProcessing] = useState(false);
	const history = useHistory();

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQzOWI5M2Q5Mzc2ZjA1YzIzYjdkM2IiLCJpYXQiOjE1OTA5NDUxODd9.CM1EcckqC8MlmnukwUz98QxkBhVTqP-s4FMxKwPFSN8' 
    }

	const submitArticle = async (e) => {
		e.preventDefault();
		const postData = { title, bodytext };
        const apiURL = process.env.REACT_APP_API_URL;
        setProcessing(true)
        let res = await axios.post(`${apiURL}new-post`, postData,  {"headers" : headers});
        if (res.data){
            setProcessing(false)
            history.push("/")
        }
	};

	return (
		<Layout>
			<section className="article-wrapper ptb-50">
				<div className="row">
					<div className="col-sm-12">
						<h3 className="article-title">Create New Article</h3>
						<p>Create new post and take advantage of platfrom to spread knowladge</p>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-9">
						<div className="post-form-wrapper">
							<form>
								<input type="text" placeholder="Enter title" className="article-form title-field" value={title} onChange={(e) => setTitle(e.target.value)} />
								<textarea className="article-form body-field" value={bodytext} onChange={(e) => setBodyText(e.target.value)} />
								<button className="btn btn-primary" onClick={submitArticle}>
                                {processing ? "Publishing...." : "Publish Post"}	
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default NewPost;
