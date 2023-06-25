import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand bg="info">
						Ian Fuller Sports Massage
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Link to={'/prices'}>
								<Button variant="info" className="m-2">
									Prices
								</Button>
							</Link>
							<Link to={'/contact'}>
								<Button variant="info" className="m-2">
									Contact
								</Button>
							</Link>
							<Link to={'/blog'}>
								<Button variant="info" className="m-2">
									Blog
								</Button>
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
