import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Prices from './Pages/Prices';
import ErrorPage from './ErrorPage';
import Welcome from './Pages/Welcome';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Welcome /> },
			{
				path: '/prices',
				element: <Prices />
			},
			{
				path: '/contact',
				element: <Contact />
			},
			{
				path: '/blog',
				element: <Blog />
			}
		]
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
