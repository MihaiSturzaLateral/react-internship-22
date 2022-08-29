import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/Actions";

const Card = (props) => {
	let dispatch = useDispatch();
	const handleDelete = (id) => {
		dispatch(deleteContact(id));
	};
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
				<button style={{ height: 60, width: 287 }}>
					{props.isVisible ? (
						<div>
							<Link
								to="/Update"
								state={{
									id: props.id,
									contact: {
										email: props.email,
										name: props.name,
										message: props.message,
									},
								}}
							>
								<button
									className="btn btn-info btn-sm"
									style={{ marginRight: 10 }}
								>
									Update
								</button>
							</Link>
							<button
								className="btn btn-danger btn-sm"
								onClick={() => handleDelete(props.id)}
							>
								Delete
							</button>
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
				</button>
			</div>
		</div>
	);
};

export default Card;
