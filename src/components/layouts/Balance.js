import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function Balance(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Chip
        icon={<FaceIcon />}
        label={props.label}
        className={classes.chip}
        variant="outlined"
      />
      
    </div>
  );
}