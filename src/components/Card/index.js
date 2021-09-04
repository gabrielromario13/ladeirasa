import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import notImage from '../../images/not-image.png'
import * as S from './styled'

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 220,
  },
});

export default function MediaCard({ image, titleImage, price, description }) {
  const classes = useStyles();
  const formatPrice = (valor) => valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image ? image : notImage}
          title={titleImage}
        />
      </CardActionArea>
      <CardActions>
        <S.ActionsWrapper>
          <S.Descripton>{description}</S.Descripton>
          <S.Price>{formatPrice(price)}</S.Price>
        </S.ActionsWrapper>
      </CardActions>
    </Card>
  );
}

