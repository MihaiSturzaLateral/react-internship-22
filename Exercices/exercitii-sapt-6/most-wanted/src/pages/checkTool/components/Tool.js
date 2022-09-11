import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFlags } from "../../../redux/flags/FlagsActions";
import {
	loadRedReportsFiltered,
	loadYellowReportsFiltered,
} from "../../../redux/reports/ReportsActions";

const Tool = ({ childToParentList }) => {
	const { flags } = useSelector((state) => state.flags);
	let dispatch = useDispatch();
	const { filteredRedReports } = useSelector((state) => state.reports);
	const { filteredYellowReports } = useSelector((state) => state.reports);
	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	};
	const [filters, setFilters] = useState({
		firstName: "",
		lastName: "",
		nationality: "",
		minAge: 0,
		maxAge: 100,
		gender: "",
	});
	useEffect(() => {
		dispatch(loadFlags());
		dispatch(
			loadRedReportsFiltered(
				filters?.lastName,
				filters?.firstName,
				filters?.nationality,
				filters?.maxAge,
				filters?.minAge,
				filters?.gender
			)
		);
		dispatch(
			loadYellowReportsFiltered(
				filters?.lastName,
				filters?.firstName,
				filters?.nationality,
				filters?.maxAge,
				filters?.minAge,
				filters?.gender
			)
		);
	}, [dispatch, filters]);
	return (
		<div>
			<div className="card" style={{ height: 500, width: 500 }}>
				<div
					className="card-header"
					style={{ textAlign: "center", fontWeight: "bold", fontSize: 25 }}
				>
					Check Tool
				</div>
				<div className="card-body d-flex flex-column">
					<label style={{ marginBottom: 10, fontSize: 20, fontWeight: "bold" }}>
						First Name:
					</label>
					<input
						style={{ marginBottom: 20 }}
						onChange={(e) => {
							if (e.target.value !== null)
								setFilters({
									firstName: e.target.value,
									lastName: filters.lastName,
									nationality: filters.nationality,
									minAge: filters.minAge,
									maxAge: filters.maxAge,
									gender: filters.gender,
								});
						}}
					></input>
					<label style={{ marginBottom: 10, fontSize: 20, fontWeight: "bold" }}>
						Last Name:
					</label>
					<input
						style={{ marginBottom: 20 }}
						onChange={(e) => {
							if (e.target.value !== null)
								setFilters({
									firstName: filters.firstName,
									lastName: e.target.value,
									nationality: filters.nationality,
									minAge: filters.minAge,
									maxAge: filters.maxAge,
									gender: filters.gender,
								});
						}}
					></input>
					<div className="d-flex">
						<label
							style={{ marginBottom: 20, fontSize: 20, fontWeight: "bold" }}
						>
							Nationality:
						</label>
						<select
							id="nationality"
							name="nationality"
							className="form-select"
							style={{ marginLeft: 20, width: 200, height: 35 }}
							onChange={(e) => {
								if (e.target.value !== null)
									setFilters({
										firstName: filters.firstName,
										lastName: filters.lastName,
										nationality: e.target.value,
										minAge: filters.minAge,
										maxAge: filters.maxAge,
										gender: filters.gender,
									});
							}}
						>
							<option defaultValue=""></option>
							{Array.isArray(flags)
								? flags.map((el) => {
										return <option value={el?.code}>{el?.name}</option>;
								  })
								: null}
						</select>
					</div>

					<div>
						<div className="d-flex">
							<label style={{ fontSize: 20, fontWeight: "bold" }}>Age:</label>
							<div style={{ marginLeft: 71 }}>Min Age </div>
							<div style={{ marginLeft: 101 }}>Max Age</div>
						</div>
						<div className="d-flex justify-content-evenly">
							{filters.minAge}
							<input
								type="range"
								min="0"
								max="100"
								className="slider"
								onChange={(e) => {
									if (e.target.value !== null)
										setFilters({
											firstName: filters.firstName,
											lastName: filters.lastName,
											nationality: filters.nationality,
											minAge: e.target.value,
											maxAge: filters.maxAge,
											gender: filters.gender,
										});
								}}
							></input>
							<input
								type="range"
								min="0"
								max="100"
								className="slider"
								onChange={(e) => {
									if (e.target.value !== null)
										setFilters({
											firstName: filters.firstName,
											lastName: filters.lastName,
											nationality: filters.nationality,
											minAge: filters.minAge,
											maxAge: e.target.value,
											gender: filters.gender,
										});
								}}
							></input>
							{filters.maxAge}
						</div>
					</div>
					<div className="d-flex " style={{ marginTop: 30 }}>
						<label style={{ fontSize: 20, fontWeight: "bold" }}>Gender:</label>
						<select
							className="form-select"
							style={{ marginLeft: 20, width: 100 }}
							onChange={(e) => {
								if (e.target.value !== null)
									setFilters({
										firstName: filters.firstName,
										lastName: filters.lastName,
										nationality: filters.nationality,
										minAge: filters.minAge,
										maxAge: filters.maxAge,
										gender: e.target.value,
									});
							}}
						>
							<option selected></option>
							<option value="M">Male</option>
							<option value="F">Female</option>
						</select>
					</div>
				</div>
				<div className="card-footer d-flex justify-content-center">
					<button
						className="btn btn-danger"
						style={{ width: 150, fontWeight: "bold" }}
						onClick={() => {
							childToParentList(
								shuffleArray([
									...filteredRedReports?._embedded?.notices,
									...filteredYellowReports?._embedded?.notices,
								])
							);
						}}
					>
						Search
					</button>
				</div>
			</div>
		</div>
	);
};

export default Tool;
