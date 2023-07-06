import './App.css';
import Header from './componentes/Header';
import MainScreen from './routes/MainScreen';
import TeamScreen from './routes/TeamScreen';
import CharScreen from './routes/CharScreen';
import ErrorScreen from './routes/ErrorScreen';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainScreen />,
		errorElement: <ErrorScreen />
	}, 
	{
		path: '/team',
		element: <TeamScreen />,
		errorElement: <ErrorScreen />
	},
	{
		path: '/character',
		element: <CharScreen />,
		errorElement: <ErrorScreen />
	}
])

function App() {
	return (
		<div className="App">
			<Header />
			<RouterProvider router={ router } />
		</div>
	);
}

export default App;
