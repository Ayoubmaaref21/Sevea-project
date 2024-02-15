const initarray = [1, 8, , 5, 2, 4, 6, 7, 9, 25, , 8, 77, 565, 7];
const initarraystring = ["hello", "salut", "hola", "bonjour", "slt", "ayouuub"];
const initarraypeople = [
  (ali = { age: 25, inclub: true }),
  (ahmed = { age: 16, inclub: false }),
  (salah = { age: 60, inclub: true }),
];
let newarray = initarray.filter(supcinq);
function supcinq(value) {
  if (value >= 5) {
    return true;
  }
  return false;
}
console.log("le tableau initial est:  [" + initarray + "]");
console.log("le tableau apres filtration est:  [" + newarray + "]");

let newarray1 = initarray.filter(OnlyEvenNumbers);
function OnlyEvenNumbers(value) {
  if (value % 2 == 0) {
    return true;
  }
  return false;
}
console.log("le tableau de nombre pair est:  [" + newarray1 + "]");

let newarray2 = initarraystring.filter(Onlyfewerthenfive);
function Onlyfewerthenfive(value) {
  if (value.length <= 5) {
    return true;
  }
  return false;
}
console.log("le tableau initiale  est:  [" + initarraystring + "]");
console.log("le tableau de chaine max longeur 5 est:  [" + newarray2 + "]");

let newarray3 = initarraypeople.filter(isMember);
function isMember(value) {
  if (value.inclub) {
    return true;
  }
  return false;
}
console.log("le tableau initiale  est:  [" + initarraypeople + "]");
console.log("le tableau du membre   est:  [" + newarray3 + "]");

let newarray4 = initarraypeople.filter(isolder);
function isolder(value) {
  if (value.age >= 18) {
    return true;
  }
  return false;
}

console.log("le tableau du membreplus agee que 18 est:  [" + newarray4 + "]");
