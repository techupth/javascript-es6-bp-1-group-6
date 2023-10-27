function sum(...num) {
  // Start coding here !
  let sum = num.reduce(summary);
  return sum;
};

function summary(x,y){ //callback funtion
return x+y;
};

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
