import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

import Spinner from '../layouts/Spinner';
import Balance from '../layouts/Balance';

import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

class Clients extends React.Component {

	state = {
		totalOwed: null
	}

	componentDidUpdate(prevProps){
		if (this.props.clients !== prevProps.clients){
			this.setState({
				totalOwed: this.props.clients.reduce(
					(total, client) => {
						return total + parseFloat(client.balance.toString());
					}, 0
				)
			})
		}
	}

	render() {

		const { clients }  = this.props;
		const { totalOwed } = this.state;

		if (clients){

			return (
				<React.Fragment>
					<Typography
		                variant="h6"
		            >
		                Clients
		            </Typography>

		           <Balance
		           		label={`Total Balance: ${totalOwed}`}
		           />

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
			return <Spinner/>
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
