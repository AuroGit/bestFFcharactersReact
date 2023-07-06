import React from "react";
import GoBackButton from "../componentes/GoBackButton";
import '../stylesheets/ErrorScreen.css';

function ErrorScreen() {
	return (
		<div className="error-container">
			<h1>Algo salió mal.</h1>

			<GoBackButton pageBefore={ '/' }/>
		</div>
	);
}

export default ErrorScreen;