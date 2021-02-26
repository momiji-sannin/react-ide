import React, { Component } from "react";
import FloatingLabels from "./FloatingLabels";
import "./LoginForm.css";
class LoginForm extends Component {
	render() {
		return (
			<div className="login-rectangle">
				<h1 className="title">Welcome !</h1>
				<FloatingLabels
					id="userName"
					label="User Name"
					position={{
						top: "40%",
						left: "50%",
					}}
				/>
				<FloatingLabels
					id="password"
					label="Password"
					type="password"
					position={{ top: "60%", left: "50%" }}
				/>
				<button
					className="btn btn-primary"
					style={{
						position: "relative",
						top: "50%",
						bottom: "50%",
					}}
				>
					Log In
				</button>
			</div>
		);
	}
}

export default LoginForm;
