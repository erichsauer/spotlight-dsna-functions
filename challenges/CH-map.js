function map(arr, callback)
{
  const result = [];
  for (const item of arr) {
    result.push(callback(item));
  }
  return result;
};

console.log(map([1, 6, 5], n => n**2));