import React from 'react';
import GameButton from '../componentes/GameButton';
import Header from '../componentes/Header';

function MainScreen() {

	return (
		<>
			<Header />

			<GameButton game='vii' />
			<GameButton game='viii' />
			<GameButton game='ix' />
			<GameButton game='x' />
		</>
	);
}

export default MainScreen;
