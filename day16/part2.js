const input = `input data here`

const TARGET = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1
};

const GREATER_THAN_KEYS = ['cats', 'trees'];
const LESS_THAN_KEYS = ['pomeranians', 'goldfish'];

function parseLine(line) {
  const [, num, rest] = line.match(/^Sue (\d+): (.+)$/);
  const attributes = {};
  rest.split(', ').forEach(attr => {
    const [key, value] = attr.split(': ');
    attributes[key] = Number(value);
  });
  return { num: Number(num), attributes };
}

function isMatch(attributes) {
  for (const [key, value] of Object.entries(attributes)) {
    const target = TARGET[key];
    if (GREATER_THAN_KEYS.includes(key)) {
      if (value <= target) return false;
    } else if (LESS_THAN_KEYS.includes(key)) {
      if (value >= target) return false;
    } else {
      if (value !== target) return false;
    }
  }
  return true;
}

const sues = input.split('\n').map(parseLine);
const matchingSue = sues.find(sue => isMatch(sue.attributes));

console.log(`Aunt Sue is ${matchingSue.num}`);
