import { writeFile } from 'fs/promises';
import  path from 'path';
import { ERROR_MESSAGE } from './constants.js';

const URL = path.resolve('src/fs/files/fresh.txt');
const TEXT_CONTENT = 'I am fresh and young';

const create = async () => {
  try {
    await writeFile(
      URL, TEXT_CONTENT, {flag: 'wx'}
    );
  } catch {
    throw Error(ERROR_MESSAGE);
  }
};

await create();