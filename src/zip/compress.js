import { createWriteStream, createReadStream } from 'fs';
import { createGzip } from 'zlib';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const readStream = createReadStream(__dirname + '/files/fileToCompress.txt');
  const writeStream = createWriteStream(__dirname + '/files/archive.gz');
  const gzip = createGzip();
  readStream.pipe(gzip).pipe(writeStream);
};

await compress();