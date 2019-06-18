import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { compose } from 'redux';
//import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import InputField from '../layouts/InputField';

class Login extends Component {

	state = {
		email:'',
		password:''
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	logIn = (e) => {
		e.preventDefault();

		const { firebase } = this.props;

		firebase.login({
			...this.state
		}).catch(err => alert(err.message));
	}

	render() {

		const { email, password } = this.state;

		return (
			<form onSubmit={this.logIn}>
			<Grid
			  container
			  spacing={0}
			  direction="column"
			  alignItems="center"
			  justify="center"
			  style={{ minHeight: '50vh' }}
			>
				<Grid item xs={6}>
					<Grid container>
						<Grid item xs={12}>
							<h1>Log-in</h1>
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
								label="Password"
								type="password"
								name="password"
								onChange={this.onChange}
								value={password}
							/>
						</Grid>
						<Grid item xs={12}>
							<Button 
							 	color="primary" 
							 	type="submit"
							 >
						        Login
						     </Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			</form>
		);
	}
}

Login.propTypes = {
	firebase: PropTypes.object.isRequired
}


export default firebaseConnect()(Login);