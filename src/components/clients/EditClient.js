import React, {Component} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import Spinner from '../layouts/Spinner';


import { makeStyles } from '@material-ui/core/styles';
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



class EditClient extends Component {

	state = {
		id:'',
		firstName:'',
		lastName:'',
		email:'',
		phone:'',
		balance:'',
		exist:false
	}



	saveClient = e => {
		e.preventDefault();

		const { id, firstName, lastName, email, phone, balance } = this.state;

		const newClient = {
			firstName,
			lastName,
			email,
			phone,
			balance
		}

		const { firestore, history } = this.props;

		firestore.update(
			{collection: 'clients', doc: id},
			newClient
		).then(history.push('/'));

	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value});
	}

	static getDerivedStateFromProps = (props, state) => {
		if (props.client && !state.exist) return {...props.client, exist: true}

		return null;
	}

	/*componentDidUpdate = (prevProps) => {
		console.log(this.state.exist);
		if (this.props.client !== prevProps.client){
			this.setState({...this.props.client, exist:true});
		}
	}*/

	render() {

		const classes = Css();

		const { exist } = this.state;

		if (exist) {

			const { id, firstName, lastName, email, phone, balance } = this.state;

			return (
				<div>
					<form onSubmit={this.saveClient}>
						<Grid container>
							<Grid item xs={12}>
								<h1>Update Client</h1>
							</Grid>
							<Grid item xs={12}>
								<InputField
									label="First Name"
									type="text"
									name="firstName"
									value={firstName}
									onChange={this.onChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<InputField
									label="Last Name"
									type="text"
									name="lastName"
									value={lastName}
									onChange={this.onChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<InputField
									label="Email"
									type="email"
									name="email"
									value={email}
									onChange={this.onChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<InputField
									label="Phone Number"
									type="number"
									name="phone"
									value={phone}
									onChange={this.onChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<InputField
									label="Balance"
									type="number"
									name="balance"
									value={balance}
									onChange={this.onChange}
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
				</div>
			);
		} else {
			return <Spinner />
		}

		
	}
}

EditClient.propTypes = {
	firestore: PropTypes.object.isRequired
}

export default compose(
	firestoreConnect(props => [
		{ collection: 'clients', storeAs: 'client', doc: props.match.params.id }
	]),
	connect(({firestore: { ordered }}) => ({
		client: ordered.client && ordered.client[0]
	}))
)(EditClient);