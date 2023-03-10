import MovieData from '../models/movieData.js';
import mongoose from 'mongoose';

export const getMovies = async (req, res) => {
  try {
    const allMovies = await MovieData.find();
    res.status(200).json(allMovies);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addMovie = async (req, res) => {
  const movie = req.body;
  const newMovie = new MovieData(movie);
  try {
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateMovie = async (req, res) => {
  const { id: _id } = req.params;
  const movie = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No movie with id: ${_id}`);

  const updatedMovie = await MovieData.findByIdAndUpdate(
    _id,
    { ...movie, _id },
    {
      new: true,
    }
  );
  res.json(updatedMovie);
};

export const deleteMovie = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No movie with id: ${id}`);

  await MovieData.findByIdAndRemove(id);
  res.json({ message: 'Movie deleted Successfully' });
};

export const likeMovie = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No movie with id: ${id}`);

  const movie = await MovieData.findById(id);
  const updatedMovie = await MovieData.findByIdAndUpdate(
    id,
    {
      likeCount: movie.likeCount + 1,
    },
    {
      new: true,
    }
  );
  res.json(updatedMovie);
};
