import React from 'react';
import { Alert, ListGroup, ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

const Contact = () => {
	return (
		<Card bg="info" className="m-2">
			<Card.Header>
				<Nav variant="tabs" defaultActiveKey="/contact">
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
					<Card.Title>Contact</Card.Title>
				</Alert>
				<Card.Text>
					<ListGroup>
						<ListGroupItem>
							Call or WhatsApp : 07896 759 244
						</ListGroupItem>
						<ListGroupItem>
							Email: ian@ianfuller.co.uk
						</ListGroupItem>
					</ListGroup>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Contact;
