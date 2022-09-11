import React, { useState } from "react";
import { useSelector } from "react-redux";
import List from "./components/List";
import Tool from "./components/Tool";
const CheckTool = () => {
	const [list, setList] = useState([]);
	const childToParentList = (childList) => {
		setList(childList);
	};

	const { filteredRedReports } = useSelector((state) => state.reports);
	const { filteredYellowReports } = useSelector((state) => state.reports);

	return (
		<div>
			<div
				className="d-flex justify-content-between"
				style={{ paddingTop: 50, paddingRight: 100, paddingLeft: 100 }}
			>
				<div style={{ height: 500, width: 500 }}>
					<Tool childToParentList={childToParentList} />
				</div>
				<div style={{ marginTop: -30 }}>
					<div>
						<label
							style={{
								backgroundColor: "black",
								color: "white",
								height: 60,
								width: 400,
								marginLeft: 110,
								paddingTop: 4,
								borderRadius: 6,
								textAlign: "center",
								alignItems: "center",
								fontWeight: "bold",
								fontSize: 35,
							}}
						>
							RESULTS: {filteredRedReports.total + filteredYellowReports.total}
						</label>
					</div>
					<div
						style={{
							backgroundColor: "black",
							height: 460,
							width: 620,
							marginTop: 10,
							paddingTop: 10,
							paddingLeft: 10,
						}}
					>
						<div
							style={{
								paddingTop: 10,
								overflow: "auto",
								height: 440,
								width: 600,
							}}
						>
							<div style={{ paddingLeft: 20 }}>
								<List list={list} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckTool;
