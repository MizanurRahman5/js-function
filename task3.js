/**
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values. 
 * make_avg() নামে একটি ফাংশন লিখুন যা পূর্ণসংখ্যার একটি অ্যারে এবং সেই অ্যারের আকার নেবে এবং সেই মানের গড় ফেরত দেবে।
 */


function make_avg(array){
    let sum = 0;
    for (let Number of array){
        // console.log(Number)
        sum = sum + Number;
    }
    let result = sum / array.length;
    return result;
}

const array = [2,3,4,5,6,7,];
const result = make_avg(array);
console.log(result);
