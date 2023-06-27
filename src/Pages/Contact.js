import React from 'react';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import PageContainer from '../Components/Layout/PageContainer';

const Contact = () => {
	return (
		<PageContainer
			active="contact"
			title="Contact"
			pageContent={
				<ListGroup>
					<ListGroupItem>
						Call or WhatsApp : 07896 759 244
					</ListGroupItem>
					<ListGroupItem>Email: ian@ianfuller.co.uk</ListGroupItem>
				</ListGroup>
			}
		/>
	);
};

export default Contact;
