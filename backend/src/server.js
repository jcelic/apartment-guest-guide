import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import guideRoutes from './routes/guide.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/guide', guideRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
