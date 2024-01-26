import { createReadStream } from 'fs';
import { stdout } from 'process';
import path from 'path';

const PATH_FILE = path.resolve('src/streams/files/fileToRead.txt');

const read = async () => {
  const readStream = createReadStream(PATH_FILE);
  readStream.pipe(stdout);
};

await read();
