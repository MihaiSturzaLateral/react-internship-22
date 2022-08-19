import React from "react";
import myPhoto from "./skype.png";
const Photo = () => {
	return (
		<img
			src={myPhoto}
			alt=""
			style={{ height: 200, borderRadius: 12, marginLeft: 200, marginTop: 40 }}
		></img>
	);
};

export default Photo;
