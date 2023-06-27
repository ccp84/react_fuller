import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import PageContainer from '../Components/Layout/PageContainer';

const Blog = () => {
	return (
		<>
			<PageContainer
				active="blog"
				title="Thoughts from the Therapist"
				pageContent={
					<CardGroup>
						<Card>
							<Card.Header>
								<Card.Title className="text-info">
									Don't over do it
								</Card.Title>
							</Card.Header>
							<Card.Body>
								<Card.Text>
									A couple of things to remember (especially
									if you are new to exercise, or getting back
									into it). Always warm up, only takes a few
									minutes and will reduce the likelyhood of
									pulls and strains.
								</Card.Text>
								<Card.Text>
									Don't over do it. Over use and over training
									injuries are one of the most common
									complaints I deal with. The old adage "no
									pain no gain" is now an outdated concept.
									You don't need to be in pain. Discomfort and
									minor aches are ok... but stop if it really
									hurts.
								</Card.Text>
							</Card.Body>
							<Card.Footer></Card.Footer>
						</Card>
						<Card>
							<Card.Header>
								<Card.Title className="text-info">
									Rest
								</Card.Title>
							</Card.Header>
							<Card.Body>
								<Card.Text>
									3 times a week for 1 activity with alternate
									'rest' days is plenty. Remember muscles can
									only recover, repair and adapt to new
									exercise while they are at rest. If you are
									working the same muscle groups every day
									this doesn't happen. If you absolutely must
									exercise every day, cross train, try mixing
									in swimming, cycling, gym, whatever you can
									think of.
								</Card.Text>
								<Card.Text>
									Just don't for example run 2 consecutive
									days and then go to the gym and work legs
									the next day... (You know who you are)
								</Card.Text>
								<Card.Text>
									If anyone would like any advice on their
									training plan or goals, feel free to drop me
									a message or catch up with me after Malvern
									Joggers on a Wednesday at Malvern Rugby
									Club.
								</Card.Text>
							</Card.Body>
							<Card.Footer></Card.Footer>
						</Card>
					</CardGroup>
				}
			/>
		</>
	);
};

export default Blog;
