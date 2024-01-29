import { createWriteStream, createReadStream } from 'fs';
import { createUnzip } from 'zlib';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const readStream = createReadStream(__dirname + '/files/archive.gz');
  const writeStream = createWriteStream(__dirname + '/files/fileToCompress.txt');
  const unZip = createUnzip();
  readStream.pipe(unZip).pipe(writeStream);
};

await decompress();