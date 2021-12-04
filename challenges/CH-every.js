function every(arr, predicate)
{
  let verdict = true;
  for (const item of arr) {
    if (!predicate(item)) verdict = false
  }
  return verdict;
}

console.log(every([2, 4, 6], n => n % 2 === 0));
console.log(every([1, 2, 3], n => n % 2 === 0));