const PREFIX = '--';

const parseArgs = () => {
  const args = process.argv;
  const indexesForPrefix = args.map((_element, index) => {
    return index;
  }).filter((index) => args[index].startsWith(PREFIX));

  indexesForPrefix.forEach((index) => {
    const result = `${args[index].slice(2)} is ${args[index + 1]}`;
    console.log(result);
  });
};
parseArgs();
