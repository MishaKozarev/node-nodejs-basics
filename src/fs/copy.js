import  path from 'path';
import fs from 'fs/promises';

const URL_FILE = path.resolve('src/fs/files');
const URL_FILE_COPY = path.resolve('src/fs/files_copy');
const ERROR_MESSAGE = 'FS operation failed';

const copy = async () => {
  try {
    await fs.access(URL_FILE_COPY);
    throw new Error(ERROR_MESSAGE);
  } catch (error) {
    if (error.message !== ERROR_MESSAGE) {
      fs.mkdir(URL_FILE_COPY);
      const files = await fs.readdir(URL_FILE);
      files.forEach(async (file) => {
          const contents  = await fs.readFile(`${URL_FILE}/${file}`);
          await fs.writeFile(`${URL_FILE_COPY}/${file}`, contents);
      });
    } else {
      throw error;
    }
  }
};
await copy();


