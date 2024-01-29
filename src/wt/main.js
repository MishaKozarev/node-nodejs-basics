import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';
import { cpus } from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  let num = 10;

  const allPromises = cpus().map(() => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__dirname + '/worker.js', { workerData: num++});
      worker.on('message', value => resolve(value));
      worker.on('error', value => reject(value));
    });
  })

  const workerResult = await Promise.allSettled(allPromises);

  const result = workerResult.map(({status, value}) => ({
    status: status === 'rejected' ? 'error' : 'resolved',
    data: status === 'rejected' ? null : value
  }));

  console.log(result);
};

await performCalculations();

