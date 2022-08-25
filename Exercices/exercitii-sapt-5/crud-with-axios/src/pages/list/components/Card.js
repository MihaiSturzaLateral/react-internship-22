import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Card = (props) => {
	return (
		<div
			className="d-flex justify-content-between"
			style={{ marginLeft: 50, marginRight: 50 }}
		>
			<div className="d-flex flex-column">
				<button
					style={{
						fontWeight: !props.isVisible ? "bold" : "normal",
						height: 60,
						width: 287,
					}}
				>
					{props.id}
				</button>
			</div>
			<div className="d-flex flex-column">
				<button
					style={{
						fontWeight: !props.isVisible ? "bold" : "normal",
						height: 60,
						width: 287,
					}}
				>
					{props.name}
				</button>
			</div>
			<div className="d-flex flex-column">
				<button
					style={{
						fontWeight: !props.isVisible ? "bold" : "normal",
						height: 60,
						width: 287,
					}}
				>
					{props.email}
				</button>
			</div>
			<div className="d-flex flex-column">
				<button
					style={{
						fontWeight: !props.isVisible ? "bold" : "normal",
						height: 60,
						width: 287,
					}}
				>
					{props.message}
				</button>
			</div>
			<div className="d-flex flex-column">
				<label style={{ height: 60, width: 287 }}>
					{props.isVisible ? (
						<div>
							<Link to="/Update" state={{ id: props.id }}>
								<button
									className="btn btn-info btn-sm"
									style={{ marginRight: 10 }}
								>
									Update
								</button>
							</Link>
							<Link to="/List">
								<button
									className="btn btn-danger btn-sm"
									onClick={() => {
										axios.delete(
											`https://63034c269eb72a839d7d1f7e.mockapi.io/CrudWithAxios/${props.id}`
										);
									}}
								>
									Delete
								</button>
							</Link>
						</div>
					) : (
						<div
							style={{
								fontWeight: "bold",
							}}
						>
							Actions
						</div>
					)}
				</label>
			</div>
		</div>
	);
};

export default Card;
