


function getAge(year) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear()
    let age = currentYear - year;
    return age;
}

let year = 2003;

console.log(getAge(year));
