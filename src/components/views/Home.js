import React from "react";
import Layout from "./Layout";

function Home() {
	return (
		<Layout>
			<div className="main-container ptb-50">
				<div className="row">
					<div class="col-sm-3">
						<div className="bg-white p-3 side-panel">
							<p>Category sidebar</p>
						</div>
					</div>

					<div class="col-sm-6">
						<div className="bg-white p-3 side-panel">
							<p>Posts goes here.....</p>
						</div>
					</div>

					<div class="col-sm-3">
						<div className="bg-white p-3 side-panel">
							<p>Recent sidebar</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Home;
