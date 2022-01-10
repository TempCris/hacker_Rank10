/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

function gradingStudents(grades: number[]){
  // Write your code here 
  for(let index = 0; index < grades.length; index++){
    if ((grades[index] >= 38) && (((grades[index] % 5) == 3) || ((grades[index] % 5) == 4))) {
    grades[index] = grades[index] + (5 -(grades[index] % 5)); 
    }
  }
  return grades;  
}

function main() {
  console.log('---------- Cool Programing ----------\n');
  const testArray = [4, 73, 67, 38, 33];
  const result = gradingStudents(testArray);
  console.log('Result: ', result);
}

main();
