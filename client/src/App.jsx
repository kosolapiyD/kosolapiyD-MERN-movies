import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getMovies } from './redux/actions/movies';
// import MoviesSwiper from './components/MoviesSwiper/MoviesSwiper';
import Movies from './components/movies/Movies';
import Form from './components/form/Form';
import moviesImage from './images/movies.png';

import './App.css';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <Container maxWidth='lg'>
      <AppBar
        style={{ display: 'flex', flexDirection: 'row' }}
        className='app-bar'
        position='static'
        color='inherit'
      >
        <Typography className='heading' variant='h2' align='center'>
          Movies I Like
        </Typography>
        <img className='image' src={moviesImage} alt='movie-icon' height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Movies setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
