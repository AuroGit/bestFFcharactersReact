import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import MainScreen from './routes/MainScreen';
import TeamScreen from './routes/TeamScreen';
import CharScreen from './routes/CharScreen';
import ErrorScreen from './routes/ErrorScreen';

// export const dynPath = window.location.hostname === 'localhost' ? 
// 	'' : '/bestFFcharactersReact/build';
const router = createHashRouter([
	{
		path: window.location.pathname,
		element: <MainScreen />,
		errorElement: <ErrorScreen />,
	},
	{
		path: window.location.pathname + 'team',
		element: <TeamScreen />,
		errorElement: <ErrorScreen />
	},
	{
		path: window.location.pathname + 'character',
		element: <CharScreen />,
		errorElement: <ErrorScreen />
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);

