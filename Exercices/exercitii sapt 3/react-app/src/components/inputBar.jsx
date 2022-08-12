import React, { Component } from "react";
class Bar extends Component {
	render() {
		return (
			<div className="input-value">
				<div className="input-value">{this.props.label}</div>
			</div>
		);
	}
}

export default Bar;
