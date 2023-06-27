import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import banner from '../media/bannersml.png';
import logo from '../media/logow.webp';

const Header = () => {
	return (
		<>
			<Container>
				<Card className="bg-info text-dark">
					<Card.Img src={banner} alt="banner image" />
					<Card.ImgOverlay>
						<Card.Title className="text-info fs-1">
							<Image src={logo} alt="logo" height={50} /> Ian
							Fuller
						</Card.Title>
					</Card.ImgOverlay>
					<Card.Text className="bg-info fs-2 text-secondary">
						Sports Massage in Malvern
					</Card.Text>
				</Card>
			</Container>
		</>
	);
};

export default Header;
