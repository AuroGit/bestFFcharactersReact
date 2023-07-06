import React from "react";
import '../stylesheets/GoBackButton.css';

function GoBackButton({ pageBefore }) {
    return (
        <div className="go-back-btn">
            <hr className="separador"/>
            <button 
                onClick={ () => window.location.href =  pageBefore }
            >
                Volver
            </button>
        </div>
    );
}

export default GoBackButton;