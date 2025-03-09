/** Loop an Array
Instructions
Create a program that lists every 3rd number between 1-20 and prints it to the console.

TIP: use a for-loop and modify the iteration-expression */

let number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


for (let index = 1; index < number.length; index++) {
    var result = number[index];
    if (result % 3 == 0) {
        console.log(result)
    }
    
}
