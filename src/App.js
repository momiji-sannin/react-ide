<<<<<<< HEAD
import React, { Component } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";

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

=======
const App = (props) => props.children;
>>>>>>> a87cb9ee6d3b9ad710f0ccb1095d89773c2048cf
export default App;
