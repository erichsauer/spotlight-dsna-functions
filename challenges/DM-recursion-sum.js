function sum(n)
{
  if (n < 2) return n;
  return n + sum(n - 1)
}

console.log(sum(12));