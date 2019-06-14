import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 3,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

class ButtonAppBar extends Component {

    render(){

      const { classes } = this.props;

      console.log(classes);

      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Box py={1}>
              <Container maxWidth="sm">
                <Grid container spacing={3}>
                  <Grid item xs={9}>
                    <Typography variant="h6" className={classes.title}>
                      React Client Panel
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Button 
                      color="secondary"
                    > Login
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </AppBar>
        </div>
      );

    }
}

export default withStyles(useStyles)(ButtonAppBar);