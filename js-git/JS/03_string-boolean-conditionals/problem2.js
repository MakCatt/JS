let userName = "MakSat"
let userSurname = "Oraz"

console.log(userName)
console.log(userSurname)

let f = userName.substring(0, 1)
let s = userName.substring(1)

let ff = userSurname.substring(0, 1)
let ss = userSurname.substring(1)

let changes = false


if (f === f.toLowerCase() || s !== s.toLowerCase()) {
  fi = f.toUpperCase()
  si = s.toLowerCase()
  ffi = ff.toUpperCase()
  ssi = ss.toLowerCase()
  changes = true
} else {
  fi = f
  si = s
  ffi = ff
  ssi = ss
}

console.log(fi + si)
console.log(ffi + ssi)

changes ? console.log("Имя было преобразовано") : console.log("Имя осталось без изменений")

