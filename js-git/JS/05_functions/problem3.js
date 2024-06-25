function arrSort(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      } else continue;
    }
  }
  return arr;
}


let arr = [2, 5, 3, 4, 1, 77, 11, 55, 66];

let sort = arrSort(arr);

console.log(sort);
