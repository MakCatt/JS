let arr = []

for (let i = 0; i < 10; i++) {
  arr[i] = i+1
}

console.log(arr)

let j = 0
let temp = 0

for (let i = 0; i <= arr.length-1; i++) {
  j = Math.floor(Math.random() * 9.9)
  temp = arr[j]
  arr[j] = arr[i]
  arr[i] = temp
}

console.log(arr)

