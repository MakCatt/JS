// Обязательная часть задания
/* let user1={
  name: 'Игорь',
  age: 17
}

let user2={
  name: 'Оля',
  age: 21
}

function getOlderUser(userOne, userTwo) {
  let name;
  if (userOne.age > userTwo.age) {
    name = userOne.name;
  } else {
    name = userTwo.name;
  }
  return name;
}

let result = getOlderUser(user1, user2)
console.log('Старший пользователь:',result); */


// // Не обязательная часть задания
let allUsers=[
  {
    name: 'Валя',
    age: 11
  },
  {
    name: 'Таня',
    age: 24
  },
  {
    name: 'Рома',
    age: 21
  },
  {
    name: 'Надя',
    age: 34
  },
  {
    name: 'Антон',
    age: 7
  }
]
function getOlderUserArray(usersArray){
  let maxAge = usersArray[0].age;
  let name = usersArray[0].name;
  for (let i = 0; i < usersArray.length; i++) {
    if (usersArray[i].age > maxAge) {
      maxAge = usersArray[i].age;
      name = usersArray[i].name;
    }
  }
  return name;
}

let result2 = getOlderUserArray(allUsers)
console.log('Старший пользователь:',result2);
