// Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.
// Write a function that counts the factorial of a given number. 
// Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.
// Write a function that accepts the width and length of a rectangle and calculates its area. If there is only one parameter given, it counts as a square. 
// Write a function that checks if the given number is perfect. A perfect number is a number equal to the sum of all its divisors. For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.
// Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range. Use the previous function to check, if numbers are perfect. 
// Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. If the seconds are not given, they should be displayed as 00.
// Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.
// Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.
// Write a function that counts the difference between the dates. The function accepts 6 parameters that describe 2 dates, and returns them as hh:mm:ss. While solving this problem use the functions from the two previous ones: at first, make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss.

//d1
// function compare(a,b){
//     if(a>b){
//         return 1;
//     }
//     else if(a<b){
//         return -1;
//     }
//     else if( a == b){
//         return 0;
//     } 
// }
// console.log(compare(1,2));

//d2
// function factorial(a){
//     let factoriel=1;
//     for(let i=1;i<=a;i++){
//             factoriel *= i;
//     }
//     return factoriel;
// }
// console.log(factorial(3));

//d3
// function concat(a,b,c){
//     let num=a+""+b+""+c;
//     return num;
// }
// console.log(concat(1,2,3));

//d4
// function area(a,b){
//     b=b==undefined ? b=a:b=b;
//     return a*b;
// }
// console.log(area(2));

//d5
// function perfect(a){
//     let num=0;
//     for(let i=1;i<a;i++){
//         if(a%i==0){
//             num += i;
//         }   
//     }
//     if(a == num){
//         console.log(a," is perfect");
//     }else {
//         console.log(a,"aint perfect");
//     }
// }
// perfect(6);

//d6
//?

//d7
// function hour(a,b,c){
//     c=c==undefined ? c="00" : c=c;
//     let time=a+":"+b+":"+c;
//     return time;
// }
// console.log(hour(12,14));

//d8
// function hourintosec(a,b,c){
//     return a*3600+b*60+c;
// }
// console.log(hourintosec(12,12,12));

//d9
// function secintohm(totalSeconds){
//     hours = Math.floor(totalSeconds / 3600);
//     totalSeconds %= 3600;
//     minutes = Math.floor(totalSeconds / 60);
//     seconds = totalSeconds % 60;
//     let time=hours+":"+minutes+":"+seconds;
//     return time;
// }
// console.log(secintohm(3660));

//d10
// function date_diff(a,b,c,a1,b1,c1){
//     let firstdate=hourintosec(a,b,c);
//     let seconddate=hourintosec(a1,b1,c2);
//     let tot=seconddate-firstdate;
//     return secintohm(tot);
// }
// console.log(date_diff);