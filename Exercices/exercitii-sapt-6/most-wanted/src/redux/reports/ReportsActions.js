import axios from "axios";

const redReportsLoad = (reports) => {
	return {
		type: "GET_RED_REPORTS",
		payload: reports,
	};
};
export const loadRedReports = (page) => {
	return (dispatch) => {
		axios
			.get(
				`https://ws-public.interpol.int/notices/v1/red?page=${page}&resultPerPage=20`
			)
			.then((res) => {
				dispatch(redReportsLoad(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
const yellowReportsLoad = (reports) => {
	return {
		type: "GET_YELLOW_REPORTS",
		payload: reports,
	};
};
export const loadYellowReports = (page) => {
	return (dispatch) => {
		axios
			.get(
				`https://ws-public.interpol.int/notices/v1/yellow?page=${page}&resultPerPage=20`
			)
			.then((res) => {
				dispatch(yellowReportsLoad(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
const reportLoad = (report) => {
	return {
		type: "GET_REPORT",
		payload: report,
	};
};
export const loadReport = (color, id) => {
	return (dispatch) => {
		axios
			.get(`https://ws-public.interpol.int/notices/v1/${color}/${id}`)
			.then((res) => {
				dispatch(reportLoad(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
const imagesLoad = (images) => {
	return {
		type: "GET_IMAGES",
		payload: images,
	};
};
export const loadImages = (color, id) => {
	return (dispatch) => {
		axios
			.get(`https://ws-public.interpol.int/notices/v1/${color}/${id}/images`)
			.then((res) => {
				dispatch(imagesLoad(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
const filteredRedReportsLoad = (reports) => {
	return {
		type: "GET_RED_REPORTS_FILTERED",
		payload: reports,
	};
};
export const loadRedReportsFiltered = (
	firstName,
	lastName,
	nationality,
	ageMax,
	ageMin,
	gender
) => {
	return (dispatch) => {
		axios
			.get(
				`https://ws-public.interpol.int/notices/v1/red?forename=${firstName}&name=${lastName}&nationality=${nationality}&ageMax=${ageMax}&ageMin=${ageMin}&sexId=${gender}`
			)
			.then((res) => {
				dispatch(filteredRedReportsLoad(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
const filteredYellowReportsLoad = (reports) => {
	return {
		type: "GET_YELLOW_REPORTS_FILTERED",
		payload: reports,
	};
};
export const loadYellowReportsFiltered = (
	firstName,
	lastName,
	nationality,
	ageMax,
	ageMin,
	gender
) => {
	return (dispatch) => {
		axios
			.get(
				`https://ws-public.interpol.int/notices/v1/yellow?forename=${firstName}&name=${lastName}&nationality=${nationality}&ageMax=${ageMax}&ageMin=${ageMin}&sexId=${gender}`
			)
			.then((res) => {
				dispatch(filteredYellowReportsLoad(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
