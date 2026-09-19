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

const reversing = (str) => {
    reversed = "";
    for( let i = str.length-1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}
     console.log(reversing("ANAR MO"));
     
   
    

