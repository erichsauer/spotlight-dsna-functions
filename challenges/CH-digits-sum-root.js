function rootDigit(num)
{
  const sum = [ ...num.toString() ].map(digit => +digit).reduce((a, b) => a + b);
  if (num.toString().length === 1) return num;

  return rootDigit(sum);
}

console.log(rootDigit(123));
console.log(rootDigit(4322));
console.log(rootDigit(999888777));