function some(arr, predicate)
{
  let verdict = false;
  for (const item of arr) {
    if (predicate(item)) verdict = true;
  }
  return verdict;
}

console.log(some([1, 7, 5], n => n % 2 === 0));