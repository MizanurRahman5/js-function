/**
 * Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 * odd_even() নামে একটি ফাংশন লিখুন যা একটি পূর্ণসংখ্যার মান নেয় এবং বলে যে এই মানটি জোড় না বিজোড়। এমনকি যদি এমনকি ফিরে আসে. বিজোড় ফিরলে বিজোড়
 */

function odd_even(number) {

    if (number % 2 === 0){
        const result = 'It is Even Number ' + number;
        return result;
    }else if (number % 2 !== 0){
        const result = 'It is Odd Number ' + number;
        return result;
    }
 
}


const numbers = 34;
const result = odd_even(numbers);
console.log(result)