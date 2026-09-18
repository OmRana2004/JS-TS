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

function one(callback) {
    setTimeout(()=> {
            callback();
    },2000)
    
    console.log("THIS IS FIRST FUNCTION");
}

    function two() {
        console.log("THIS IS SECOND FUNCTION")
    }

one(two);

