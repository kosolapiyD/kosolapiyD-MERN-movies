import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@mui/material';

import Movie from './movie/Movie';

const Movies = ({ setCurrentId }) => {
  const movies = useSelector((state) => state.movies);
  console.log('movies :>> ', movies);

  return !movies.length ? (
    <CircularProgress />
  ) : (
    <Grid className='mainContainer' container alignItems='stretch' spacing={3}>
      {movies.map((movie) => (
        <Grid key={movie._id} item xs={12} sm={6}>
          <Movie movie={movie} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Movies;
