import express from 'express';

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));

export default app;
