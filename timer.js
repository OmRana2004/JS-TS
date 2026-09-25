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

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
//   console.log(" ");
// }


function vol(str){
  let count = 0;
    for(let i = 0; i < str.length; i++) {
        if("AEIOUaeiou".includes(str[i])){
            count++;
        }
    }
    return count
}
console.log(vol("AEiou"));






   
    

