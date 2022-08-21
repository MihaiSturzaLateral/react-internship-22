import React, { useState } from "react";
const Search = ({ childToParentSearchInput }) => {
	const [inputText, setInputText] = useState("");
	const inputHandler = (e) => {
		setInputText(e.target.value.toLowerCase());
	};
	return (
		<div
			className="d-flex "
			role="search"
			style={{ marginTop: -47, marginLeft: 1250, position: "absolute" }}
		>
			<input
				className=" me-2"
				type="search"
				placeholder="Search"
				aria-label="Search"
				style={{ backgroundColor: "#F1FFFA" }}
				onChange={inputHandler}
			/>
			<button
				className="btn "
				type="submit"
				style={{
					color: "#404040",
					fontWeight: "bold",
					backgroundColor: "#F1FFFA",
				}}
				onClick={() => {
					childToParentSearchInput(inputText);
				}}
			>
				Search
			</button>
		</div>
	);
};

export default Search;
