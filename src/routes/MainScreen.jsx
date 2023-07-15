import React, { useEffect } from 'react';
import GameButton from '../componentes/GameButton';
import Header from '../componentes/Header';

function MainScreen() {

	useEffect(() => window.scrollTo(0, 0), []);

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
