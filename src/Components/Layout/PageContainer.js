import React from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

const PageContainer = ({ title, pageContent }) => {
	return (
		<>
			<Card bg="secondary" className="m-2">
				<Card.Header>
					<Nav variant="tabs" defaultActiveKey={'#'}>
						<Nav.Item>
							<Nav.Link className="text-info" href="#">
								{title}
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Card.Header>

				<Card.Body>{pageContent}</Card.Body>
			</Card>
		</>
	);
};

export default PageContainer;
