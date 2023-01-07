import express from 'express';
import {
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie,
  likeMovie,
} from '../controllers/movies.js';

const router = express.Router();

router.get('/', getMovies);
router.post('/', addMovie);
router.patch('/:id', updateMovie);
router.delete('/:id', deleteMovie);
router.patch('/:id/likeMovie', likeMovie);

export default router;
