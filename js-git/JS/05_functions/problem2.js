
function filter(whiteList, blackList) {
  let valid = [];
  for (let email of whiteList) {
    if (!blackList.includes(email)) {
      valid.push(email);
    }
  }
  return valid;
}


let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru'];

let blackList = ['jsfunc@mail.ru','goodday@day.ru'];

let result = filter(whiteList, blackList);

console.log(result);
