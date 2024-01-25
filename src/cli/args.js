const PREFIX = '--';

const parseArgs = () => {
  const result = [];
  const args = process.argv.slice(2);
  const indexesForPrefix = args.map((_element, index) => {
    return index;
  }).filter((index) => args[index].startsWith(PREFIX));

  indexesForPrefix.forEach((index) => {
    const items = `${args[index].slice(2)} is ${args[index + 1]}`;
    result.push(items);
  });
  console.log(result.join(', '));
};
parseArgs();
