import React from 'react';
import Stack from 'react-bootstrap/Stack';
import fht from '../media/fhtlogo.png';
import Image from 'react-bootstrap/Image';
import facebook from '../media/facebook.png';
import dino from '../media/smalldinosaur.png';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<Stack direction="horizontal" gap={3}>
			<Link
				to={'https://www.fht.org.uk/users/fuller216631'}
				rel="nofollow"
				target="_blank"
			>
				<Image src={fht} height={40} alt="FHT logo" />
			</Link>
			<Link
				to={
					'https://www.facebook.com/people/Ian-Fuller-Sports-Massage/100083649962425/'
				}
				target="_blank"
				rel="nofollow"
			>
				<Image src={facebook} height={40} alt="Facebook logo" />
			</Link>

			<Link
				to={'https://cosmicdinosaur.tech'}
				target="_blank"
				rel="nofollow"
			>
				<Image src={dino} height={40} alt="Cosmic Dinosaur logo" />
			</Link>
		</Stack>
	);
};

export default Footer;
