function filter(arr, predicate)
{
  const result = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (predicate(element)) result[ result.length ] = element;
  }
  return result;
}

console.log(filter([2, 6, 5], n => n % 2 === 0));