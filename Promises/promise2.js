function checkInventory() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("CHECKING INVENTORY...");

    //   resolve();
    reject(new Error("failed to check inventory"))
    }, 2000);
  });
  return promise;
}

function createOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("CREATING ORDER...");

    //   resolve();
    reject(new Error("failed to create order"))
    }, 1000);
  });
}

function chargePayment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("CHARGING PAYMENT...");
      resolve();
    }, 2000);
  });
}
function sendInvoice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("SENDING INVOICE...");
      resolve();
    }, 1000);
  });
}

function main() {
  checkInventory()
  .catch((err) => {
    console.log("err",err);
  })
  .then(createOrder)
   .catch((err) => {
    console.log("err",err);
  })
  .then(chargePayment)
  .then(sendInvoice)

  console.log("Other Request Processing");
}

main();

// const loginP = new Promise((resolve, reject)=> {
//     const loginS = true;

//     if(loginS) {
//         resolve("WELCOME, OM!")
//     }else {
//         reject("INVALID CREDENTIALS")
//     }
// });

// loginP.then((mes) => {
//     console.log(mes);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(()=>{
//     console.log("LOGIN ATTEMPT FINISHED");
    
// })