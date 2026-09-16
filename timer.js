// const orderFood = (hof) => {
//     console.log("YOUR FOOD IS PREPARIG!");

//     setTimeout(()=> {
//         hof()
//     },2000)
// }

// const ready = () => {
//     console.log("YOUR FOOD IS READY SIR!")
// }
// orderFood(ready);

const bool = false;
const val1 = 10;
const val2 = 20;

function sum(a,b){
     const total = a+ b
      return total;
}

let res1 = sum(val1,val2) 
let res2 = sum(30,40) 

console.log(`RESULT IS: ${bool === true ? res1 : res2}`)

