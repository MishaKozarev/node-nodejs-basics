import { createHash } from 'crypto';
import fs from 'fs/promises';
import path from 'path';

const PATH_FILE = path.resolve('src/hash/files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
  try {
    const fileContent = await fs.readFile(PATH_FILE, 'utf-8');
    const hash = createHash('sha256').update(fileContent).digest('hex');
    console.log(hash);
  } catch(error) {
    throw error;
  }
};

await calculateHash();