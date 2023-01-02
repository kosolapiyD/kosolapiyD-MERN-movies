import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { Paper, Typography, Button, TextField } from '@mui/material';
import { addMovie, updateMovie } from '../../redux/actions/movies';

import './form.css';

const Form = ({ currentId, setCurrentId }) => {
  const [movieData, setMovieData] = useState({
    creator: '',
    title: '',
    description: '',
    tags: '',
    selectedFile: '',
  });

  const movie = useSelector((state) =>
    currentId ? state.movies.find((m) => m._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (movie) setMovieData(movie);
  }, [movie]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateMovie(currentId, movieData));
    } else {
      dispatch(addMovie(movieData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setMovieData({
      creator: '',
      title: '',
      description: '',
      tags: '',
      selectedFile: '',
    });
  };

  return (
    <Paper className='paper'>
      <form
        autoComplete='off'
        noValidate
        className='form'
        onSubmit={handleSubmit}
      >
        <Typography variant='h6'>
          {currentId ? `Edit a "${movie.title}"` : 'Add a Movie'}
        </Typography>
        <div className='text-field-wrapper'>
          <TextField
            className='text-field'
            name='creator'
            variant='outlined'
            label='Creator'
            fullWidth
            value={movieData.creator}
            onChange={(e) =>
              setMovieData({ ...movieData, creator: e.target.value })
            }
          />
        </div>
        <div className='text-field-wrapper'>
          <TextField
            className='text-field'
            name='title'
            variant='outlined'
            label='Title'
            fullWidth
            value={movieData.title}
            onChange={(e) =>
              setMovieData({ ...movieData, title: e.target.value })
            }
          />
        </div>
        <div className='text-field-wrapper'>
          <TextField
            className='text-field'
            name='description'
            variant='outlined'
            label='Description'
            fullWidth
            multiline
            rows={4}
            value={movieData.description}
            onChange={(e) =>
              setMovieData({ ...movieData, description: e.target.value })
            }
          />
        </div>
        <div className='text-field-wrapper'>
          <TextField
            name='tags'
            variant='outlined'
            label='Tags (coma separated)'
            fullWidth
            value={movieData.tags}
            onChange={(e) =>
              setMovieData({ ...movieData, tags: e.target.value.split(',') })
            }
          />
        </div>
        <div className='fileInput'>
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) =>
              setMovieData({ ...movieData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          style={{ marginBottom: 10 }}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth
        >
          Submit
        </Button>
        <Button
          style={{ marginBottom: 5 }}
          variant='contained'
          color='secondary'
          size='small'
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
