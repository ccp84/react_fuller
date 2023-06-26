import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import banner from '../media/bannersml.png';

const Header = () => {
	return (
		<>
			<Container>
				<Card className="bg-info text-dark">
					<Card.Img src={banner} alt="banner image" />
					<Card.ImgOverlay>
						<Card.Title className="bg-info text-large">
							Ian Fuller Sports Massage
						</Card.Title>
						<Card.Text className="bg-info">
							Sports Massage in Malvern
						</Card.Text>
					</Card.ImgOverlay>
				</Card>
			</Container>
		</>
	);
};

export default Header;
