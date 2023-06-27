import React from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

const PageContainer = ({ title, pageContent, active }) => {
	return (
		<>
			<Card bg="secondary" className="m-2">
				<Card.Header>
					<Nav variant="tabs" defaultActiveKey={`/${active}`}>
						<Nav.Item>
							<Nav.Link className="text-info" href="/">
								Home
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="text-info" href="/prices">
								Prices
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="text-info" href="/contact">
								Contact
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="text-info" href="/blog">
								Blog
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Card.Header>
				<Card.Header className="bg-info">
					<Card.Title>{title}</Card.Title>
				</Card.Header>

				<Card.Body>{pageContent}</Card.Body>
			</Card>
		</>
	);
};

export default PageContainer;
