import axios from "axios";

const myReportsLoad = (reports) => {
	return {
		type: "GET_REPORTS",
		payload: reports,
	};
};
export const loadMyReports = () => {
	return (dispatch) => {
		axios
			.get(`https://63034c269eb72a839d7d1f7e.mockapi.io/MyReports`)
			.then((res) => {
				dispatch(myReportsLoad(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

const myReportLoad = (report) => {
	return {
		type: "GET_SINGLE_REPORT",
		payload: report,
	};
};
export const loadMyReport = (id) => {
	return (dispatch) => {
		axios
			.get(`https://63034c269eb72a839d7d1f7e.mockapi.io/MyReports/${id}`)
			.then((res) => {
				dispatch(myReportLoad(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

const reportDelete = () => {
	return {
		type: "DELETE_REPORT",
	};
};
export const deleteReport = (id) => {
	return (dispatch) => {
		axios
			.delete(`https://63034c269eb72a839d7d1f7e.mockapi.io/MyReports/${id}`)
			.then((res) => {
				dispatch(reportDelete(res));
				dispatch(loadMyReports());
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

const reportAdd = () => {
	return {
		type: "ADD_report",
	};
};

export const addReport = (report) => {
	return (dispatch) => {
		axios.post(`https://63034c269eb72a839d7d1f7e.mockapi.io/MyReports`, report);
		dispatch(reportAdd());
		dispatch(loadMyReports());
	};
};

const reportUpdate = () => {
	return {
		type: "UPDATE_REPORT",
	};
};
export const updateReport = (report, id) => {
	return (dispatch) => {
		axios.put(
			`https://63034c269eb72a839d7d1f7e.mockapi.io/MyReports/${id}`,
			report
		);
		dispatch(reportUpdate());
		dispatch(loadMyReports());
	};
};
