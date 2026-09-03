const start = performance.now();

let total = 0;

for (let i = 0; i < 100000000; i++) {
    total += i;
}

console.log("Total:", total);

const end = performance.now();

console.log("Time:", (end - start).toFixed(2), "ms");