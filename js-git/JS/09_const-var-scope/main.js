// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.

function createNumbersArray(count) {
  const arr= [];
  if(count % 2 === 0 && count <= 10) {
    for (let i = 1; i < count*(count / 2) + 1; i++) {
      arr.push(i);
      arr.push(i);
    }
  } else if (count % 2 === 1 || count === 0 || count === null || count === undefined || count > 10) {
    for (let i = 1; i <= 8; i++) {
      arr.push(i);
      arr.push(i);
    }
  } else return;
  return arr;
}

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(arr) {
  let m = arr.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }

  return arr;
}

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.
startGame();

const CON = document.getElementById('con');


function startGame() {
  createForm();

}

function createForm() {
  const CON = document.getElementById('con');
  let form = document.createElement('form');
  form.style.display = "flex";
  form.style.flexDirection = "column";
  form.style.width = "20%";
  form.style.marginTop = "25%"
  form.style.marginLeft = "39%";
  let input = document.createElement('input');
  input.placeholder = "Введите четное число 2-10";
  let btn = document.createElement('button');
  btn.textContent = "Играть";
  btn.type = "submit";

  form.append(input, btn);
  CON.append(form);
  btn.addEventListener('click', () => {
    CON.innerHTML = '';
    createElements(input.value)
  })

}


function createElements(count) {
  let arr = shuffle(createNumbersArray(count));
  let title = document.createElement('h1');
  title.textContent = "Игра в Пары";
  let ul = document.createElement('ul');
  ul.style.listStyle = "none";
  ul.style.display = "flex";
  ul.style.gap = "14px";
  ul.style.flexWrap = "wrap";
  ul.style.margin = "20px";
  const CON = document.getElementById('con');
  CON.style.textAlign = "center";
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = arr[i];
    p.style.fontSize = "40px";
    p.style.fontWeight = "600";
    p.classList.add("unvis");
    li.style.width = "116px";
    li.style.height = "116px";
    li.style.border = "1px solid";
    li.style.borderRadius = "15px";
    li.style.display = "flex";
    li.style.justifyContent = "center";
    li.style.alignItems = "center";
    li.addEventListener("click", cardClickHandler);
    li.append(p);
    ul.append(li);

  }

  CON.append(title, ul);

  let lastClicked = null;

  function cardClickHandler(e) {
    let card = e.currentTarget;
    let number = card.querySelector('p');

    number.classList.toggle('vis')
    number.classList.toggle('unvis')

    if (lastClicked === null) {
      lastClicked = card;
    } else {
      if (lastClicked.querySelector('p').textContent === number.textContent && lastClicked !== card) {
        lastClicked.removeEventListener('click', cardClickHandler);
        card.removeEventListener('click', cardClickHandler);
      } else {
        let previousClicked = lastClicked;
        setTimeout(() => {
          let lastClickedNum = previousClicked.querySelector('p');
          lastClickedNum.classList.toggle('unvis');
          lastClickedNum.classList.toggle('vis');
          number.classList.toggle('vis');
          number.classList.toggle('unvis');
        }, 500);
      }
      lastClicked = null;
    }
    checkEndGame()
  }

}


function checkEndGame() {
  let count = document.querySelectorAll('.unvis').length;
  if(count === 0) {
    createButton();
  }
}

function createButton() {
  btn = document.createElement('button')
  btn.classList.add('btn', 'btn-primary')
  btn.textContent = "Сыграть еще раз";
  const CON = document.getElementById('con');
  CON.append(btn);
  btn.addEventListener('click', () => {
    const CON = document.getElementById('con');
    CON.innerHTML = '';
    createForm();
  })
}




