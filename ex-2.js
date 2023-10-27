let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let studentScores = {
  math: 30,
  english: 70,
  tech: 100,
};

// Start coding here
let newStudentProfile = {...studentProfile, //เฉพาะ ส่วนของ Profile
  scores: {...studentProfile.scores,...studentScores}}; //ส่วนของ scores และ scores thai จากฝั่ง studentProfile

console.log(newStudentProfile);
