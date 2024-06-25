let students = ["Валя","Игорь","Витя","Женя","Таня","Рома"];

let index = -1;
let found = false


for (let i = 0; i < students.length; i++) {
    if (students[i] === "Женя") {
        index = i;
        found = true;
        break;
    } else {
        console.log("не то имя");
    }
}

found ? console.log("Женя под номером " + index) : console.log("Такого имени нет в списке")