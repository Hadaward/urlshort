import express from 'express';

import { config } from './config';
import { ShortURL, handleShortURL } from './routes/shorturl';

const app = express();

app.use('/', express.static('public'));

// Setup middle-wares
app.use(express.json(config.json));
app.use(express.urlencoded(config.urlencoded));

// Setup routes
app.all("*", (_, __, next) => next());
app.use("/shorturl", ShortURL);

app.use("/:id", handleShortURL);

app.listen(config.port, () => console.log(`App running on port ${config.port}`));