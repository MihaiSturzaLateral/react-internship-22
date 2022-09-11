import React, { useEffect, useState } from "react";
import warningRed from "../../../components/photos/warningRed.png";
import warningYellow from "../../../components/photos/warningYellow.png";
import { Link } from "react-router-dom";
import { loadImages, loadReport } from "../../../redux/reports/ReportsActions";
import { useDispatch } from "react-redux";
const Card = (props) => {
	const [report, setReport] = useState({});

	let dispatch = useDispatch();
	useEffect(() => {
		setReport({
			firstName: props.report?.name,
			lastName: props.report?.forename,
			dateOfBirth: props.report?.date_of_birth,
			nationalities: props.report?.nationalities,
			noticeColor: props.report?._links?.self?.href?.includes("red")
				? "red"
				: "yellow",
			id: props.report?.entity_id?.replace("/", "-"),
		});
	}, [props.report]);

	return (
		<div className="card mb-3" style={{ maxWidth: 540 }}>
			<div className="row g-0">
				<div className="col-md-4">
					<div
						style={{
							height: 235,
							width: 210,
							backgroundColor: "grey",
							borderRadius: 6,
						}}
					>
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

						<div className="d-flex justify-content-center">
							<img
								src={props.report?._links?.thumbnail?.href}
								alt=""
								style={{ height: 150, width: 150, marginTop: 45 }}
							/>
						</div>
					</div>
				</div>
				<div className="col-md-8">
					<div className="card-body" style={{ paddingLeft: 35 }}>
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
								Nationalities:
								{report?.nationalities?.map((el) => {
									return (
										<img
											src={`https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/${el}.svg`}
											alt=""
											style={{ height: 30, width: 60 }}
										/>
									);
								})}
							</li>
						</ul>
					</div>
					<div
						className="d-flex justify-content-end"
						style={{ paddingRight: 10, paddingBottom: 10 }}
					>
						<Link
							to="/Details"
							state={{
								redOrYellow: report?.noticeColor,
								isCheckTool: true,
							}}
							onClick={() => {
								dispatch(loadReport(report.noticeColor, report.id));
								dispatch(loadImages(report.noticeColor, report.id));
							}}
						>
							<button className="btn btn-dark">View details</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
