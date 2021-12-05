function repeat(txt, n)
{
  if (n ===1) return txt;
  return repeat(txt, n-1) + repeat(txt, 1)
}

console.log(repeat('cat', 8));