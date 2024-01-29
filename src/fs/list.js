import path from 'path';
import fs from 'fs/promises';
import { ERROR_MESSAGE } from './constants.js';

const URL_FILES = path.resolve('src/fs/files');

const list = async () => {
  try {
    let files = await fs.readdir(URL_FILES);
    console.log(files);
  } catch(error) {
    throw new Error(ERROR_MESSAGE);
  }
};

await list();