//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  return operation(array);
}

const studentScoresRoom1 = [12, 40, 67, 80, 100, 15, 40, 12, 40, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
function checkStudentNumber(array) {
  if (array.length >= 5) {
    return true;
  } else {
    return false;
  }
}
console.log(atLeastFive(studentScoresRoom1, checkStudentNumber));

function checkPerformance(students) {
  let counter = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i] >= 70) {
      counter = counter + 1;
    }
    if (counter >= 5) {
      return "Pass";
    } else {
      return "Failed";
    }
  }
}
let scoreRoom1Result = atLeastFive(checkPerformance, checkStudentNumber);
let scoreRoom2Result = atLeastFive(checkPerformance, checkStudentNumber);
let scoreRoom3Result = atLeastFive(checkPerformance, checkStudentNumber);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
