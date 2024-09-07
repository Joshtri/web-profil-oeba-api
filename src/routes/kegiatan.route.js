import express from 'express';
import { getKegiatan } from '../controllers/kegiatan.controller.js';

const kegiatanRoute = express.Router();

// Route untuk mendapatkan semua data kegiatan
kegiatanRoute.get('/kegiatan', getKegiatan);

export default kegiatanRoute;