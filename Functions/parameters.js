// function para(...all) {
//     console.log(all)
// }

// para('om', 'akshat', 'ram', 'sita')

// const hero = (age)=> {
//   return  age<18 ? "You are child" : "Hi Sir";
// }
// console.log(hero(4))

// function result(marks) {
//     const aGrad = () => {
//       return "EXCELENT"
//     }
//     const bGrad = () => {
//         return "GOOD"
//     }
//     const cGrad = () => {
//         return "FAIR"
//     }

//     if (marks>80) {
//         return aGrad
//     }else if (marks>60) {
//         return bGrad
//     } else {
//         return cGrad
//     }
// }
// console.log(result(88)())

// const greet = (name, age) => {
//     console.log(name, age)
// }

// greet("om", 22)

// function calculator(a, b) {

//     const add = () => (a+b)

//     const sub = () => (a-b)

//     const mult = () => (a*b)

//     const div = () => (a/b)
//        return[add(), sub(), mult(), div()]
// }

// console.log(calculator(12,2))

//  1 CODE

function orderFood(hof) {
  console.log("Food is Preparing");

  setTimeout(() => {
    hof();
  }, 3000);
}

function orderReady() {
  console.log("Your order is ready sir!");
}

orderFood(orderReady);

// // 2 CODE

// function orderFood() {
//   console.log("Your Food is preparing");
// }

// const orderReady = () => {
//   setTimeout(() => {
//     console.log("Your order is redy sir!");
//   }, 3000);
// };

// orderFood();
// orderReady();
