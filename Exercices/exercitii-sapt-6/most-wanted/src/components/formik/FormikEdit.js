import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateReport } from "../../redux/myReports/MyReportsActions";

const FormikEdit = (props) => {
	let dispatch = useDispatch();

	const { flags } = useSelector((state) => state.flags);

	const { myReport } = useSelector((state) => state.myReports);

	const handleSubmit = (report, id) => {
		dispatch(updateReport(report, id));
	};

	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			dateOfBirth: "",
			nationality: "",
			noticeColor: "",
			gender: "",
		},
		onSubmit: () => {
			alert("Message sent!");
			handleSubmit(formik.values, myReport?.id);
			formik.resetForm();
		},
		onReset: () => {},
		validate: (values) => {
			let errors = {};
			if (!values.firstName) {
				errors.firstName = "*Required*";
			}
			if (!values.lastName) {
				errors.lastName = "*Required*";
			}
			if (!values.dateOfBirth) {
				errors.dateOfBirth = "*Required*";
			}
			if (!values.nationality) {
				errors.nationality = "*Required*";
			}
			if (!values.noticeColor) {
				errors.noticeColor = "*Required*";
			}
			if (!values.gender) {
				errors.gender = "*Required*";
			}
			return errors;
		},
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			onReset={formik.handleReset}
			style={{ width: 400 }}
		>
			<div className="d-flex flex-column" style={{ height: 300 }}>
				<label
					htmlFor="firstName"
					className="d-flex"
					style={{ marginTop: -20 }}
				>
					<div
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						First Name:
					</div>
					<div
						style={{
							color: "red",
							fontSize: 10,
							marginTop: 10,
							marginLeft: 10,
						}}
					>
						{formik.errors.firstName ? (
							<div className="error">{formik.errors.firstName}</div>
						) : null}
					</div>
				</label>
				<input
					type="text"
					id="firstName"
					name="firstName"
					onChange={formik.handleChange}
					value={formik.values.firstName}
				/>

				<label htmlFor="lastName" className="d-flex">
					<div
						style={{
							marginTop: 20,
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Last Name :
					</div>
					<div
						style={{
							color: "red",
							fontSize: 10,
							marginTop: 30,
							marginLeft: 10,
						}}
					>
						{formik.errors.lastName ? (
							<div className="error">{formik.errors.lastName}</div>
						) : null}
					</div>
				</label>

				<input
					type="text"
					id="lastName"
					name="lastName"
					onChange={formik.handleChange}
					value={formik.values.lastName}
				/>

				<label htmlFor="dateOfBirth" className="d-flex">
					<div
						style={{
							marginTop: 20,
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Date of Birth:
					</div>
					<input
						type="date"
						id="dateOfBirth"
						name="dateOfBirth"
						onChange={formik.handleChange}
						value={formik.values.dateOfBirth}
						style={{
							marginTop: 20,
							marginLeft: 20,
							height: 30,
							borderRadius: 6,
						}}
					/>
					<div
						style={{
							color: "red",
							fontSize: 10,
							marginTop: 28,
							marginLeft: 10,
						}}
					>
						{formik.errors.dateOfBirth ? (
							<div className="error">{formik.errors.dateOfBirth}</div>
						) : null}
					</div>
				</label>

				<label htmlFor="nationality" className="d-flex">
					<div className="d-flex " style={{ marginTop: 30 }}>
						<label style={{ fontSize: 20, fontWeight: "bold" }}>
							Nationality:
						</label>
						<select
							id="nationality"
							name="nationality"
							className="form-select"
							style={{ marginLeft: 20, width: 100 }}
							onChange={formik.handleChange}
							value={formik.values.nationality}
						>
							<option defaultValue=""></option>
							{Array.isArray(flags)
								? flags.map((el) => {
										return <option value={el?.code}>{el?.name}</option>;
								  })
								: null}
						</select>
					</div>
					<div
						style={{
							color: "red",
							fontSize: 10,
							marginTop: 40,
							marginLeft: 10,
						}}
					>
						{formik.errors.nationality ? (
							<div className="error">{formik.errors.nationality}</div>
						) : null}
					</div>
				</label>
				<label htmlFor="noticeColor" className="d-flex">
					<div className="d-flex " style={{ marginTop: 30 }}>
						<label style={{ fontSize: 20, fontWeight: "bold" }}>
							Notice color:
						</label>
						<select
							id="noticeColor"
							name="noticeColor"
							className="form-select"
							style={{ marginLeft: 20, width: 100 }}
							onChange={formik.handleChange}
							value={formik.values.noticeColor}
						>
							<option selected></option>
							<option value="red">Red</option>
							<option value="yellow">Yellow</option>
						</select>
					</div>
					<div
						style={{
							color: "red",
							fontSize: 10,
							marginTop: 40,
							marginLeft: 10,
						}}
					>
						{formik.errors.noticeColor ? (
							<div className="error">{formik.errors.noticeColor}</div>
						) : null}
					</div>
				</label>
				<label htmlFor="gender" className="d-flex">
					<div className="d-flex " style={{ marginTop: 30 }}>
						<label style={{ fontSize: 20, fontWeight: "bold" }}>Gender:</label>
						<select
							id="gender"
							name="gender"
							className="form-select"
							style={{ marginLeft: 20, width: 100 }}
							onChange={formik.handleChange}
							value={formik.values.gender}
						>
							<option selected></option>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					</div>
					<div
						style={{
							color: "red",
							fontSize: 10,
							marginTop: 40,
							marginLeft: 10,
						}}
					>
						{formik.errors.gender ? (
							<div className="error">{formik.errors.gender}</div>
						) : null}
					</div>
				</label>
			</div>
			<button
				id="submitEdit"
				className="btn btn-success"
				type="submitEdit"
				style={{
					visibility: "hidden",
				}}
			></button>
		</form>
	);
};

export default FormikEdit;
