/** Operators
Instructions
Play around with operators. Here's a suggestion for a program you can implement:

You have a set of students from two different grading systems.

First grading system
One grading system is defined as grades being from 1-5 where 3 and above means you pass the course.

Second grading system
The other grade system has the following grades A, A-, B, B-, C, C- where A is the top grade and C is the lowest passing grade.

The task
Given the following array allStudents representing all students and their grades, construct a new array studentsWhoPass containing all students who pass.

TIP, use a for-loop and if...else and comparison operators: 

let allStudents = [
  'A',
  'B-',
  1,
  4,
  5,
  2
]

let studentsWhoPass = [];
*/

let allStudents = [
    'A',
    'B-',
    1,
    4,
    5,
    2
  ]
  
  for (let index = 0; index < allStudents.length; index++) {
      var studentsWhoPass = allStudents[index];
      if (studentsWhoPass.valueOf(allStudents) == 'A' || studentsWhoPass.valueOf(allStudents) >= 3) {
                console.log(`Student is Aprobed in position ${index} is ${studentsWhoPass}`)
                var studentAprobed = 0   
                studentAprobed++  
          }
    }
  
  //var studentsWhoPass = [];
  
