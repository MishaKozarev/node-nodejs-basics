import path from 'path';
import fs from 'fs/promises';
import { ERROR_MESSAGE } from './constants.js';

const URL_FILE_NAME = path.resolve('src/fs/files/wrongFilename.txt');
const URL_FILE_RENAME = path.resolve('src/fs/files/properFilename.md');

const rename = async () => {
  if (await fs.access(URL_FILE_RENAME)) {
    throw new Error(ERROR_MESSAGE);
  } else {
      await fs.renameFile(URL_FILE_NAME, URL_FILE_RENAME);
  }
};

await rename();