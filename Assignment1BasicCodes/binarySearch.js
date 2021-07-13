
function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end)/2);
    
    if (arr[mid] === item) return mid;
    if (arr[mid] < item) start = mid + 1;
    else end = mid - 1;
  }

  return -1; // if item not found
}

arr = [1, 10, 15, 17, 30, 31];
itemIndex = binarySearch(arr, 31);

console.log(itemIndex);
