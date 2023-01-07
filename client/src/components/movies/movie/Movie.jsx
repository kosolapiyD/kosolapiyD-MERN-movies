import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deleteMovie, likeMovie } from '../../../redux/actions/movies';

import './movie.css';

const Movie = ({ movie, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <Card className='card'>
      <CardMedia
        className='media'
        image={
          movie.selectedFile ||
          'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
        }
        title={movie.title}
      />
      <div className='overlay'>
        <Typography variant='h6'>{movie.creator}</Typography>
        <Typography variant='body2'>
          {moment(movie.createdAt).fromNow()}
        </Typography>
      </div>
      <div className='overlay2'>
        <Button
          style={{ color: 'white' }}
          size='small'
          onClick={() => setCurrentId(movie._id)}
        >
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>
      <div className='details'>
        <Typography variant='body2' color='textSecondary' component='h2'>
          {movie.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className='title' gutterBottom variant='h5' component='h2'>
        {movie.title}
      </Typography>
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {movie.description}
        </Typography>
      </CardContent>
      <CardActions className='cardActions'>
        <Button
          size='small'
          color='primary'
          onClick={() => dispatch(likeMovie(movie._id))}
        >
          <ThumbUpAltIcon fontSize='small' />
          &nbsp;Like&nbsp;
          {movie.likeCount}
        </Button>
        <Button
          size='small'
          color='primary'
          onClick={() => dispatch(deleteMovie(movie._id))}
        >
          <DeleteIcon fontSize='small' /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Movie;
