const pri = ["coding", "gaming", "sleeping", "eating", "socializing"];
const prii = pri.filter(char => char.startsWith("s"));

console.log(prii); 

setTimeout(() => {
    console.log(pri[0]);
}, 2000);