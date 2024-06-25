let a = [];

for (let i = 0; i < 10; i++) {
    a[i] = i;
}

console.log(a)


for (let index of a) {
    console.log(a[index])
}