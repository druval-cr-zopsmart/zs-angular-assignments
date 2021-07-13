
function flattenArray(arr) {
  const result = [];
  
  arr.forEach(element => {
    if (Array.isArray(element)) {
      const subResult = flattenArray(element);
      result.push(...subResult);
    }
    else result.push(element);
  });

  return result;
}

arr = [1, [10, [15, 17, 18, []]], [30], 31];
console.log(flattenArray(arr));