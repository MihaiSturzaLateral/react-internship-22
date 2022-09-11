import axios from "axios";

const flagsLoad = (flags) => {
	return {
		type: "GET_FLAGS",
		payload: flags,
	};
};
export const loadFlags = () => {
	return (dispatch) => {
		axios
			.get(
				`https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json`
			)
			.then((res) => {
				dispatch(flagsLoad(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
