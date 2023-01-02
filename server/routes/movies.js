import express from 'express';
import { getMovies, addMovie, updateMovie } from '../controllers/movies.js';

const router = express.Router();

router.get('/', getMovies);
router.post('/', addMovie);
router.patch('/:id', updateMovie);

export default router;
