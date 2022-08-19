import React from "react";
const DescriptionText = () => {
	return (
		<div
			className="card"
			style={{
				marginLeft: 200,
				marginRight: 200,
				marginTop: 50,
				marginBottom: 50,
				width: 1105,
			}}
		>
			<div className="card-body" style={{ fontSize: 20 }}>
				<p className="card-text" style={{ height: 120 }}>
					I am studying Computer Science in Cluj-Napoca, looking for a lot of
					opportunities to get work experience. I am a hardworking person
					willing to learn a lot of new things which would help me in my future
					career. I am a sociable person, being able to get used to new people
					quickly and eventually to make them my friends. I am a well-organized
					person and this helps me to do my work always on time.
				</p>
			</div>
		</div>
	);
};

export default DescriptionText;
