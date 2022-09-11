import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageHeader from "../../components/pageHeader/PageHeader";
import {
	loadRedReports,
	loadYellowReports,
} from "../../redux/reports/ReportsActions";

import List from "../../components/list/List";

const Home = () => {
	let dispatch = useDispatch();
	const [pageIndex, setIndex] = useState(1);
	const [filter, setFilter] = useState("red");
	const childToParentFilter = (childFilter) => {
		setFilter(childFilter);
		setIndex(1);
	};

	useEffect(() => {
		dispatch(loadRedReports(1));
		dispatch(loadYellowReports(1));
	}, [dispatch, filter]);

	const { redReports } = useSelector((state) => state.reports);
	const { yellowReports } = useSelector((state) => state.reports);

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	};
	let array = [1, 2, 3, 4, 5, 6, 7, 8];

	return (
		<div>
			<PageHeader childToParentFilter={childToParentFilter} />
			<div style={{ height: 475, width: 1536 }}>
				<div
					className="d-flex flex-wrap"
					style={{
						height: 485,
						width: 1530,
						overflow: "auto",
					}}
				>
					<List
						list={
							filter === "red"
								? redReports?._embedded?.notices
								: filter === "yellow"
								? yellowReports?._embedded?.notices
								: shuffleArray([
										...redReports?._embedded?.notices,
										...yellowReports?._embedded?.notices,
								  ])
						}
					/>
					{filter && (
						<div style={{ marginLeft: 560, marginTop: 45 }}>
							<nav style={{ width: 368 }}>
								<ul className="pagination " style={{ height: 38, width: 368 }}>
									<li className="page-item ">
										<button
											style={{
												backgroundColor: "black",
												color: "white",
												borderRadius: 6,
												width: 35,
												height: 35,
											}}
											onClick={() => {
												if (filter === "red")
													dispatch(loadRedReports(pageIndex - 1));
												if (filter === "yellow")
													dispatch(loadYellowReports(pageIndex - 1));
												if (filter === "all") {
													dispatch(loadRedReports(pageIndex - 1));
													dispatch(loadYellowReports(pageIndex - 1));
												}
												setIndex(pageIndex - 1);
											}}
										>
											&laquo;
										</button>
									</li>
									{array.map((el, index) => {
										return (
											<li className="page-item">
												<button
													style={{
														backgroundColor: "black",
														color: "white",
														borderRadius: 6,
														width: 35,
														height: 35,
														marginLeft: 2,
													}}
													onClick={() => {
														setIndex(index + 1);
														if (filter === "red")
															dispatch(loadRedReports(index + 1));
														if (filter === "yellow")
															dispatch(loadYellowReports(index + 1));
														if (filter === "all") {
															dispatch(loadRedReports(index + 1));
															dispatch(loadYellowReports(index + 1));
														}
													}}
												>
													{index + 1}
												</button>
											</li>
										);
									})}

									<li className="page-item">
										<button
											style={{
												backgroundColor: "black",
												color: "white",
												borderRadius: 6,
												width: 35,
												height: 35,
												marginLeft: 2,
											}}
											onClick={() => {
												if (filter === "red")
													dispatch(loadRedReports(pageIndex + 1));
												if (filter === "yellow")
													dispatch(loadYellowReports(pageIndex + 1));
												if (filter === "all") {
													dispatch(loadRedReports(pageIndex + 1));
													dispatch(loadYellowReports(pageIndex + 1));
												}
												setIndex(pageIndex + 1);
											}}
										>
											&raquo;
										</button>
									</li>
								</ul>
							</nav>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
