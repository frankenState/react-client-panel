import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
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
            <Container maxWidth="sm">
              <Box py={1}>
                <div style={{ width: '100%' }}>
                  <Box display="flex">
                    <Box 
                      flexGrow={1}
                    >
                      <Typography
                        variant="h6"
                      >
                        Client Panel
                      </Typography>
                    </Box>
                    <Box>
                       <Link 
                        component={RouterLink}
                        to="/"
                        style={{color:"#fff"}}
                        >
                          <Typography
                          variant="body1"
                          style={{marginTop:"0.425em", marginRight:"8px"}}
                          >
                            Dashboard
                          </Typography>
                        </Link>
                    </Box>
                    <Box>
                      <Button style={{color:"#fff"}}>
                        Login
                      </Button>
                    </Box>
                  </Box>
                </div>
              </Box>
            </Container>
          </AppBar>
        </div>
      );

    }
}

export default withStyles(useStyles)(ButtonAppBar);