import React from 'react';
import { Alert, CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

const Blog = () => {
	return (
		<>
			<Card bg="info" className="m-2">
				<Card.Header>
					<Nav variant="tabs" defaultActiveKey="/blog">
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
						<Card.Title>Thoughts from the Therapist</Card.Title>
					</Alert>

					<Card.Text>
						<CardGroup>
							<Card>
								<Card.Header>
									<Card.Title>Don't over do it</Card.Title>
								</Card.Header>
								<Card.Body>
									<Card.Text>
										A couple of things to remember
										(especially if you are new to exercise,
										or getting back into it). Always warm
										up, only takes a few minutes and will
										reduce the likelyhood of pulls and
										strains. Don't over do it. Over use and
										over training injuries are one of the
										most common complaints I deal with. The
										old adage "no pain no gain" is now an
										outdated concept. You don't need to be
										in pain. Discomfort and minor aches are
										ok... but stop if it really hurts.
									</Card.Text>
								</Card.Body>
								<Card.Footer></Card.Footer>
							</Card>
							<Card>
								<Card.Header>
									<Card.Title>Rest</Card.Title>
								</Card.Header>
								<Card.Body>
									<Card.Text>
										3 times a week for 1 activity with
										alternate 'rest' days is plenty.
										Remember muscles can only recover,
										repair and adapt to new exercise while
										they are at rest. If you are working the
										same muscle groups every day this
										doesn't happen. If you absolutely must
										exercise every day, cross train, try
										mixing in swimming, cycling, gym,
										whatever you can think of. Just don't
										for example run 2 consecutive days and
										then go to the gym and work legs the
										next day... (You know who you are) If
										anyone would like any advice on their
										training plan or goals, feel free to
										drop me a message or catch up with me
										after Malvern Joggers on a Wednesday at
										Malvern Rugby Club.
									</Card.Text>
								</Card.Body>
								<Card.Footer></Card.Footer>
							</Card>
						</CardGroup>
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};

export default Blog;
