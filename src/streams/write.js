import { createWriteStream } from 'fs';
import { stdin } from 'process';
import path from 'path';

const PATH_FILE = path.resolve('src/streams/files/fileToWrite.txt');

const write = async () => {
  const writeStream = createWriteStream(PATH_FILE);
  stdin.pipe(writeStream);
};

await write();