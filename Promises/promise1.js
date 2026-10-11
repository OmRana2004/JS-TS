function checkInventory() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("CHECKING INVENTORY...");
      resolve();
    }, 2000);
  });
  return promise;
}

function createOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("CREATING ORDER...");
      resolve();
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
  .then(createOrder)
  .then(chargePayment)
  .then(sendInvoice);

  console.log("Other Request Processing");
}

main();
