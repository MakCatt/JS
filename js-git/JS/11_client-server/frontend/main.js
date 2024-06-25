n = document.getElementById('name');
surname = document.getElementById('surname');
lastname = document.getElementById('lastname');
birthday = document.getElementById('birthday');
studyStart = document.getElementById('studyStart');
faculty = document.getElementById('faculty');
sortfio = document.getElementById('sortfio')
sortfac = document.getElementById('sortfac')
sortdate = document.getElementById('sortdate')
sortyear = document.getElementById('sortyear')

startFunc();

function startFunc() {
  let studentsList = []

  let form = document.getElementById('form');

  form.addEventListener('submit', async e => {

    e.preventDefault();

    if(n.value.trim() === '' || surname.value.trim() === '' || lastname.value.trim() === '' || birthday.value.trim() === '' || studyStart.value.trim() === '' || faculty.value.trim() === '') {
      alert('Заполните пустые поля')
      return
    }

    let newStudent = {
      name: n.value,
      surname: surname.value,
      lastname: lastname.value,
      birthday: birthday.valueAsDate, //toStringDate(birthday.valueAsDate) + " (" + calculateAge(birthday.valueAsDate) + " лет)",
      studyStart: studyStart.value, //studyStart.value + "-" + (parseInt(studyStart.value) + 4) + " (" + calculateCourse(studyStart.value),
      faculty: faculty.value
    }




    /*async function saveStudent(student) {
      const response = await fetch('http://localhost:3000/api/students', {
      method: 'POST',
      body: JSON.stringify(student),
      headers: { 'Content-Type': 'application/json' }
    });
    const obj = await response.json();
    return obj;
    }

    let savedStudent = saveStudent(newStudent);

    studentsList.push(savedStudent);
    renderStudentsTable(studentsList);*/


    const response = await fetch(`http://localhost:3000/api/students`, {
      method: 'POST',
      body: JSON.stringify(newStudent),
      headers: { 'Content-Type': 'application/json' }
    });
    const obj = await response.json();


    studentsList.push(obj);
    renderStudentsTable(studentsList);
    form.reset();

  })


  async function loadTodoItems() {
    const response = await fetch(`http://localhost:3000/api/students`);
    const data = await response.json();
    data.forEach(student => {
      studentsList.push(student)
    })
    renderStudentsTable(studentsList)
  }

  loadTodoItems()


  async function deleteStud(id) {
    const URL = `http://localhost:3000/api/students/${id}`
    const response = await fetch(URL, {
      method: 'DELETE',
    })
    if (response.status === 404) {
      console.log("Не удалось найти студента");
      return;
  } else if (!response.ok) {
      console.log("Произошла ошибка при удалении студента");
      return;
  }
    const data = await response.json();
    data.forEach(student => {
      studentsList.push(student)
    })
    renderStudentsTable(studentsList)
  }

  let filid = document.getElementById('filid');
      filfio = document.getElementById('filfio');
      filfac = document.getElementById('filfac');
      fildate = document.getElementById('fildate');
      filyear = document.getElementById('filyear');


  filid.addEventListener('input', filter)

  filfio.addEventListener('input', filter)

  filfac.addEventListener('input', filter)

  fildate.addEventListener('input', filter)

  filyear.addEventListener('input', filter)

  function filter() {
    let result = [];
    let idval = filid.value.trim();
    let fioVal = filfio.value.trim().toLowerCase();
    let facVal = filfac.value.trim().toLowerCase();
    let dateVal = fildate.value.trim();
    let yearVal = filyear.value.trim();

    tbody.innerHTML = '';

    studentsList.forEach(student => {
      if (
        (idval === '' || student.id.includes(idval)) &&
        (fioVal === '' || student.name.toLowerCase().includes(fioVal) || student.surname.toLowerCase().includes(fioVal) ||
        student.lastname.toLowerCase().includes(fioVal)) &&
        (facVal === '' || student.faculty.toLowerCase().includes(facVal)) &&
        (dateVal === '' || (toStringDate(new Date(student.birthday)) + " (" + calculateAge(new Date(student.birthday)) + " лет)").includes(toStringDate(fildate.valueAsDate))) &&
        (yearVal === '' || (student.studyStart + "-" + (parseInt(student.studyStart) + 4) + " (" + calculateCourse(student.studyStart)).includes(yearVal))
      ) {
        // Если элемент проходит все проверки, добавляем его в таблицу
        result.push(student)
      }
    })

    renderStudentsTable(result)
  }

  let dir1 = true;
  let dir2 = true;
  let dir3 = true;
  let dir4 = true;
  let dir5 = true;

  sortfio.addEventListener('click', function() {
    dir1 = !dir1;
    sortStudents(studentsList, 'name', dir1);
  });

  sortfac.addEventListener('click', function() {
    dir2 = !dir2;
    sortStudents(studentsList, 'faculty', dir2);
  })

  sortyear.addEventListener('click', function() {
    dir3 = !dir3;
    sortStudents(studentsList, 'studyStart', dir3);
  })

  sortdate.addEventListener('click', function() {
    dir4 = !dir4;
    sortStudents(studentsList, 'birthday', dir4);
  })

  sortid.addEventListener('click', function() {
    dir5 = !dir5;
    sortStudents(studentsList, 'id', dir5);
  })

  function sortStudents(studentArray, prop, dir = false) {

    let result = studentArray.sort(function(a, b) {

      if(!dir ? a[prop] < b[prop] : a[prop] > b[prop]) return -1;
      return 0;

    });
    renderStudentsTable(result);
  }

  function calculateCourse(year) {
    let today = new Date();
    let startYear = parseInt(year);
    let graduateYear = startYear + 4;
    if(graduateYear < today.getFullYear() || (graduateYear === today.getFullYear && today.getMonth > 8)) {
      return "закончил)"
    }
    let course = today.getFullYear() - startYear;
    if (today.getMonth() > 8) {
      course++;
    }

    return course + " курс)";
  }

  function toStringDate(date) {
    return date.toLocaleDateString();
  }

  function calculateAge(date) {
    let today = new Date();
    let birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear()
    let m = today.getMonth() - birthDate.getMonth()

    if(m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  function getStudentItem(studentObj) {
    tbody = document.getElementById('tbody');
    tr = document.createElement('tr');
    td1 = document.createElement('td');
    td1.textContent = studentObj.id;
    td2 = document.createElement('td');
    td2.textContent = studentObj.name + " " + studentObj.surname + " " + studentObj.lastname;
    td3 = document.createElement('td');
    td3.textContent = studentObj.faculty;
    td4 = document.createElement('td');
    td4.textContent = toStringDate(new Date(studentObj.birthday)) + " (" + calculateAge(new Date(studentObj.birthday)) + " лет)";
    td5 = document.createElement('td');
    td5.textContent = studentObj.studyStart + "-" + (parseInt(studentObj.studyStart) + 4) + " (" + calculateCourse(studentObj.studyStart);
    deleteButton = document.createElement('button');
    deleteButton.textContent = "Удалить элемент";
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.style.padding = "5px";
    deleteButton.addEventListener('click', () => deleteStud(studentObj.id))
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);
    tr.append(deleteButton);
    tbody.append(tr);
  }

  function renderStudentsTable(studentsArray) {
    tbody = document.getElementById('tbody')
    tbody.innerHTML = '';
    studentsArray.forEach(student => {
      getStudentItem(student);
    })
  }
}


