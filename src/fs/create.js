import { writeFile } from 'fs/promises';
import  path from 'path';

const URL = path.resolve('src/fs/files/fresh.txt');
const TEXT_CONTENT = 'I am fresh and young';
const ERROR_MESSAGE = 'FS operation failed';

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