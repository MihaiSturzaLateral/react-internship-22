import React from "react";
import { Link, useLocation } from "react-router-dom";
import back from "./back.png";
import warningRed from "../../components/photos/warningRed.png";
import warningYellow from "../../components/photos/warningYellow.png";
import DetailsList from "./components/DetailsList";
import { useSelector } from "react-redux";
const Details = () => {
	const location = useLocation();
	const noData = " * no data *";
	const { singleReport } = useSelector((state) => state.reports);
	const { images } = useSelector((state) => state.reports);
	console.log(images);
	return (
		<div>
			<div className="d-flex">
				<Link
					to={location.state.isCheckTool ? "/CheckTool" : "/"}
					style={{
						color: "transparent",
					}}
				>
					{location.state.redOrYellow === "red" ? (
						<button
							className=" btn btn-danger d-flex"
							style={{
								marginLeft: 50,
								marginTop: 30,
								height: 35,
								width: 70,
								paddingTop: 1,
								paddingLeft: 3,
								textAlign: "center",
								alignItems: "center",
							}}
						>
							<img
								src={back}
								alt=""
								style={{ height: 20, width: 20, paddingTop: 4 }}
							/>
							<div
								style={{ paddingTop: 2, fontWeight: "bold", color: "black" }}
							>
								Back
							</div>
						</button>
					) : (
						<button
							className=" btn btn-warning d-flex"
							style={{
								marginLeft: 50,
								marginTop: 30,
								height: 35,
								width: 70,
								paddingTop: 1,
								paddingLeft: 3,
								textAlign: "center",
								alignItems: "center",
							}}
						>
							<img
								src={back}
								alt=""
								style={{ height: 20, width: 20, paddingTop: 4 }}
							/>
							<div
								style={{ paddingTop: 2, fontWeight: "bold", color: "black" }}
							>
								Back
							</div>
						</button>
					)}
				</Link>
			</div>
			<div className="d-flex justify-content-between">
				{location.state.redOrYellow === "red" ? (
					<label
						style={{
							height: 50,
							marginTop: 20,
							marginLeft: 100,
							paddingLeft: 20,
							paddingRight: 20,
							paddingTop: 4,
							borderRadius: 6,
							backgroundColor: "#dc3545",
							fontSize: 25,
							fontWeight: "bold",
						}}
					>
						Red notice on: {singleReport?.forename} {singleReport?.name}
					</label>
				) : (
					<label
						style={{
							height: 50,
							marginTop: 20,
							marginLeft: 100,
							paddingLeft: 20,
							paddingRight: 20,
							paddingTop: 4,
							borderRadius: 6,
							backgroundColor: "#ffc107",
							fontSize: 25,
							fontWeight: "bold",
						}}
					>
						Yellow notice on: {singleReport?.forename} {singleReport?.name}
					</label>
				)}
				<div>
					<img
						src={
							location.state.redOrYellow === "red" ? warningRed : warningYellow
						}
						alt=""
						style={{ height: 40, width: 45, marginRight: 10 }}
					/>
					<label
						style={{
							height: 50,
							marginTop: 20,
							paddingLeft: 10,
							paddingRight: 10,
							paddingTop: 4,
							borderRadius: 6,
							backgroundColor:
								location.state.redOrYellow === "red" ? "#dc3545" : "#ffc107",
							fontSize: 25,
							fontWeight: "bold",
						}}
					>
						Arrest warrants:
					</label>
					<img
						src={
							location.state.redOrYellow === "red" ? warningRed : warningYellow
						}
						alt=""
						style={{ height: 40, width: 45, marginLeft: 10, marginRight: 100 }}
					/>
				</div>
			</div>

			<div
				className="d-flex justify-content-between"
				style={{ marginLeft: 80, marginTop: 30 }}
			>
				<div className="d-flex">
					<DetailsList
						item1="Eyes color:"
						item2="Weight:"
						item3="Height:"
						item4="Gender:"
						item5="Date of birth:"
						item6="Country of birth:"
						item7="Place of birth:"
						item8="Nationalities:"
					/>
					<DetailsList
						item1={singleReport?.eyes_colors_id}
						item2={singleReport?.weight}
						item3={singleReport?.height}
						item4={singleReport?.sex_id}
						item5={singleReport?.date_of_birth}
						item6={
							<img
								src={`https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/${singleReport?.country_of_birth_id}.svg`}
								alt=""
								style={{ height: 30, width: 60 }}
							/>
						}
						item7={singleReport?.place_of_birth}
						item8={singleReport?.nationalities?.map((el) => {
							return (
								<img
									src={`https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/${el}.svg`}
									alt=""
									style={{ height: 30, width: 60 }}
								/>
							);
						})}
					/>
					<div
						style={{
							width: 320,
							height: 320,
							marginLeft: 100,
							backgroundColor: "	",
						}}
					>
						<div
							id="carousel"
							className="carousel carousel-dark slide"
							style={{ width: 320, height: 320 }}
							data-bs-ride="carousel"
						>
							<div className="carousel-indicators">
								{images?._embedded?.images?.map((el, index) => {
									return (
										<button
											type="button"
											className="active"
											data-bs-target="#carousel"
											data-bs-slide-to={index}
										></button>
									);
								})}
							</div>
							<div className="carousel-inner">
								{images?._embedded?.images?.map((el, index) => {
									return (
										<div
											className={
												index === 0 ? "carousel-item active" : "carousel-item"
											}
										>
											<img
												src={el?._links?.self?.href}
												className="d-block w-100"
												style={{ width: 320, height: 320 }}
												alt="..."
											/>
										</div>
									);
								})}
							</div>
							<button
								className="carousel-control-prev"
								type="button"
								data-bs-target="#carousel"
								data-bs-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">Previous</span>
							</button>
							<button
								className="carousel-control-next"
								type="button"
								data-bs-target="#carousel"
								data-bs-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">Next</span>
							</button>
						</div>
						{/* <img
							src={singleReport?._links?.thumbnail?.href}
							alt=""
							style={{ width: 320, height: 320 }}
						/> */}
					</div>
				</div>
				<div className="">
					<div
						className="card "
						style={{
							width: 320,
							height: 320,
							marginRight: 100,
						}}
					>
						<div className="card-header d-flex">
							Issuing country:
							<div
								style={{
									fontStyle:
										location.state.redOrYellow === "yellow"
											? "italic"
											: "normal",
								}}
							>
								{location.state.redOrYellow === "yellow"
									? noData
									: singleReport?.arrest_warrants?.map((el) => {
											return el?.issuing_country_id;
									  })}
							</div>
						</div>
						<div className="card-body" style={{ overflow: "auto" }}>
							<h5 className="card-title">CHARGE WITH: </h5>
							<div
								className="card-text"
								style={{
									fontStyle:
										location.state.redOrYellow === "yellow"
											? "italic"
											: "normal",
								}}
							>
								{location.state.redOrYellow === "yellow"
									? noData
									: singleReport?.arrest_warrants?.map((el) => {
											return el?.charge;
									  })}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
