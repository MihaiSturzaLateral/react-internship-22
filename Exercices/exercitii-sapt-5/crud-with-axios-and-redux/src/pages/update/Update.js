import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/Actions";
const Update = () => {
	const location = useLocation();
	let dispatch = useDispatch();
	let regex = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

	const handleSubmit = (contact, id) => {
		dispatch(updateContact(contact, id));
	};

	const formik = useFormik({
		initialValues: {
			email: location.state.contact.email,
			name: location.state.contact.name,
			message: location.state.contact.message,
		},
		onSubmit: () => {
			alert("Message sent!");
			handleSubmit(formik.values, location.state.id);
		},
		onReset: () => {
			alert("Reset form!");
		},
		validate: (values) => {
			let errors = {};
			if (!values.email) {
				errors.email = "*Required*";
			} else if (!values.email.match(regex)) {
				errors.email = "*Invalid email format*";
			}
			if (!values.name) {
				errors.name = "*Required*";
			}
			if (!values.message) {
				errors.message = "*Required*";
			}
			return errors;
		},
	});

	return (
		<div>
			<Link to="/List">
				<button
					className="btn btn-light"
					style={{
						marginLeft: 1450,
						marginTop: -85,
						position: "relative",
						fontWeight: "bold",
					}}
				>
					Back
				</button>
			</Link>
			<div style={{ marginTop: 80, marginLeft: 400 }}>
				<div
					className="card"
					style={{
						width: 700,
					}}
				>
					<div
						className="card-header text-center "
						style={{
							width: 700,
							color: "black",
							fontWeight: "bold",
							fontSize: 25,
						}}
					>
						Update entry:
					</div>
					<form
						onSubmit={formik.handleSubmit}
						onReset={formik.handleReset}
						style={{ width: 700 }}
					>
						<div>
							<label htmlFor="email" className="d-flex">
								<div
									style={{
										fontWeight: "bold",
										marginLeft: 10,
										marginBottom: 10,
									}}
								>
									E-mail:
								</div>
								<div
									style={{
										color: "red",
										fontSize: 10,
										marginTop: 6,
										marginLeft: 10,
									}}
								>
									{formik.errors.email ? (
										<div className="error">{formik.errors.email}</div>
									) : null}
								</div>
							</label>
							<input
								type="text"
								id="email"
								name="email"
								onChange={formik.handleChange}
								value={formik.values.email}
								style={{ marginLeft: 15, width: 670 }}
							/>

							<label htmlFor="name" className="d-flex">
								<div
									style={{
										fontWeight: "bold",
										marginLeft: 10,
										marginBottom: 10,
									}}
								>
									Name:
								</div>
								<div
									style={{
										color: "red",
										fontSize: 10,
										marginTop: 6,
										marginLeft: 10,
									}}
								>
									{formik.errors.name ? (
										<div className="error">{formik.errors.name}</div>
									) : null}
								</div>
							</label>

							<input
								type="text"
								id="name"
								name="name"
								onChange={formik.handleChange}
								value={formik.values.name}
								style={{ marginLeft: 15, width: 670 }}
							/>

							<label htmlFor="message" className="d-flex">
								<div
									style={{
										fontWeight: "bold",
										marginLeft: 10,
										marginBottom: 10,
									}}
								>
									Message:
								</div>
								<div
									style={{
										color: "red",
										fontSize: 10,
										marginTop: 6,
										marginLeft: 10,
									}}
								>
									{formik.errors.message ? (
										<div className="error">{formik.errors.message}</div>
									) : null}
								</div>
							</label>

							<input
								type="text"
								id="message"
								name="message"
								onChange={formik.handleChange}
								value={formik.values.message}
								style={{
									marginLeft: 15,
									width: 670,
									marginBottom: 15,
									height: 100,
								}}
							/>
						</div>
						<div
							className="card-footer text-center d-flex justify-content-end"
							style={{ color: "white", fontWeight: "bold", fontSize: 25 }}
						>
							<button
								className="btn btn-secondary"
								type="reset"
								style={{
									marginTop: 25,
									marginRight: 5,

									height: 50,
								}}
							>
								Reset form
							</button>

							<button
								className="btn btn-success"
								type="submit"
								style={{
									marginTop: 25,
									height: 50,

									color: "white",
								}}
							>
								Update entry
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Update;
