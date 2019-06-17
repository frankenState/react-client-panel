import React from 'react';
import Grid from '@material-ui/core/Grid';

const Spinner = (props) => {
  return (
  	<Grid
	  container
	  spacing={0}
	  direction="column"
	  alignItems="center"
	  justify="center"
	  style={{ minHeight: '100vh' }}
	>

	  <Grid item xs={3}>
	    <div>
	    	<img 
	    		src="https://ui-ex.com/images/transparent-background-loading.gif"
	    	/>
	    </div>
	  </Grid>   

	</Grid>     
  )
}

export default Spinner;