import { pipeline, Transform } from 'stream';
import { stdout, stdin } from 'process';

const transform = async () => {

  const transformReverse = new Transform({
    transform(chunk, encoding = 'utf-8', callback) {
      const reverseString = chunk.toString().trim().split('').reverse().join('');
      callback(null, reverseString + '\n')
    }
  })
  pipeline(
    stdin,
    transformReverse,
    stdout,
    (err) => {
      console.error(`Error : ${err}`);
    }
  )
};

await transform();