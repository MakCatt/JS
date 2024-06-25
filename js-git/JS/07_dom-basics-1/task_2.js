function createStudentCard(student) {
  let n = document.createElement('h2')
  let a = document.createElement('span')
  n.textContent = student.name;
  a.textContent = student.age;
  document.body.append(n, a);
}

let studentObj={
  name: 'Игорь',
  age: 17
}

createStudentCard(studentObj);
