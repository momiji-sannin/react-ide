import React, { Component } from "react";
import FloatingLabel from "react-bootstrap-floating-label";
import "./FloatingLabels.css";

class FloatingLabels extends Component {
	state = {};
	render() {
		const { id, label, type, position } = this.props;
		return (
			<div className="container-fluid">
				<FloatingLabel
					className="float-label"
					label={label}
					id={id}
					type={type}
					style={{
						top: position.top,
						left: position.left,
					}}
					labelStyle={{
						fontSize: 20,
						color: "#927397",
					}}
					inputStyle={{
						fontSize: 20,
						color: "#757575",
						backgroundColor: "rgba(180, 180, 180, 0)",
						borderColor: "rgba(180, 180, 180, 0)",
					}}
				/>
			</div>
		);
	}
}

export default FloatingLabels;
