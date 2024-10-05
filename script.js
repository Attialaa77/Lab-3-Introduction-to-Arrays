// console.log("hello");

let x = -20;

if (x > 10) {
    console.log('x is greater than 10');
} else if("x>5"){
    console.log("x is smaller than 10 but bigger than 5");

   
} else if (x > 2) {
    console.log("x is bigger than 2 but smaller than 5");

} else if (x == 0) {

    console.log("x is 0");

} else{
    console.log('x is smaller than zero and is negative number');
}

var grade = 'A';

switch (grade) {
    case 'A':
        console.log('Excellent');
        break;
    case 'B':
        console.log('Good');
        break;
    case 'C':
        console.log('Fair');
        break;
    case 'D':
        console.log('Poor');
        break;
    case 'F':
        console.log('Failing');
        break;
    default:
        console.log('Unknown grade');
}



myCustomLabel : {
    for (var i = 0; i < 5; i++) {
      if (i === 5) {
        break myCustomLabel ; // Exits the loop as well as the myCustomLabel  block when i is 5
      }
      console.log(i);
    }
  }

  

