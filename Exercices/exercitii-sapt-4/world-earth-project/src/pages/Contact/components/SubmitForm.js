import React from "react";
import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
const SubmitForm = () => {
	let regex = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

	const formik = useFormik({
		initialValues: {
			email: "",
			name: "",
			message: "",
			isValidated: false,
		},
		onSubmit: (values) => {
			alert("Message sent!");
			console.log("Form data --> ", values);
		},
		onReset: (values) => {
			alert("Reset form!");
			values.email = "";
			values.name = "";
			values.message = "";
			values.isValidated = false;
			window.grecaptcha.reset();
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

	console.log("Form errors --> ", formik.values);

	const handleOnChange = () => {
		formik.setFieldValue("isValidated", true);
	};

	return (
		<div
			className="card"
			style={{
				width: 700,
				margin: "auto",
			}}
		>
			<div
				className="card-header text-center "
				style={{ width: 700, color: "black", fontWeight: "bold", fontSize: 25 }}
			>
				My description
			</div>
			<form
				onSubmit={formik.handleSubmit}
				onReset={formik.handleReset}
				style={{ width: 700 }}
			>
				<div>
					<label htmlFor="email" className="d-flex">
						<div
							style={{ fontWeight: "bold", marginLeft: 10, marginBottom: 10 }}
						>
							Your e-mail:
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
					<div
						id="isValidated"
						name="isValidated"
						onChange={formik.handleChange}
						value={formik.values.isValidated}
						className="me-auto"
					>
						<ReCAPTCHA
							sitekey="6LcQ5XEhAAAAAGCGSKMmAFyUXeEb3qBYrzm_DljH"
							onChange={handleOnChange}
						/>
					</div>
					<button
						className="btn btn-secondary"
						type="reset"
						style={{ marginRight: 5 }}
					>
						Reset form
					</button>

					<button
						className="btn btn-success"
						type="submit"
						disabled={!formik.values.isValidated}
					>
						Send message
					</button>
				</div>
			</form>
		</div>
	);
};

export default SubmitForm;
