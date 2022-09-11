import React from "react";
import FormikEdit from "../formik/FormikEdit";

const ModalEdit = (props) => {
	return (
		<div style={{ paddingTop: 5 }}>
			<div
				className="modal fade"
				id="ModalEdit"
				tabIndex="-1"
				aria-labelledby="ModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-scrollable">
					<div
						className="modal-content "
						style={{ width: 500, height: 570, marginTop: 70 }}
					>
						<div className="modal-header d-flex justify-content-center">
							<div
								className="modal-title "
								id="exampleModalLabel"
								style={{
									height: 40,
									paddingTop: 1,
									paddingLeft: 20,
									paddingRight: 20,
									borderRadius: 6,
									backgroundColor: "black",
									color: "white",
									fontWeight: "bold",
									fontSize: 25,
								}}
							>
								EDIT
							</div>
						</div>
						<button
							className="btn-close"
							style={{ marginLeft: 460, marginTop: -60 }}
							data-bs-dismiss="modal"
						></button>
						<div
							className="modal-body"
							style={{
								marginTop: 55,
								marginBottom: 10,
								marginLeft: 30,
								marginRight: 10,
							}}
						>
							<FormikEdit report={props.report} />
						</div>
						<div className="modal-footer">
							<button
								className="btn btn-dark btn-sm"
								style={{ marginRight: 10, fontWeight: "bold" }}
								data-bs-dismiss="modal"
							>
								Close
							</button>
							<button
								type="submit"
								className="btn btn-danger btn-sm"
								style={{ fontWeight: "bold" }}
								onClick={() => document.getElementById("submitEdit").click()}
							>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalEdit;
