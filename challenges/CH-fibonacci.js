function fib(n, memo)
{
  memo = memo || {}
  if (memo[n]) return memo[n]
  if (n < 2) return n;
  return fib(n - 2, memo) + fib(n - 1, memo)
}

console.log(fib(8));
