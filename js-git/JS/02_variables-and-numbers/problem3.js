let n = -3
let m = -10

let range = Math.abs(n - m)
let num = Math.round(Math.random() * range)
let min = Math.min(n, m)

console.log(min + num)
