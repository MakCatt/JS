
let allStudents=[
  {name: 'Валя', age: 11},
  {name: 'Таня',age: 24},
  {name: 'Рома',age: 21},
  {name: 'Надя', age: 34},
  {name: 'Антон', age: 7}
]

function createStudentsList(listArr) {
  let ul = document.createElement('ul');
  document.body.append(ul);
  for (let i = 0; i < listArr.length; i++) {
    let li = document.createElement('li');
    let h2 = document.createElement('h2');
    let sp = document.createElement('span');
    h2.textContent = listArr[i].name;
    sp.textContent = "Возраст: " + listArr[i].age + " лет";
    li.append(h2, sp);
    ul.append(li);
  }

}

createStudentsList(allStudents);

