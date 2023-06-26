import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer';

function App() {
	return (
		<>
			<Header />
			<Container>
				<Outlet />
			</Container>
			<Container>
				<Footer />
			</Container>
		</>
	);
}

export default App;
