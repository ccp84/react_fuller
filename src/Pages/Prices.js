import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import PageContainer from '../Components/Layout/PageContainer';

const Prices = () => {
	return (
		<PageContainer
			active="prices"
			title="Prices"
			pageContent={
				<CardGroup>
					<Card>
						<Card.Header className="bg-info text-dark">
							Initial Consultation
						</Card.Header>
						<Card.Body>
							<Card.Text>£35</Card.Text>
						</Card.Body>
						<Card.Footer></Card.Footer>
					</Card>
					<Card>
						<Card.Header className="bg-info text-dark">
							Sports Massage
						</Card.Header>
						<Card.Body>
							<Card.Text>£45</Card.Text>
						</Card.Body>
						<Card.Footer></Card.Footer>
					</Card>
				</CardGroup>
			}
		/>
	);
};

export default Prices;
