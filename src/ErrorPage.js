import React from 'react';
import { Alert } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

const ErrorPage = () => {
	return (
		<>
			<Card bg="secondary" className="m-2">
				<Card.Header className="text-dark">
					<Nav variant="tabs" defaultActiveKey="/">
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
						<Card.Title>404 Error</Card.Title>
					</Alert>
					<Card>
						<Card.Body>
							<Card.Text>
								Sorry this page could not be found
							</Card.Text>
						</Card.Body>
					</Card>
				</Card.Body>
			</Card>
		</>
	);
};

export default ErrorPage;
