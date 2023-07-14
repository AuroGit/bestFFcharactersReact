import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function NavSelector() {

	const { game, char } = useParams();
	const { pathname } = useLocation();
	const [ path, setPath ] = useState('');

	const selectorRef = useRef(null);
	// const charsArr = JSON.parse(sessionStorage.getItem(`ff${game}-chars`));

	const handleChange = (e)=> {
		if (pathname.includes('team')) {
			setPath(`${pathname}/${e.target.value}`);
			console.log(pathname);
			// window.location.href = `${pathname}/#/${path}`;
		}
		if (pathname.includes('character')) {
			setPath(`${pathname}/${game}/${e.target.value}`);

		}
		// window.location.reload();
	}

	useEffect(() =>  {
		if (pathname.includes('team')) selectorRef.current.value = game;
		if (pathname.includes('character')) selectorRef.current.value = char;
	}, [char, game, pathname]);

	if (pathname !== '/') {
		return (
			<div className="nav-container">
				<select 
				ref={ selectorRef }
				className="selector" 
				onChange={ (e) => handleChange(e) }>

					{
						pathname.includes('team') && 
						<>
							{/* <option value="vii">Final Fantasy VII</option>
							<option value="viii">Final Fantasy VIII</option>
							<option value="ix">Final Fantasy IX</option>
							<option value="x">Final Fantasy X</option> */}
						</>

						// pathname.includes('character') &&
						// 	charsArr.map((item, index) => {
						// 		return <option 
						// 			value={ item.name }
						// 			key={ index }>
						// 			{ item.name }
						// 		</option>
						// 	})
					}
				</select>
			</div>
		);
	}
}

export default NavSelector;