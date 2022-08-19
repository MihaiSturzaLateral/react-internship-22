import React from "react";
const Buttons = ({ childToParentDetail, childToParentMag }) => {
	return (
		<div className="d-flex" style={{ marginLeft: 40, marginTop: 55 }}>
			<div className="btn-group" role="group" aria-label="Basic example">
				<button
					type="button"
					className="btn btn-success"
					onClick={() => {
						childToParentDetail("hour");
						childToParentMag("all");
					}}
				>
					Past Hour
				</button>
				<button
					type="button"
					className="btn btn-success"
					onClick={() => {
						childToParentDetail("day");
						childToParentMag("all");
					}}
				>
					Past Day
				</button>
				<button
					type="button"
					className="btn btn-success"
					onClick={() => {
						childToParentDetail("week");
						childToParentMag("all");
					}}
				>
					Past 7 Days
				</button>
				<button
					type="button"
					className="btn btn-success"
					onClick={() => {
						childToParentDetail("month");
						childToParentMag("all");
					}}
				>
					Past 30 Days
				</button>
			</div>
			<div className="btn-group dropend" style={{ marginLeft: 200 }}>
				<button
					type="button"
					className="btn btn-success dropdown-toggle"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Magnitude
				</button>
				<ul className="dropdown-menu dropdown-menu-dark">
					<li>
						<button
							className="dropdown-item"
							onClick={() => {
								childToParentMag("all");
							}}
						>
							Any
						</button>
					</li>
					<li>
						<button
							className="dropdown-item"
							onClick={() => {
								childToParentMag(4.5);
							}}
						>
							4.5+
						</button>
					</li>
					<li>
						<button
							className="dropdown-item"
							onClick={() => {
								childToParentMag(2.5);
							}}
						>
							2.5+
						</button>
					</li>
					<li>
						<button
							className="dropdown-item"
							onClick={() => {
								childToParentMag(1);
							}}
						>
							1+
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Buttons;
