import React, {Component} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#fff"
  },
}));

const Css = () => {
  return useStyles;
}

class ButtonAppbar extends Component {
 
  state = {
    isAuthenticated: false
  }

  static getDerivedStateFromProps = (props, state) => {
    const { auth } = props;

    if (auth.uid){
      return { isAuthenticated: true }
    } else return {isAuthenticated: false}
  
  }

  render() {

    const classes = Css();

    const { isAuthenticated } = this.state;

    const { auth } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              { isAuthenticated ? (
                  <Link 
                    component={RouterLink} 
                    to="/" 
                    style={{
                      color:'#fff',
                      textDecoration:"none"
                    }}
                  >
                    Client Panel
                  </Link>
              ) : null }
            </Typography>
            <Button
              component={RouterLink}
              to="/login"
             color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppbar.propTypes = {
  firebase: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth
  }))
)(ButtonAppbar);