import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

function NavSelector() {

	const useOutsideAlerter = (ref) => {
		useEffect(() => {
			function handleClickOutside(event) {
				if (ref.current && !ref.current.contains(event.target)) {
				setDropdown(false);
				}
			}
			document.addEventListener("mousedown", handleClickOutside);
			
			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, [ref]);
	}

	const { game, char } = useParams();
	const { pathname } = useLocation();
	const [ dropdown, setDropdown ] = useState(false);
	const [ selected, setSelected ] = useState('');
	
	const selectRef = useRef(null);
	useOutsideAlerter(selectRef);
	
	const dropdownRef = useRef(null);
	const charsArr = JSON.parse(sessionStorage.getItem(`ff${game}-chars`));

	const handleDropdown = ()=> setDropdown(!dropdown);
	useEffect(() => setDropdown(false), [char]);

	useEffect(() => {
		if (pathname.includes('team')) setSelected(`Final Fantasy ${game.toUpperCase()}`);
		if (pathname.includes('character')) setSelected(char);
	}, [game, char, pathname]);

	if (pathname !== '/') {
		return (
			<div className="nav-container"
				ref={ selectRef }>
				<div className="select" 
					onClick={ handleDropdown }>
					<span className="value">
						{ selected }
					</span>

					<span className="caret" />
				</div>

				<ul className={dropdown ? 'option-list open' : 'option-list'}
					ref={dropdownRef}>
				{
					pathname.includes('team') && <>
						<li className="option">
							<Link to='/reload/vii'
								className="opt-link">Final Fantasy VII</Link>
						</li>
						<li className="option">
							<Link to='/reload/viii'
								className="opt-link">Final Fantasy VIII</Link>
						</li>
						<li className="option">
							<Link to='/reload/ix'
								className="opt-link">Final Fantasy IX</Link>
						</li>
						<li className="option">
							<Link to='/reload/x'
								className="opt-link">Final Fantasy X</Link>
						</li>
					</>
				}
				{
					pathname.includes('character') && 
						charsArr.map((item, index) => {
							return <li className="option" key={index}>
								<Link to={`/character/${game}/${item.name}`}
									className="opt-link">
									{ item.name }
								</Link>
							</li>
						})
				}
				</ul>
			</div>
		);
	}
}

export default NavSelector;