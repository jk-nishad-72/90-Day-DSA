let prompt = require("prompt-sync")();

//* check ISBN Number

function chechISNNum() {
  let isbn = prompt("Enter 10 digits ISBN Number : ");

  if (isbn.length != 10) {
    return "Invalid Input ";
  }
  let isbnn = [];

  for (let i = 0; i < isbn.length; i++) {
    isbn[i] === "X" ? isbnn.push(10) : isbnn.push(parseInt(isbn[i]));
  }
  // console.log(isbnn);

  let sum = 0;
  let j = 10;

  for (let i = 0; i < isbnn.length; i++) {
    sum += isbnn[i] * j--;
  }

  return sum % 11 === 0 ? "ISBN Number " : "Not ISBN Number ";
}

console.log(chechISNNum());

//* Revision of ARRAYs

let size = Number(prompt("Enter a array size : "));

let arr = new Array(size);

for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt(`Enter Array of elements ${i + 1} : `));
}

//* sum of all array  elements

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

//* Max of all array  elements

let MaxElement = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > MaxElement) {
    MaxElement = arr[i];
  }
}

console.log(arr, sum, MaxElement);
