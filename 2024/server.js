import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = express();
server.set('trust proxy', true);
server.use('/', express.static(__dirname + '/public'));
server.listen(8438);
console.log('Live server http://localhost:8438');