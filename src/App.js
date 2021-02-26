import React, { Component } from "react";
import "./App.css";
import LoginForm from "./Screens/Login/components/LoginForm";

class App extends Component {
	state = {};
	render() {
		return (
			<div className="container-fluid login-bgimage">
				<LoginForm />
			</div>
		);
	}
}

export default App;
