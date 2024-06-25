let count = 7;

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

let index = -1;
let found = false
let n = 8

for (let i = 0; i < count; i++) {
  if (arr[i] === n) {
    index = i;
    found = true;
    break;
  } else {
    console.log("не то число");
  }
}

found ? console.log("Нужное число под номером " + index) : console.log("Такого числа нет в списке")
