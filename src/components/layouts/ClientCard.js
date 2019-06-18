import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Fab from '@material-ui/core/Fab';
import Create from '@material-ui/icons/Create';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import { green, pink } from '@material-ui/core/colors';

import ContactMail from '@material-ui/icons/ContactMail';
import Call from '@material-ui/icons/Call';
import EuroSymbol from '@material-ui/icons/EuroSymbol';
import Divider from '@material-ui/core/Divider';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CheckCircle from '@material-ui/icons/CheckCircle';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles( theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
   root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  delete: {
    margin: theme.spacing(1),
    backgroundColor: pink[600],
    color:'#fff'
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500],
    pointer: 'cursor'
  },
  textField: {
    width: 200,
  },
  dense: {
    marginTop: 5,
  },
}));

function ClientCard(props) {
  const classes = useStyles();

  const { id, firstName, lastName, email, balance, phone } = props.client;

  const inputField = props.showInput ? (
    <React.Fragment>
       <Divider variant="inset" component="li" />
       <ListItem>
          <ListItemAvatar onClick={props.saveAmount}>
            <Avatar>
              <CheckCircle />
            </Avatar>
          </ListItemAvatar>
          <TextField
            type="number"
            id="standard-dense"
            label="Dense"
            className={clsx(classes.textField, classes.dense)}
            margin="dense"
            value={props.vlaue}
            onChange={props.onChange}
          />
       </ListItem>
    </React.Fragment>
  ) : null;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          { `${firstName} ${lastName}`}
        </Typography>
           <List className={classes.root}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ContactMail />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Call />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Phone Number" secondary={phone} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <EuroSymbol />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Balance" secondary={parseFloat(balance).toFixed(2)} />
              <Avatar
                onClick={props.toggle}
                className={classes.greenAvatar}>
                <AssignmentIcon />
              </Avatar>
            </ListItem>
            { inputField }
          </List>

      </CardContent>
      <CardActions>
        <div style={{width:'100%'}}>
          <Box 
            display="flex"
            justifyContent="flex-end"
          >
            <Box>
              <Fab 
                component={RouterLink}
                to={`./edit/${id}`}
                color="primary" 
                aria-label="Add" 
                className={classes.fab}
              >
                <Create />
              </Fab>
            </Box>
            <Box>
              <Fab
                 onClick={props.deleteClick}
                 aria-label="Delete" className={classes.delete}>
                <Delete />
              </Fab>
            </Box>
          </Box>
        </div>
      </CardActions>
    </Card>
  );
}

ClientCard.propTypes = {
  client: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  showInput: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  saveAmount: PropTypes.func.isRequired,
  deleteClick: PropTypes.func.isRequired
}

export default ClientCard;