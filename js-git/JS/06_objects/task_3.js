let objects = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' }
]


function filter(arr, prop, value){
  let newArr = [];
  /*let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][prop] === value) {
      newArr[count] = arr[i];
      count++;
    }
  } */

  for (let obj of arr) {
    if (obj[prop] === value) {
      newArr.push(obj);
    }
  }

  return newArr;
}

let result = filter(objects, 'name', 'Иван');
console.log(result);
