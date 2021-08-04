const compare = (a, b) => {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
};

const compareNumbers = (a, b) => (a - b);

const compareStrings = (a, b) => {
  const itemA = typeof a == 'string' ? a.toUpperCase() : a;
  const itemB = typeof b == 'string' ? b.toUpperCase() : b;
  return compare(itemA, itemB);
};

const compareDates = (a, b) => {
  const dateA = new Date(a);
  const dateB = new Date(b);
  return compare(dateA, dateB);
};

const compareTo = (a, b, type) => {
  switch (type) {
    case 'string':
      return compareStrings(a, b);
    case 'date':
      return compareDates(a, b);
    case 'number':
      return compareNumbers(a, b);
  }
};