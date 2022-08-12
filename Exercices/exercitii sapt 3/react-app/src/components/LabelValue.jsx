import React, { useState, Component } from "react";
class LabelValue extends Component {
	render() {
		return (
			<div className="label-value">
				<div className="label-value">{this.props.value}</div>
			</div>
		);
	}
}

export default LabelValue;
