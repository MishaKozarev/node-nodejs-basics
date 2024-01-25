const PREFIX = 'RSS_';

const parseEnv = () => {
  const result = [];
  const env = process.env;
  for (let key of Object.keys(env)) {
    if (key.startsWith(PREFIX)) {
      const item = `${key}=${env[key]}`
      result.push(item)
    }
  }
  console.log(result.join('; '));
};

parseEnv();