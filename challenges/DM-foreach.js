function forEach(arr, callback)
{
  for (const item of arr) {
    callback(item);
  }
}

const assets = [{ value: 3 }, { value: 4 }, { value: 6 }];
forEach(assets, obj => obj.value *= 2);
console.log(assets);