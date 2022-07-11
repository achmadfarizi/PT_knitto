"use strict";
//FizzBuzz Program
function fizzbuzz(num) {
    if (num % 15 === 0)
        return 'FizzBuzz';
    if (num % 5 === 0)
        return 'Buzz';
    if (num % 3 === 0)
        return 'Fizz';
    return num;
}
for (let i = 1; i <= 100; i++)
    console.log(fizzbuzz(i));
//Palindrome
const isPalindrome = (phrase) => {
    const original = phrase.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    const reversed = original.split('').reverse().join('');
    return original === reversed;
};
console.log(isPalindrome("A man, a plan, a canal – Panama!"));
