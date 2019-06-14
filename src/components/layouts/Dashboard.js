import React from 'react';

import Clients from '../clients/Clients';
import Sidebar from './Sidebar';


import Grid from '@material-ui/core/Grid';

const Dashboard = (props) => {
  return (
   <Grid container>
   	<Grid item xs={10}>
   		<Clients/>
   	</Grid>
   	<Grid item xs={2}>
   		<Sidebar/>
   	</Grid>
   </Grid>
  )
}

export default Dashboard;