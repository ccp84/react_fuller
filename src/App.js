import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import { Container } from 'react-bootstrap';

function App() {
	return (
		<>
			<Header />
			<Container>
				<Outlet />
			</Container>
		</>
	);
}

export default App;
