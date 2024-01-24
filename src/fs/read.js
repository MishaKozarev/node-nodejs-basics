import path from 'path';
import fs from 'fs/promises';
import { ERROR_MESSAGE } from './constants.js';

const URL_FILE_READ = path.resolve('src/fs/files/fileToRead.txt');
const read = async () => {
  try {
    fs.access(URL_FILE_READ);
    let fileRead = await fs.readFile(URL_FILE_READ, 'utf-8');
    console.log(fileRead);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await read();