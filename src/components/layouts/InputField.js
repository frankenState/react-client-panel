import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

const InputField = (props) => {

	const classes = useStyles();

	return (
	     <TextField
	        id="standard-dense"
	        label={props.label}
	        type={props.type}
	        name={props.name}
	        onChange={props.onChange}
	        value={props.value}
	        className={clsx(classes.textField, classes.dense)}
	        margin="dense"
	        required

	      />
  	)
}

InputField.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
}

export default InputField;