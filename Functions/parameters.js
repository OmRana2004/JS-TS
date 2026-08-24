// function para(...all) {
//     console.log(all)
// }

// para('om', 'akshat', 'ram', 'sita')

// const hero = (age)=> {
//   return  age<18 ? "You are child" : "Hi Sir";
// }
// console.log(hero(4))

function result(marks) {
    const aGrad = () => {
      return "EXCELENT"
    }
    const bGrad = () => {
        return "GOOD"
    }
    const cGrad = () => {
        return "FAIR"
    }

    if (marks>80) {
        return aGrad
    }else if (marks>60) {
        return bGrad
    } else {
        return cGrad
    } 
} 
console.log(result(88)())
