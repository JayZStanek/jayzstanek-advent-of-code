const input = `input data here`.split('\n');

const giftSample = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1,
};

function findMatchingSue(lines) {
  for (const line of lines) {
    const match = line.match(/^Sue (\d+): (.+)$/);
    if (!match) continue;

    const [_, sueNumber, attributes] = match;
    const props = Object.fromEntries(
      attributes.split(', ').map((item) => {
        const [key, val] = item.split(': ');
        return [key, Number(val)];
      })
    );

    const isValid = Object.entries(props).every(
      ([key, val]) => giftSample[key] === val
    );

    if (isValid) return sueNumber;
  }

  return null
}

const auntSueNumber = findMatchingSue(input)
