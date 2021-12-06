//TODO check this
function isHappy(n, memo)
{
  memo = memo || {}
  const result = n
    .toString()
    .split("")
    .map((num) => +num)
    .reduce((acc, num) => (acc + num ** 2), 0);
    console.log(result)
  if (result === 1) return true;
  if (memo[result]) return false;
  memo[result] = result;
  return isHappy(result, memo)
}

console.log(isHappy(19))