
// let n = Number(prompt("Enter a Number : "))

//  *Que. 01z1️⃣✅  Repeate hello world namaste duniya

//  let c = 0;

//  do{
//      console.log("Namste Duniya : 🙏") ;
//       c++;

//  }while(c<n)

//  1️⃣✅✅✅✅  is complete4



//*Q. Guess the number 




   function GessTheGame() {
  let computer = Math.floor(Math.random() * 100);

  let UserInput;

  do {
    UserInput = Number(prompt("Enter a Number between 1 to 100  : "));

    if (isNaN(UserInput) || UserInput > 100 || UserInput < 0) {
      console.log(" Invalid input ");
      continue;
    }
    if (UserInput > computer) {
      console.log(UserInput + " is Too high, try again 👋 ");
    } else if (UserInput < computer) {
      console.log(UserInput + " is Too low, try again 👍 ");
    } else {
      console.log("Congratulations 🎉 " + computer);
    }
  } while (computer != UserInput);
}

// GessTheGame();




//*    ✅Q. sasta Calculator (using do while)

function Calculator() {
  let n1 = Number(prompt("Enter NUM 1 value : "));
  let n2 = Number(prompt("Enter NUM 2 value "));

  let opearation = prompt(
    "Enter a Opearation ( + , - , * , / ) :  "
  ).toLocaleLowerCase();
  // console.log(opearation)

  switch (opearation) {
    case "+":
      console.log(n1 + n2);
      break;
    case "-":
      console.log(n1 - n2);
      break;
    case "*":
      console.log(n1 * n2);
      break;

    case "/":
      if (n2 == 0) console.log("divide by zero error ");
      else console.log(n1 / n2);
      break;
  }
}



// Calculator()

function Restorent() {
  let prompt = require("prompt-sync")();
  let total;
  let n;
  do {
    console.log("Welcome to the Restaurant!");
    console.log("Here is the menu:");

    console.log("1) Biryani 🍛      -  $3");
    console.log("2) Chappaties🫓    -  $2");
    console.log("3) Subjiya 🥘🍲    -  $4");
    console.log("4) Drinks 🧋🥤     -  $1");
    console.log("5) !*  Exite  *!");

    n = Number(prompt("Choose number which you want to order : "));

    switch (n) {
      case 1:
        do {
          console.log(" 😛🤤  Biryani 🍛           -  $3");
          console.log("1) Chikern 🍗 Biryani 🍛    ");
          console.log("2) Mutton💪 Biryani 🍛      ");
          console.log("3) Egg🥚 Biryani 🍛         ");
          console.log("4) *Go to Menu back* ");
          n = Number(prompt("Enter Yor Order Number : "));
          switch (n) {
            case 1:
              console.log(" Chikern 🍗 Biryani 🍛    ");
              break;
            case 2:
              console.log(" Mutton💪 Biryani 🍛      ");
              break;
            case 3:
              console.log(" Egg🥚 Biryani 🍛         ");
              break;
            default:
              console.log("Thanks");
          }
        } while (n !== 4);
        break;
      case 2:
        do {
          console.log(" Chappaties🫓    -  $2");

          console.log("1) Tandury roti  🍗     ");
          console.log("2) Alu paratha  🍛      ");
          console.log("3)  Dessi Ghee Roti 🍛         ");
          console.log("4) *Go to Menu back* ");
          n = Number(prompt("Enter Yor Order Number : "));
          switch (n) {
            case 1:
              console.log(" Tandury roti  🍗     ");

              break;
            case 2:
              console.log(" Alu paratha  🍛      ");

              break;
            case 3:
              console.log("  Dessi Ghee Roti 🍛         ");

              break;
            default:
              console.log("Thanks");
          }
        } while (n !== 4);
        break;

      case 3:
        do {
          console.log("   Subjiya 🥘🍲    -  $4");
          console.log("1)  Paneer Tikka  🍗     ");
          console.log("2)  chiken kari   🍛      ");
          console.log("3)  fish kari  🍛         ");
          console.log("4) *Go to Menu back* ");
          n = Number(prompt("Enter Yor Order Number : "));
          switch (n) {
            case 1:
              console.log("  Paneer Tikka 🥘🥞      ");

              break;
            case 2:
              console.log("  chiken kari 🍗 🍛      ");

              break;
            case 3:
              console.log("  fish kari  🍥🐠        ");

              break;
            default:
              console.log("Thanks");
          }
        } while (n !== 4);

        break;

      case 4:
        do {
          console.log(" 😛🤤  Drinks 🧋🥤     - $1");

          console.log("1) wine 🍻      ");
          console.log("2) Soda  🍹       ");
          console.log("3) Maja   🍺🍾🥂         ");
          console.log("4) *Go to Menu back* ");
          n = Number(prompt("Enter Yor Order Number : "));
          switch (n) {
            case 1:
              console.log("1) wine 🍻      ");

              break;
            case 2:
              console.log("2) Soda  🍹       ");

              break;
            case 3:
              console.log("3) Maja   🍺🍾🥂         ");

              break;
            default:
              console.log("Thanks");
          }
        } while (n !== 4);

        break;

      default:
        console.log(" Please Enter your Order 🥺🙏");
    }
  } while (n !== 5);
}

Restorent();
















