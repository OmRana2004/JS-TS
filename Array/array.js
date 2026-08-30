// const pri = ["coding", "gaming", "sleeping", "eating", "socializing"];
// const newPri = pri.filter((charS) => charS.startsWith('s') )
// console.log(newPri);
//  console.log(pri[4])

// setTimeout(() => {
//    pri [4] = "SOCILA", console.log(pri[4])
// },2000)


// FINDING THE INDEX OF THE ARRAY
const name = ["RAM","SITA","LAXMAN","HANUMAN"];
name.pop()
name.push("hanuman")
name.shift()
name.unshift("RAM")
name.reverse()

// console.log(name.length)
// setTimeout(() => {
//     console.log(name[name.length-1])
// },2000)

// console.log(name)

const arr = []

for(let i = 1; i<=10; i++)
    if(i % 2 === 0) {
        arr.push(i)
    }

console.log(arr)