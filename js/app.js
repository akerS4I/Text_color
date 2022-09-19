// Function Declaration

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(2, 5);

// Function Expression
// let foo = function () {};

// Arrow Function
// let foo2 = () => {};

// Return
// let a = 2;
// let b = a;

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(5, 6);
// console.log(result);

// console.log(sum(6, 8));

// let inputtedData = prompt();

// function calc(a, b, op) {
//   switch (op) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;
//   }
// }

// const result1 = calc(5, 9, "-");
// console.log(result1);
// calc(5, 9, "+")

// function welcoming(time) {
//   if (time < 17 && time > 5) return "Good afternoon";
//   return "Good evening";
// }

// let welcominTime = welcoming("a");

// console.log(welcominTime);

// console.log("Alis" == "Alsi");

// let option = 14;
// switch (option) {
//   case 1:
//   case 4:
//     console.log("First case");
//     break;
//   case 2:
//     console.log("Second case");
//     break;
//   case 3:
//     console.log("Third case");
//     break;
//   default:
//     console.log("default case");
// }

// const data = [
//   [5, 4, 3],
//   [2, 1, 0],
//   [-1, -2, -3],
//   [-4, -5, -6],
// ];

// function g(product, energy) {
//   let choose;
//   switch (product) {
//     case "Яйцо":
//       choose = 0;
//       return getEnergy(energy, choose);

//     case "Банан":
//       choose = 1;
//       return getEnergy(energy, choose);

//     case "Ролтон":
//       choose = 2;
//       return getEnergy(energy, choose);

//     case "Хуй":
//       choose = 3;
//       return getEnergy(energy, choose);

//     default:
//       console.log("Choose another option");
//   }
// }

// function getEnergy(energy, product) {
//   switch (energy) {
//     case "Б":
//       return data[product][0];

//     case "Ж":
//       return data[product][1];

//     case "У":
//       return data[product][2];
//   }
// }

// console.log(g("Хуй", "У"));

//_________| Б    Ж     У
// Яйцо:   | 5    4     3
// Банан:  | 2    1     0
// Ролтон: |-1   -2    -3
// Хуй:    |-4   -5    -6

// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 1; j++) console.log("*".repeat(i));
// }

// const box = document.querySelector(".box");
// console.log(box);

// for (let i = 10; i > 1; i--) {
//   for (let j = 0; j < i; j++) {
//     box.innerHTML += "$";
//   }
//   for (let j = 10; j > i; j--) {
//     box.innerHTML += "*";
//   }
//   box.innerHTML += "<br>";
// }

// Typeracer

// const op = "r";

// if (op == true) {
//   console.log("wefwef");
// } else {
//   console.log("ewfewf");
// }

// Тернарный оператор условия
// ? - if
// : - else
// op == true
//   ? console.log("if")
//   : op == "r"
//   ? console.log("else if")
//   : console.log("else");

// let option = 1;
// let name = option == 1 ? "Хуй" : "Пятница";
// if (option == 1) name = "alex";
// else name = "Пятница";

// Function Expression
// let foo = function () {
//   console.log("Hello");
// };

// let a = foo;

// foo();
// a();

const main = document.querySelector("main")
const box = document.querySelector(".box");
const input = document.querySelector(".input");

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {

    main.style.cssText=`background-color:${e.target.value};`;
  }
});
