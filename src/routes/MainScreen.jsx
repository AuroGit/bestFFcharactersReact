import React from 'react';
import GameButton from '../componentes/GameButton';
import Header from '../componentes/Header';
import { dynPath } from '../App';

function MainScreen() {

	const selectTeam = (num)=> {
		window.location.href = `${dynPath}/#/team?num=${num}`;
	};

	return (
		<>
			<Header />

			<GameButton handleClick={ selectTeam } num='vii' />
			<GameButton handleClick={ selectTeam } num='viii' />
			<GameButton handleClick={ selectTeam } num='ix' />
			<GameButton handleClick={ selectTeam } num='x' />
		</>
	);
}

export default MainScreen;
