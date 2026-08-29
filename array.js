const pri = ["coding", "gaming", "sleeping", "eating", "socializing"];
const newPri = pri.filter((charS) => charS.startsWith('s') )
console.log(newPri);

setTimeout(() => {
    console.log(pri[4])
},2000)