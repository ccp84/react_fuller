import React from 'react';
import Stack from 'react-bootstrap/Stack';
import fht from '../media/fhtlogo.png';
import Image from 'react-bootstrap/Image';
import facebook from '../media/facebook.png';
import dino from '../media/smalldinosaur.png';

const Footer = () => {
	return (
		<Stack direction="horizontal" gap={3}>
			<Image src={fht} height={40} alt="FHT logo" />
			<Image src={facebook} height={40} alt="Facebook logo" />
			<Image src={dino} height={40} alt="Cosmic Dinosaur logo" />
		</Stack>
	);
};

export default Footer;
