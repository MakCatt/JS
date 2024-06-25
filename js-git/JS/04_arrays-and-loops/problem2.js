let count = 3;

let arr = [];

for (let i = 0; i < count; i++) {
  arr[i] = i + 1;
}

console.log(arr);

let j = 0;
let temp = 0;

for (let i = 0; i < count; i++) {
  j = Math.floor(Math.random() * count);
  temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

console.log(arr);
