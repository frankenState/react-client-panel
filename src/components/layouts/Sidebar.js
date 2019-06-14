import React from 'react';

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
    	<Button 
    		color="primary"
    		className={classes.button}
    	>
	        New
	    </Button>
    </React.Fragment>
  )
}

export default Sidebar;