import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
//import { compose } from 'redux';
//import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import InputField from '../layouts/InputField';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2),
    flexGrow: 1
  }
}));

const Css = () => {
	return useStyles;
}

class AddClient extends Component {

	

	state = {
		firstName:'',
		lastName:'',
		email:'',
		phone:'',
		balance:''
	}

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	saveClient = (e) => {
		e.preventDefault();
		console.log("Saving Client...");

		const newClient = this.state;

		const { firestore, history } = this.props;

		// if not required in the form for balance
		// newClient.balance = newClient.balance === ''? 0: newClient.balance

		firestore.add({ collection: 'clients' }, newClient)
				 .then(()=> history.push('/'));
	}

	render() {

		const classes = Css();

		const { firstName, lastName, email, phone, balance } = this.state;

		return (
			<React.Fragment>
				<form onSubmit={this.saveClient}>
					<Grid container>
						<Grid item xs={12}>
							<h1>Add Client</h1>
						</Grid>
						<Grid item xs={12}>
							<InputField
								label="First Name"
								type="text"
								name="firstName"
								onChange={this.onChange}
								value={firstName}
							/>
						</Grid>
						<Grid item xs={12}>
							<InputField
								label="Last Name"
								type="text"
								name="lastName"
								onChange={this.onChange}
								value={lastName}
							/>
						</Grid>
						<Grid item xs={12}>
							<InputField
								label="Email"
								type="email"
								name="email"
								onChange={this.onChange}
								value={email}
							/>
						</Grid>
						<Grid item xs={12}>
							<InputField
								label="Phone Number"
								type="number"
								name="phone"
								onChange={this.onChange}
								value={phone}
							/>
						</Grid>
						<Grid item xs={12}>
							<InputField
								label="Balance"
								type="number"
								name="balance"
								onChange={this.onChange}
								value={balance}
							/>
						</Grid>
						<Grid item xs={12}>
							 <Button 
							 	color="default" 
							 	className={classes.button}
							 	type="submit"
							 >
						        Submit
						     </Button>
						</Grid>
					</Grid>
				</form>
			</React.Fragment>
		);
	}
}

AddClient.propTypes = {
	firestore: PropTypes.object.isRequired
}

export default firestoreConnect()(AddClient);
