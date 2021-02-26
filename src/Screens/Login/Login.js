import React, { Component } from "react";
import "./Login.css";
import LoginForm from "./components/LoginForm";
class Login extends Component {
	state = {};
	render() {
		return (
			<div className="container-fluid login-bgimage">
				<LoginForm />
			</div>
		);
	}
}

export default Login;
