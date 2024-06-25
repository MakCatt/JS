n = document.getElementById('name');
surname = document.getElementById('surname');
fath = document.getElementById('fath');
dateOfBirth = document.getElementById('dateOfBirth');
year = document.getElementById('studyYear');
fac = document.getElementById('fac');
sortfio = document.getElementById('sortfio')
sortfac = document.getElementById('sortfac')
sortdate = document.getElementById('sortdate')
sortyear = document.getElementById('sortyear')

startFunc();

function startFunc() {
  let studentsList = []

  let form = document.getElementById('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if(n.value.trim() === '' || surname.value.trim() === '' || fath.value.trim() === '' || dateOfBirth.value.trim() === '' || year.value.trim() === '' || fac.value.trim() === '') {
      alert('Заполните пустые поля')

      return
    }

    let newStudent = {
      fio: n.value + " " + surname.value + " " + fath.value,
      dateOfBirth: toStringDate(dateOfBirth.valueAsDate) + " (" + calculateAge(dateOfBirth.valueAsDate) + " лет)",
      studyYear: year.value + "-" + (parseInt(year.value) + 4) + " (" + calculateCourse(year.value),
      fac: fac.value
    };

    studentsList.push(newStudent);
    renderStudentsTable(studentsList);
    n.value = ''
    surname.value = ''
    fath.value = ''
    dateOfBirth.value = ''
    year.value = ''
    fac.value = ''
    alert('Студент добавлен')
  })

  let filfio = document.getElementById('filfio');
      filfac = document.getElementById('filfac');
      fildate = document.getElementById('fildate');
      filyear = document.getElementById('filyear');


  filfio.addEventListener('input', filter)  

  filfac.addEventListener('input', filter)

  fildate.addEventListener('input', filter)

  filyear.addEventListener('input', filter)

  function filter() {
    let result = [];
    let fioVal = filfio.value.trim().toLowerCase();
    let facVal = filfac.value.trim().toLowerCase();
    let dateVal = fildate.value.trim();
    let yearVal = filyear.value.trim();

    tbody.innerHTML = '';

    studentsList.forEach(student => {
      if (
        (fioVal === '' || student.fio.toLowerCase().includes(fioVal)) &&
        (facVal === '' || student.fac.toLowerCase().includes(facVal)) &&
        (dateVal === '' || student.dateOfBirth.includes(toStringDate(fildate.valueAsDate))) &&
        (yearVal === '' || student.studyYear.includes(yearVal))
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

  sortfio.addEventListener('click', function() {
    dir1 = !dir1;
    sortStudents(studentsList, 'fio', dir1);
  });

  sortfac.addEventListener('click', function() {
    dir2 = !dir2;
    sortStudents(studentsList, 'fac', dir2);
  })

  sortyear.addEventListener('click', function() {
    dir3 = !dir3;
    sortStudents(studentsList, 'studyYear', dir3);
  })

  sortdate.addEventListener('click', function() {
    dir4 = !dir4;
    sortStudents(studentsList, 'dateOfBirth', dir4);
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
    console.log(course)
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
    let birthDate = new Date(date)
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
    td1.textContent = studentObj.fio;
    td2 = document.createElement('td');
    td2.textContent = studentObj.fac;
    td3 = document.createElement('td');
    td3.textContent = studentObj.dateOfBirth;
    td4 = document.createElement('td');
    td4.textContent = studentObj.studyYear;
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
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

// Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.

// Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.
