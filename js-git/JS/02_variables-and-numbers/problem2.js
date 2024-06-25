let a = 13.890123
let b = 2.891564
n = 3

console.log(Math.floor(a % 1 * Math.pow(10, n)))
console.log(Math.floor(b % 1 * Math.pow(10, n)))

let ar = Math.round(a % 1 * Math.pow(10, n))
let br = Math.round(b % 1 * Math.pow(10, n))

console.log(ar > br)
console.log(ar < br)
console.log(ar >= br)
console.log(ar <= br)
console.log(ar === br)
console.log(ar !== br)
