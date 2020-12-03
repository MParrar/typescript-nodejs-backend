import express from 'express';
import config from './config';
import cors from 'cors';
import morgan from 'morgan';
import videoRoutes from './routes/videos.routes';
const app = express();

app.set('port', config.PORT || 4000);

app.use(morgan('dev'));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/api', videoRoutes);

export default app;