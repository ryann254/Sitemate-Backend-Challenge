import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

// Set security HTTP headers
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1', routes);

export default app;
