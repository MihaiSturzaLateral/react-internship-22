import React, { useEffect } from "react";
import List from "../../components/list/List";
import PageHeader from "../../components/pageHeader/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { loadMyReports } from "../../redux/myReports/MyReportsActions";
import { loadFlags } from "../../redux/flags/FlagsActions";

const MyReports = () => {
	let dispatch = useDispatch();
	const { myReports } = useSelector((state) => state.myReports);
	useEffect(() => {
		dispatch(loadMyReports());
		dispatch(loadFlags());
	}, [dispatch, myReports]);

	return (
		<div>
			<PageHeader total={myReports.length} />
			<div style={{ height: 475, width: 1536 }}>
				<div
					className="d-flex flex-wrap "
					style={{
						height: 475,
						width: 1530,

						overflow: "auto",
					}}
				>
					<List list={myReports} />
				</div>
			</div>
		</div>
	);
};

export default MyReports;
