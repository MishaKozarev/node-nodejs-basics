import path from 'path';
import fs from 'fs/promises';
import { ERROR_MESSAGE } from './constants.js';

const URL_FILES = path.resolve('src/fs/files');

const list = async () => {
  try {
    await fs.access(URL_FILES);
    let files = await fs.readdir(URL_FILES);
    console.log(files);
  } catch(error) {
      if(error.message !== ERROR_MESSAGE) {
        throw new Error(ERROR_MESSAGE);
      } else throw error;
  }
};

await list();