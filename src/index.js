import express from 'express';

// eslint-disable-next-line node/no-missing-import
import { requestLogger } from './middleware/logger.middleware.js';
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(requestLogger);
// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to Node.js ESM Best Practices!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
