let arr1 = [12, 44, 23, 5];
let arr2 = [2, 2, 17, 21, 45, 12, 54, 31, 53];

let arr = [];

let length = arr1.length + arr2.length

let index2 = 0

for (let i = 0; i < length; i++) {
  if (i < arr1.length) {
    arr.push(arr1[i])
  } else {
    arr.push(arr2[index2])
    index2++
  }
}


console.log(arr)
