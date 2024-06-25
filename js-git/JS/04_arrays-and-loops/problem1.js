let n = -3;
let m = -10;
let count = 42;

let range = Math.abs(n-m);
let min = Math.min(n, m);

let arr = [];

for (let i = 0; i < count; i++) {
  arr[i] = Math.round(Math.random() * range) + min;
}

/*let i = 0;

while (true) {
  if (i === count) {
    break;
  }
  arr[i] = Math.round(Math.random() * range) + min;
  i++;
}*/

console.log(arr)
