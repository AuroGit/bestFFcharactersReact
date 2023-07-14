import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/GoBackButton.css';

function GoBackButton( { pageBefore } ) {
    return (
        <div className="go-back-btn">
            <hr className="separador"/>
            <Link className="button" to={ pageBefore }>
                Volver
            </Link>
        </div>
    );
}

export default GoBackButton;