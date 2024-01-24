import path from 'path';
import fs from 'fs/promises';
import { ERROR_MESSAGE } from './constants.js';

const URL_FILE_DELETE = path.resolve('src/fs/files/fileToRemove.txt');

const remove = async () => {
  try {
    await fs.unlink(URL_FILE_DELETE);
  } catch(error) {
    throw new Error(ERROR_MESSAGE);
  }
};

await remove();