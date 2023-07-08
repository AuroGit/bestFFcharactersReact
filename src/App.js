import './App.css';
import MainScreen from './routes/MainScreen';
import TeamScreen from './routes/TeamScreen';
import CharScreen from './routes/CharScreen';
import ErrorScreen from './routes/ErrorScreen';
import { createHashRouter, RouterProvider } from 'react-router-dom';

export const dynPath = window.location.hostname === 'localhost' ? 
	'' : '/bestFFcharactersReact/build';
const router = createHashRouter([
	{
		path: dynPath + '/',
		element: <MainScreen />,
		errorElement: <ErrorScreen />,
	},
	{
		path: dynPath + 'team',
		element: <TeamScreen />,
		errorElement: <ErrorScreen />
	},
	{
		path: dynPath + 'character',
		element: <CharScreen />,
		errorElement: <ErrorScreen />
	}
]);

function App() {
	return (
		<div className="App">
			<RouterProvider router={ router } />
		</div>
	);
}

export default App;
