/*
map() ek JavaScript ka method hai jo mainly arrays ke saath use hota hai.
Iska kaam simple hai — array ke har element par ek function chalana aur ek naya array banana.
*/


const arr = [1, 2, 3, 4, 5];
const data = ["om", "rana", "akshat"]

const newArr = arr.map((x => x*2))

const newData = data.map((caps) => caps.startsWith("a") ? caps.toUpperCase() : caps)

console.log(newArr)
console.log(newData)

