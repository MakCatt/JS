function createStudentCard(name, age) {
  let n = document.createElement('h2')
  let a = document.createElement('span')
  n.textContent = name;
  a.textContent = age;
  document.body.append(n);
  document.body.append(a);
}


createStudentCard("Игорь", 17);
