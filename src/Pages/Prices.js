import React from 'react';
import { Alert, CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

const Prices = () => {
	return (
		<>
			<Card bg="info" className="m-2">
				<Card.Header>
					<Nav variant="tabs" defaultActiveKey="/prices">
						<Nav.Item>
							<Nav.Link href="/">Home</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="/prices">Prices</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="/contact">Contact</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="/blog">Blog</Nav.Link>
						</Nav.Item>
					</Nav>
				</Card.Header>
				<Card.Body>
					<Alert variant="info">
						<Card.Title>Prices</Card.Title>
					</Alert>

					<Card.Text>
						<CardGroup>
							<Card>
								<Card.Header>Initial Consultation</Card.Header>
								<Card.Body>
									<Card.Text>£35</Card.Text>
								</Card.Body>
								<Card.Footer></Card.Footer>
							</Card>
							<Card>
								<Card.Header>Sports Massage</Card.Header>
								<Card.Body>
									<Card.Text>£45</Card.Text>
								</Card.Body>
								<Card.Footer></Card.Footer>
							</Card>
						</CardGroup>
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};

export default Prices;
