import * as api from '../../api';

// Action Creators

// two arrow func is redux thunk, to use async
export const getMovies = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMovies();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log('getMovies error', error);
  }
};

export const addMovie = (movie) => async (dispatch) => {
  try {
    const { data } = await api.addMovie(movie);

    dispatch({ type: 'ADD', payload: data });
  } catch (error) {
    console.log('addMovie error', error);
  }
};

export const updateMovie = (id, movie) => async (dispatch) => {
  try {
    const { data } = await api.updateMovie(id, movie);

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log('updateMovie id', id);
    console.log('updateMovie error', error);
  }
};
