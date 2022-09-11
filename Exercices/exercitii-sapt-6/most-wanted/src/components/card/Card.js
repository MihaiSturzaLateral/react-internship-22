import React, { useEffect, useState } from "react";
import warningRed from "../photos/warningRed.png";
import warningYellow from "../photos/warningYellow.png";
import man from "./man.png";
import woman from "./woman.jpg";
import x from "./x.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
	deleteReport,
	loadMyReport,
} from "../../redux/myReports/MyReportsActions";
import { loadImages, loadReport } from "../../redux/reports/ReportsActions";

import ModalEdit from "../modal/ModalEdit";

const Card = (props) => {
	const location = useLocation();
	const [report, setReport] = useState({});

	let dispatch = useDispatch();
	const handleDelete = (id) => {
		dispatch(deleteReport(id));
	};

	useEffect(() => {
		location.pathname === "/MyReports"
			? setReport({
					firstName: props.report.firstName,
					lastName: props.report.lastName,
					dateOfBirth: props.report.dateOfBirth,
					nationalities: props.report?.nationality,
					noticeColor: props.report.noticeColor,
					gender: props.report.gender,
					id: props.report.id,
			  })
			: setReport({
					firstName: props.report?.name,
					lastName: props.report?.forename,
					dateOfBirth: props.report?.date_of_birth,
					nationalities: props.report?.nationalities,
					noticeColor: props.report?._links?.self?.href?.includes("red")
						? "red"
						: "yellow",
					id: props.report?.entity_id?.replace("/", "-"),
			  });
	}, [location, props.report, props.color]);

	return (
		<div
			className="card"
			style={{ width: 300, marginLeft: 40, marginRight: 38, marginTop: 10 }}
		>
			<div style={{ height: 200, width: 299, backgroundColor: "grey" }}>
				<div className="d-flex justify-content-between">
					<img
						src={report.noticeColor === "red" ? warningRed : warningYellow}
						alt=""
						style={{
							height: 30,
							width: 35,
							marginLeft: 15,
							marginTop: 10,
							position: "absolute",
						}}
					/>
					{location.pathname !== "/" ? (
						<img
							src={x}
							alt=""
							style={{
								height: 30,
								width: 30,
								marginLeft: 260,
								marginRight: 15,
								marginTop: 10,
								cursor: "pointer",
								position: "absolute",
							}}
							onClick={() => handleDelete(props.report.id)}
						/>
					) : null}
				</div>
				<div className="d-flex justify-content-center">
					<img
						src={
							location.pathname === "/"
								? props.report?._links?.thumbnail?.href
								: report.gender === "male"
								? man
								: woman
						}
						alt=""
						style={{ height: 150, width: 150, marginTop: 25 }}
					/>
				</div>
			</div>
			<div className="card-body">
				<h5 className="card-title" style={{ marginLeft: 15 }}>
					{report.firstName} {report.lastName}
				</h5>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						Date of birth: {report.dateOfBirth}
					</li>
					<li className="list-group-item">
						Age:
						{new Date().getFullYear() -
							new Date(report.dateOfBirth).getFullYear()}
					</li>
					<li className="list-group-item d-flex flex-row">
						Nationalities:{" "}
						{location.pathname === "/" ? (
							report?.nationalities?.map((el) => {
								return (
									<img
										src={`https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/${el}.svg`}
										alt=""
										style={{ height: 35, width: 70 }}
									/>
								);
							})
						) : (
							<img
								src={`https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/${report.nationalities}.svg`}
								alt=""
								style={{ height: 35, width: 70 }}
							/>
						)}
					</li>
				</ul>
			</div>
			<div className="card-footer d-flex justify-content-center">
				{location.pathname === "/" ? (
					<Link
						to="/Details"
						state={{
							redOrYellow: report?.noticeColor,
							isCheckTool: false,
						}}
						onClick={() => {
							dispatch(loadReport(report.noticeColor, report.id));
							dispatch(loadImages(report.noticeColor, report.id));
						}}
					>
						<button className="btn btn-dark">View more info</button>
					</Link>
				) : (
					<div>
						<button
							className="btn btn-dark"
							data-bs-toggle="modal"
							data-bs-target="#ModalEdit"
							onClick={() => {
								dispatch(loadMyReport(report?.id));
							}}
						>
							Edit info
						</button>
						<ModalEdit report={report} />
					</div>
				)}
			</div>
		</div>
	);
};

export default Card;
