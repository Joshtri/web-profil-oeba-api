import express from 'express';
import { getPengumuman  } from '../controllers/pengumuman.controller.js';

const pengumumanRoute = express.Router();

// Route untuk mendapatkan semua pengumuman
pengumumanRoute.get('/pengumuman', getPengumuman);


export default pengumumanRoute;