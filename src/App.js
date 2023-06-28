import './App.css';
import Header from './Components/Header';
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer';
import Welcome from '../src/Pages/Welcome';
import Prices from '../src/Pages/Prices';
import Contact from '../src/Pages/Contact';

function App() {
	return (
		<>
			<Header />
			<Container>
				<Welcome />
				<Prices />
				<Contact />
			</Container>
			<Container className="bg-info p-2">
				<Footer />
			</Container>
		</>
	);
}

export default App;
