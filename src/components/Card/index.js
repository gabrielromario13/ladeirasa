import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://pbs.twimg.com/profile_images/1049357568420843520/DqRJemT7_400x400.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActions>
        <h6>{`Shape Romario \n R$: 120,00`}</h6> 
        <h6></h6>
      </CardActions>
    </Card>
  );
}

