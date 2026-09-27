// const orderFood = (hof) => {
//     console.log("YOUR FOOD IS PREPARIG!");

const { use } = require("react");

//     setTimeout(()=> {
//         hof()
//     },2000)
// }

// const ready = () => {
//     console.log("YOUR FOOD IS READY SIR!")
// }
// orderFood(ready);

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
//   console.log(" ");
// }


let vol = (str) => {
    let count = 0;
    for(let i = 0; i<str.length; i++){
        if("aeiouAEIOU".includes(str[i])){
           count++
        }
    }
    return count;
}
console.log(vol("omrana"));
 
const rvs = (str) => {
    return str.split("").reverse("").join("")
}
console.log(rvs("omrana"));

let str = "OMRANA";
let rvss = str.split("").reverse().join("")
console.log(rvss);





   
    

