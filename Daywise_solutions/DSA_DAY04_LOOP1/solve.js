

// * ✅ Homework
//* accept input a and b and calculate a^b without using Math.pow

let a = Number(prompt("Enter value of A "));
let b = Number(prompt("Enter value of B "));

// first with Math.pow()
console.log(Math.pow(a, b));

// second without Math.pow()

function powCalulator(a, b) {
  if (a === 0 && b === 0) return "Invalid Input";
  if (a > 0 && b === 0) return 1;

  let ans = 1;

  if (b < 0 && a > 0) {
    for (let i = 1; i <= b * -1; i++) {
      ans = ans * a;
    }

    return 1 / ans;
  } else {
    for (let i = 1; i <= b; i++) {
      ans = ans * a;
    }
    return ans;
  }
}

console.log(powCalulator(a, b));
