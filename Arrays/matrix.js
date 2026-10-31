let matrix = [
  [
  "om","rana","akshat","bist"
],
[
  "ram","sita","laxman","hanuman"
]
]
console.log(matrix[1][3]);
matrix[0][3]="rana"
console.log(matrix[0][3]);

for(let i = 0; i < matrix.length; i++){
  for(j = 0; j < matrix[i].length; j++){
    console.log(`Value at [${i}][${j}] is:`,matrix[i][j]);
    
  }
}