import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import MainScreen from './routes/MainScreen';
import TeamScreen from './routes/TeamScreen';
import CharScreen from './routes/CharScreen';
import ErrorScreen from './routes/ErrorScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<HashRouter>
			<Routes>
				<Route 
					exact path='/'
					element={ <MainScreen /> }
					errorElement={ <ErrorScreen /> } />
				<Route 
					exact path='/team/:game'
					element={ <TeamScreen /> }
					errorElement={ <ErrorScreen /> } />
				<Route 
					exact path='/character/:game/:char'
					element={ <CharScreen /> }
					errorElement={ <ErrorScreen /> } />
			</Routes>
		</HashRouter>
	</React.StrictMode>
);

