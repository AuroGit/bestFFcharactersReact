import React from "react";
import '../stylesheets/CharSheet.css'

function CharSheet(props) {
	return (
		<div className="char-container">
			<img src={ props.image } alt={ props.name } />
			
			<div className="data">
				<div className="physic-data">
					<p className="age"><span>Age:</span> { props.age }</p>
					<p className="height"><span>Height:</span> { props.height }</p>
					<p className="race"><span>Race:</span> { props.race }</p>
					<p className="gender"><span>Gender:</span> { props.gender }</p>
				</div>
				<p className="description">{ props.description }</p>
			</div>
		</div>
	);
}

export default CharSheet;