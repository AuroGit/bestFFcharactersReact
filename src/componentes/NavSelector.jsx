import React, { useEffect, useRef } from "react";

function NavSelector() {

	const num = new URLSearchParams(window.location.search).get('num');
	const char = new URLSearchParams(window.location.search).get('char');
	const type = window.location.pathname.split('/').pop();
	
	const selectorRef = useRef(null);
	const charsArr = JSON.parse(sessionStorage.getItem(`ff${num}-chars`));

	const handleChange = (e)=> {
		if (type === 'team') window.location.href = `/${type}?num=${e.target.value}`
		if (type === 'character') window.location.href = `/${type}?char=${e.target.value}&num=${num}`
	}

	useEffect(() =>  {
		if (type === 'team') selectorRef.current.value = num;
		if (type === 'character') selectorRef.current.value = char;
	}, [char, num, type]);

	if (type) {
		return (
			<>
				<div className="nav-container">
					<select 
						ref={ selectorRef }
						className="selector" 
						onChange={ (e) => handleChange(e) }
					>
						{
							type === 'team' ? 
							<>
								<option value="vii">Final Fantasy VII</option>
								<option value="viii">Final Fantasy VIII</option>
								<option value="ix">Final Fantasy IX</option>
								<option value="x">Final Fantasy X</option>
							</>
							:
								charsArr.map((item, index) => {
									return <option 
										value={ item.name }
										key={ index }>
										{ item.name }
									</option>
								})
						}
					</select>
				</div>
			</>
		);
	}
}

export default NavSelector;