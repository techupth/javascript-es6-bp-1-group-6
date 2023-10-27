const employee1 = {
  name: "John",
  age: 20,
};

//const result1 = employee1.scores.english;
const result1 = employee1.scores?.english;

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};

//const result2 = employee2.scores.english;
const result2 = employee2.scores?.english;

console.log(result1); //  Result 1 จะได้ผลลัพธ์ undefined
console.log(result2); // Result 2 จะได้ผลลัพธ์ "English score is not defined"
