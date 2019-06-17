import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const Sidebar = (props) => {
	  const classes = useStyles();
  return (
    <React.Fragment>
    	<Link
        component={RouterLink}
        to="/client/new"
        color="primary"
      > New </Link>
    </React.Fragment>
  )
}

export default Sidebar;