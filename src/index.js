import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/dbConfig.js';

import pengumumanRoute from './routes/pengumuman.route.js';
import kegiatanRoute from './routes/kegiatan.route.js';

config();

connectDB();
// const PORT = process.env.APP_PORT || 5000;
const app = express();

    

app.use(cors({
    origin: '*',
    methods:["GET"],
    credentials:true
}))

app.use(express.json());


app.use('/api/v1', pengumumanRoute, kegiatanRoute)

// Server
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});