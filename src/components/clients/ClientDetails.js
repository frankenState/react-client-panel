import React, {Component} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

import Spinner from '../layouts/Spinner';
import Balance from '../layouts/Balance';
import ClientCard from '../layouts/ClientCard';

import { makeStyles } from '@material-ui/core/styles';
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


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const Css = () => {
	return useStyles;
}


class ClientDetails extends Component {
	
	state = {
		showBalanceUpdate: false,
		balanceUpdateAmount: ''
	}

	toggle = () => {
		this.setState({
			showBalanceUpdate: !this.state.showBalanceUpdate
		});
	}

	saveAmount = () => {
		this.toggle();
		
		const { client, firestore } = this.props;
		const { balanceUpdateAmount } = this.state;

		const clientUpdate = {
			balance: parseFloat(balanceUpdateAmount)
		};

		firestore.update(
			{collection: 'clients', doc: client.id},
			 clientUpdate
		);
	}

	updateAmount = (e) => {
		this.setState({
			balanceUpdateAmount: e.target.value
		})
	}

	deleteClient = () => {
		const { client, firestore, history } = this.props;

		firestore.delete(
			{collection: 'clients', doc: client.id}
		).then(history.push('/'));
	}

	render() {

		const classes = Css();

		const { client } = this.props;

		if (client) {
			return (
				<Grid container>
					<Grid item xs={12}>
						<Button 
							color="primary" 
							className={classes.button}
							component={RouterLink}
							to="/"
						>
					        Home
					    </Button>
					</Grid>
					<Grid item xs={12}>
						<ClientCard
							client={client}
							toggle={this.toggle}
							showInput={this.state.showBalanceUpdate}
							onChange={this.updateAmount}
							value={this.state.balanceUpdateAmount}
							saveAmount={this.saveAmount}
							deleteClick={this.deleteClient}
						/>
					</Grid>
				</Grid>
			);
		} else {
			return <Spinner/>
		}
		
	}
}

ClientDetails.propTypes = {
	firestore: PropTypes.object.isRequired
}

export default compose(
	firestoreConnect(props => [
		{ collection: 'clients', storeAs: 'client', doc: props.match.params.id }
	]),
	connect(({firestore: { ordered }}) => ({
		client: ordered.client && ordered.client[0]
	}))
)(ClientDetails);