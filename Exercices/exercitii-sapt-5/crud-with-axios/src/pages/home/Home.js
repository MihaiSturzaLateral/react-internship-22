import React from "react";
import { useFormik } from "formik";
import axios from "axios";
const Home = () => {
	let regex = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

	const formik = useFormik({
		initialValues: {
			id: "",
			email: "",
			name: "",
			message: "",
		},
		onSubmit: (values) => {
			alert("Message sent!");
			axios.post(`https://63034c269eb72a839d7d1f7e.mockapi.io/CrudWithAxios`, {
				id: formik.values.id,
				name: formik.values.name,
				email: formik.values.email,
				message: formik.values.message,
			});
		},
		onReset: (values) => {
			alert("Reset form!");
		},
		validate: (values) => {
			let errors = {};
			if (!values.id) {
				errors.id = "*Required*";
			}
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
		<div style={{ marginTop: 100, marginLeft: 400 }}>
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
					Create entry:
				</div>
				<form
					onSubmit={formik.handleSubmit}
					onReset={formik.handleReset}
					style={{ width: 700 }}
				>
					<div>
						<label htmlFor="id" className="d-flex">
							<div
								style={{ fontWeight: "bold", marginLeft: 10, marginBottom: 10 }}
							>
								Id:
							</div>
							<div
								style={{
									color: "red",
									fontSize: 10,
									marginTop: 6,
									marginLeft: 10,
								}}
							>
								{formik.errors.id ? (
									<div className="error">{formik.errors.id}</div>
								) : null}
							</div>
						</label>
						<input
							type="text"
							id="id"
							name="id"
							onChange={formik.handleChange}
							value={formik.values.id}
							style={{ marginLeft: 15, width: 670 }}
						/>
						<label htmlFor="email" className="d-flex">
							<div
								style={{ fontWeight: "bold", marginLeft: 10, marginBottom: 10 }}
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
								style={{ fontWeight: "bold", marginLeft: 10, marginBottom: 10 }}
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
								style={{ fontWeight: "bold", marginLeft: 10, marginBottom: 10 }}
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
							Add entry
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Home;
