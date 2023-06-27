import React from 'react';
import Card from 'react-bootstrap/Card';
import PageContainer from '../Components/Layout/PageContainer';
import Image from 'react-bootstrap/Image';
import ian from '../media/ian.jpg';

const Welcome = () => {
	return (
		<PageContainer
			active=""
			title="Welcome"
			pageContent={
				<Card>
					<Card.Body>
						<Image src={ian} />
						<Card.Text>
							Hi! I'm Ian, I've recently qualified as a Level 3
							Sports Massage Therapist. After 30+ years of working
							in the packaging industry, it's time for a change of
							direction! I took up running about 9 years ago and
							have completed a number of marathons, half
							marathons, mud runs and obstacle course races in
							that time. I'm also a member of The Malvern Joggers,
							who I've run with for the last 5 or 6 years. Still
							working full time at the moment and fitting the
							Sports Massage in around that, so I'm currently
							available for massage after 17:00 Mon - Thurs, after
							12:00 on Friday and all day Saturday and Sunday
							races permitted.
						</Card.Text>
					</Card.Body>
				</Card>
			}
		/>
	);
};

export default Welcome;
