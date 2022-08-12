import React from "react";
import { Link } from "react-router-dom";

function PageElements(props) {
	const myStyle = {
		backgroundImage: `url(${props.url})`,
		height: 643,
		fontSize: "50px",
		zIndex: "1",
		position: "sticky",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	};

	return (
		<div style={myStyle}>
			<p
				className="text-center position-absolute top-50 start-50 translate-middle"
				style={{ color: "white", zIndex: "2" }}
			>
				Hello Bogdan!
			</p>
			<Link to="/Photospage">
				<button
					type="button"
					className="btn position-absolute bottom-0 end-0 btn-outline-warning btn-lg "
				>
					Photos
				</button>
			</Link>
		</div>
	);
}

export default PageElements;
