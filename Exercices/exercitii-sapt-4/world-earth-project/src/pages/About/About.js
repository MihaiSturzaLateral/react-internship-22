import React from "react";
import Title from "../../components/Title/Title";
import InfoText from "./components/InfoText/InfoText";
import Photo from "./components/Photo/Photo";
import DescriptionText from "./components/DescriptionText/DescriptionText";
const About = () => {
	return (
		<>
			<div className="d-flex flex-row">
				<div>
					<Title name={"About"} />
					<div className="d-flex ">
						<Photo />
						<InfoText />
					</div>
					<DescriptionText />
				</div>
			</div>
		</>
	);
};

export default About;
