import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

class Clients extends React.Component {
	render() {

		console.log(this.props);

		const { clients }  = this.props;

		if (clients){

			return (
				<React.Fragment>
					<Typography
		                variant="h6"
		            >
		                Clients
		            </Typography>

		            <Table>
		            	<TableHead>
		            		<TableRow>
		            			<TableCell>Name</TableCell>
		            			<TableCell>Email</TableCell>
		            			<TableCell>Balance</TableCell>
		            			<TableCell />
		            		</TableRow>
		            	</TableHead>
		            	<TableBody>
		            		{clients.map( client => (
		            			<TableRow 
		            				key={client.id}
		            				hover={true}
		            			>
		            				<TableCell>{client.firstName} {client.lastName}</TableCell>
		            				<TableCell>{ client.email }</TableCell>
		            				<TableCell>{ '$' + parseFloat(client.balance).toFixed(2) }</TableCell>
		            				<TableCell>
		            					 <Button 
		            					 	color="default"
		            					 	component={RouterLink}
		            					 	to={`/client/${client.id}`}
		            					 >
									        Details
									     </Button>
		            				</TableCell>
		            			</TableRow>
		            		))}
		            	</TableBody>
		            </Table>
				</React.Fragment>
			);

		} else {
			return <h1>Loading</h1>;
		}

		
	}
}

Clients.propTypes = {
	firestore: PropTypes.object.isRequired,
	clients: PropTypes.array
}

export default compose(
	firestoreConnect([{ collection: 'clients' }]),
	connect((state, props) => ({
		clients: state.firestore.ordered.clients
	}))
)(Clients);
