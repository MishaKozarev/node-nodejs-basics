import { fork } from "child_process";
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
  const pathChild = path.join(__dirname + '/files/script.js');
  const childProcess = fork(pathChild, args,  {stdio: ['pipe','pipe','ipc']});

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(['arg1', 'arg2']);
